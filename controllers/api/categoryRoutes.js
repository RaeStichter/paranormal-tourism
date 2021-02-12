// Dependencies
// ------------
// express router
const router = require('express').Router();
// Sequelize models
const { Category } = require('../../models');
// express middleware
const isAdmin = require('../../utils/checkAdmin.js');

// '/' POST - add a new category, check for admin
// expects { name: 'abc' }
router.post('/', isAdmin, (req, res) =>
{
  Category.create({ name: req.body.name })
  .then(dbCategoryData => { res.status(200).json(dbCategoryData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/ POST', err);
    res.status(500).json(err);
  });
});

// '/:id' PUT - update a category, check for admin
// expects { name: 'abc' }
router.put('/:id', isAdmin, (req, res) =>
{
  Category.update({ name: req.body.name }, { where: { id: req.params.id }})
  .then(updatedCategoryData => { res.status(200).json(updatedCategoryData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/:id PUT', err);
    res.status(500).json(err);
  })
});

// '/:id' DELETE - delete a category, check for admin
router.delete('/:id', isAdmin, (req, res) =>
{
  Category.destroy({ where: { id: req.params.id }})
  .then(deletedCategory =>
  {
    if (!deletedCategory) res.status(404).json({ message: 'No category with that ID' });
    else res.status(200).json({ message: 'Category deleted' });
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/CATEGORYROUTES ERROR', '/:id DELETE', err);
    res.status(500).json(err);
  })
});

module.exports = router;
