// Dependencies
// ------------
// express router
const router = require('express').Router();
// Sequelize models
const { Type } = require('../../models');
// express middleware
const loggedIn = require('../../utils/checkLogin.js');
const isAdmin = require('../../utils/checkAdmin.js');

// '/' POST - add a new type, check if admin
// expects { name: 'abc' }
router.post('/', loggedIn, isAdmin, (req, res) =>
{
  Type.create({ name: req.body.name })
  .then(dbTypeData => { res.status(200).json(dbTypeData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/TYPEROUTES ERROR', '/ POST', err);
    return res.status(500).json(err);
  });
});

// '/:id' PUT - Update a type, check if admin
// expects { name: 'abc' }
router.put('/:id', loggedIn, isAdmin, (req, res) =>
{
  Type.update({ name: req.body.name }, { where: { id: req.params.id }})
  .then(updatedTypeData => { return res.status(200).json(updatedTypeData); })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/TYPEROUTES ERROR', '/:id PUT', err);
    return res.status(500).json(err);
  });
});

// '/:id' DELETE - Delete a type, check if admin
router.delete('/:id', loggedIn, isAdmin, (req, res) =>
{
  Type.destroy({ where: { id: req.params.id }})
  .then(deletedType =>
  {
    if (!deletedType) return res.status(404).json({ message: 'No type with that ID' });
    else return res.status(200).json({ message: 'Type deleted' });
  })
  .catch(err =>
  {
    console.log('/CONTROLLERS/API/TYPEROUTES ERROR', '/:id DELETE', err);
    return res.status(500).json(err);
  });
});

module.exports = router;
