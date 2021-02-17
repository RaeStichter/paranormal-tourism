// Dependencies
// ------------
// express router
const router = require('express').Router();
// Sequelize models
const { Category } = require('../../models');
// express middleware
const loggedIn = require('../../utils/checkLogin.js');
const isAdmin = require('../../utils/checkAdmin.js');

// '/' POST - add a new category, check for admin
// expects { name: 'abc', image: './images/ghost.png' }
router.post('/', loggedIn, isAdmin, (req, res) =>
{
  Category.create({ name: req.body.name, image: req.body.image })
  .then(dbCategoryData => { res.status(200).json(dbCategoryData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/ POST', err);
    return res.status(500).json(err);
  });
});

// '/:id' PUT - update a category, check for admin
// expects { name: 'abc', image: './images/witch.png' }
router.put('/:id', loggedIn, isAdmin, (req, res) =>
{
  Category.update({ name: req.body.name, image: req.body.image }, { where: { id: req.params.id }})
  .then(updatedCategoryData => { return res.status(200).json(updatedCategoryData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/:id PUT', err);
    return res.status(500).json(err);
  })
});

// '/:id' DELETE - delete a category, check for admin
router.delete('/:id', loggedIn, isAdmin, (req, res) =>
{
  Category.destroy({ where: { id: req.params.id }})
  .then(deletedCategory =>
  {
    if (!deletedCategory) return res.status(404).json({ message: 'No category with that ID' });
    else return res.status(200).json({ message: 'Category deleted' });
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/:id DELETE', err);
    return res.status(500).json(err);
  })
});

module.exports = router;
