// Dependencies
// ------------
// express router
const router = require('express').Router();
// Sequelize models
const { Category } = require('../../models');
// express middleware
const isAdmin = require('../../utils/checkAdmin.js');

// '/' POST - add a new category, check for admin
router.post('/', isAdmin, (req, res) =>
{

});

// '/:id' PUT - update a category, check for admin
router.put('/:id', isAdmin, (req, res) =>
{

});

// '/:id' DELETE - delete a category, check for admin
router.delete('/:id', isAdmin, (req, res) =>
{

});

module.exports = router;
