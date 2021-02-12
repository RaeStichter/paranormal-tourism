// Dependencies
// ------------
// express router
const router = require('express').Router();
// sequelize models
const { Attraction, Vote } = require('../../models');
// express middleware
const loggedIn = require('../../utils/checkLogin.js');
const atLeastLevelOne = require('../../utils/checkAtLeastLevelOne.js');
const ownsAttraction = require('../../utils/checkOwnsAttraction.js');
// uniqid
const uniqid = require('uniqid');

// '/' POST - add a new attraction, verify user level > 0
// expects { name: 'abc', lattitude: '<lattitude as string>', longitude: '<longitude as string>',
// category_id: '3', type_id: '2', description: 'dasdfkasjfj adjasjd', images: 'imagePath' }
router.post('/', atLeastLevelOne, (req, res) =>
{
  Attraction.create(
  {
    id: uniqid()
    name: req.body.name,
    lattitude: req.body.lattitude,
    longitude: req.body.longitude,
    category_id: req.body.category_id,
    type_id: req.body.type_id,
    description: req.body.description,
    imagePath: req.body.imagePath,
    owner: req.session.user_id
  })
  // redirect client to new attraction page
  .then(dbPostData => { res.status(200).redirect('/attractions/'+dbPostData.id) })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/ATTRACTIONROUTES ERROR', '/ POST', err);
    res.status(500).json(err);
  });
});

// '/:id' - PUT - update attraction with new info, verify owner or admin
router.put('/:attraction_id', ownsAttraction, (req, res))

// '/:id' - DELETE - delete an attraction, verify owner or admin

// '/:attraction_id/comments' - POST - add a comment to the attraction, verify logged in
// '/:attraction_id/comments/:id' - Delete a comment, verify owner of comment or admin

// NOT MVP // TODO:
// '/:attraction_id/votes'
// '/:attraction_id/votes/:id's
