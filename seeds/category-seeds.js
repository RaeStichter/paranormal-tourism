const { Category } = require('../models');

const categoryData = [
    {
        name: 'Aliens'
    },
    {
        name: 'Cryptids'
    },
    {
        name: 'Hauntings'
    },
    {
        name: 'Witches'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;