// Dependencies
// ------------
// express router
const router = require('express').Router();
// sequelize models
const { Attraction, Comment } = require('../../models');
// express middleware
const loggedIn = require('../../utils/checkLogin.js');
const atLeastLevelOne = require('../../utils/checkAtLeastLevelOne.js');
const ownsAttraction = require('../../utils/checkOwnsAttraction.js');
const ownsComment = require('../../utils/checkOwnsComment.js');
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
// expects { name: 'abc', lattitude: '<lattitude as string>', longitude: '<longitude as string>',
// category_id: '3', type_id: '2', description: 'dasdfkasjfj adjasjd', images: 'imagePath' }
router.put('/:attraction_id', ownsAttraction, (req, res) =>
{
  Attraction.update(
  {
    name: req.body.name,
    lattitude: req.body.lattitude,
    longitude: req.body.longitude,
    category_id: req.body.category_id,
    type_id: req.body.type_id,
    description: req.body.description,
    imagePath: req.body.imagePath
  },
  {
    where: { id: req.params.attraction_id }
  })
  .then(updatedAttactionData => { res.status(200).redirect('/attractions/'+req.params.attraction_id); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/ATTRACTIONROUTES ERROR', '/:attraction_id PUT', err);
    res.status(500).json(err);
  })
});

// '/:id' - DELETE - delete an attraction, verify owner or admin
router.delete('/:attraction_id', ownsAttraction, (req, res) =>
{
  Attraction.destroy({ where: { id: req.params.attraction_id }})
  .then(dbAttractionData =>
  {
    if (!dbAttractionData) { res.status(404).json({ message: 'No attraction found with this id' }); return; }

    res.status(200).redirect('/'); // Attraction deleted, back to main page
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/ATTRACTIONROUTES ERROR', '/:attraction_id DELETE', err);
    res.status(500).json(err);
  })
})

// '/:attraction_id/comments' - POST - add a comment to the attraction, verify logged in
// expects { comment_text: 'abcasdja' }
router.post('/:attraction_id/comments', loggedIn, (req, res) =>
{
  Comment.create(
  {
    owner: req.session.user_id,
    attraction_id: req.params.attraction_id
    comment_text: req.body.comment_text,
  })
  .then(dbCommentData => { res.status(200).redirect('/attractions/'+req.params.attraction_id); }
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/ATTRACTIONROUTES ERROR', '/:attraction_id/comments POST', err);
    res.status(500).json(err);
  });
})

// '/:attraction_id/comments/:id' - Delete a comment, verify owner of comment or admin
router.delete('/:attraction_id/comments/:id', ownsComment, (req, res) =>
{
  Comment.destroy({ where: { id: req.params.id }})
  .then(dbCommentData =>
  {
    if (!dbCommentData) { res.status(404).json({ message: 'No comment found with this id' }); return; }

    res.status(200).redirect('/attractions/'+req.params.attraction_id); // Comment deleted, refresh attraction page
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/ATTRACTIONROUTES ERROR', '/:attraction_id/comments/:id DELETE', err);
    res.status(500).json(err);
  })
})

// NOT MVP // TODO:
// '/:attraction_id/votes'
// '/:attraction_id/votes/:id's
