// Dependencies
// ------------
// express router
const router = require('express').Router();
// sequelize connection for rawquery
const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');
// Sequelize models
const { Attraction } = require('../../models');
// validSearch middleware
const validSearch = require('../../utils/validSearch.js');
// load into env variables apiKey for Google Maps
require('dotenv').config();
// axios for fetching from external apis
const axios = require('axios');
// google maps geocoding query url
const gcQuery = 'https://maps.googleapis.com/maps/api/geocode/json' + '?key=' + process.env.GM_API_KEY + '&address=';
// geo-distance-js npm package for getting distance between coords
const dist = require('geo-distance-js');

// '/' GET - search for Attractions
// expects 'api/search?location=miami&category=2&type=3'
router.get('/', validSearch, async (req, res) =>
{
  let sLocation = req.query.location;
  let sCategory = req.query.category;
  let sType = req.query.type;
  let sCoords;

  // send location to API for geocoding
  let gmRes;
  try
  {
    gmRes = await axios.get(gcQuery+sLocation);
    sCoords = gmRes.data.results[0].geometry.location;

    console.log('sCoords', sCoords);
  }
  catch (err)
  {
    console.log('/CONTROLLERS/API/SEARCHROUTES ERROR', '/ - GET A', e);
    return res.status(500).json(err);
  }


  // find all attractions where category = category & type = type
  // TODO: remove console.logs for debugging
  let sResults;
  Attraction.findAll(
  {
    where: { category_id: sCategory }, // TODO: also filter through attractionType
    raw: true,
    attributes: [ 'id', 'lat', 'lng' ]
  })
  .then(async attractionResults =>
  {
    sResults = attractionResults;
    if (!sResults.length) return res.status(404).json({ message: 'No results found' });
    console.log('sResults', sResults);

    // get distance between user and attractions
    let distances = dist.getDistance(sCoords, sResults);
    console.log('sResults w/ distances', distances)

    // sort by distance asc
    let sortedResults = distances.sort((a, b) => (a.distance > b.distance) ? 1 : -1);
    console.log('sResults sorted by assending distance', sortedResults);

    // get first 20 attractions
    let firstTwenty = [];
    for (let x = 0; x < sortedResults.length && x < 20; x++)
    {
      let attr = await sequelize.query("SELECT id, name, description FROM attraction WHERE id = ?",
      {
        type: QueryTypes.SELECT,
        replacements: [sortedResults[x].id]
      });

      attr = { id: attr[0].id, name: attr[0].name, description: attr[0].description, distance: sortedResults[x].distance };
      firstTwenty.push(attr);
    }

    console.log('First up to 20 closest attractions matching search', firstTwenty);

    // TODO: return res.status(200).render('results', {firstTwenty})
    return res.status(200).json(firstTwenty);
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/SEARCHROUTES ERROR', '/ - GET B', err);
    return res.status(500).json(err);
  })
});

module.exports = router;
