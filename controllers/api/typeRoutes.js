// Dependencies
// ------------
// express router
const router = require('express').Router();
// Sequelize models
const { Type } = require('../../models');
// express middleware
const isAdmin = require('../../utils/checkAdmin.js');

// '/' POST - add a new type, check if admin
router.post('/', isAdmin, (req, res) =>
{

});

// '/:id' PUT - Update a type, check if admin
router.put('/:id', isAdmin, (req, res) =>
{

});

// '/:id' DELETE - Delete a type, check if admin
router.delete('/:id', isAdmin, (req, res) =>
{

});

module.exports = router;
