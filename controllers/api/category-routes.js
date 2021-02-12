const router = require('express').Router();
const { Category } = require('../../models');

// Get api/user
router.get('/', (req,res) => {
    Category.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;