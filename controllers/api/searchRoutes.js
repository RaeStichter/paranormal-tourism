// Dependencies
// ------------
// express router
const router = require('express').Router();
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
  let sResults;
  Attraction.findAll(
  {
    where: { category_id: sCategory }, // TODO: also filter through attractionType
    raw: true,
    attributes: [ 'id', 'latitude', 'longitude' ]
  })
  .then(attractionResults =>
  {
    sResults = attractionResults;
    if (!sResults.length) return res.status(404).json({ message: 'No results found' });
    console.log('sResults', sResults);

    // get distance between user and attractions
    let distances = [];
    sResults.forEach((res) =>
    {
      console.log(res.latitude, res.longitude, sCoords.lat, sCoords.lng);
      distances.push(dist.getDistance(parseFloat(res.latitude), parseFloat(res.longitude), parseFloat(sCoords.lat), parseFloat(sCoords.lng)));
    });

    console.log(distances)

    return res.status(200).end();
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/SEARCHROUTES ERROR', '/ - GET B', err);
    return res.status(500).json(err);
  })
});

module.exports = router;
