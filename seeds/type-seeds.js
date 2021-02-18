const { Type } = require('../models');

const typeData = [
    {
        name: 'Museum'
    },
    {
        name: 'Cemetery'
    },
    {
        name: 'Historical Site'
    },
    {
        name: 'Sighting Location'
    },
    {
        name: 'Asylum'
    },
    {
        name: 'Prison'
    },
    {
        name: 'Walking Tour'
    }
];

const seedTypes = () => Type.bulkCreate(typeData);

module.exports = seedTypes;