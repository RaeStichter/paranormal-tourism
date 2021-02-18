const { AttractionType } = require('../models');

const attractionTypeData = [
    {
        attraction_id: '1',
        type_id: 1
    },
    {
        attraction_id: '2',
        type_id: 3
    },
    {
        attraction_id: '2',
        type_id: 6
    },
    {
        attraction_id: '3',
        type_id: 1
    },
    {
        attraction_id: '4',
        type_id: 3
    },
    {
        attraction_id: '5',
        type_id: 1
    },
    {
        attraction_id: '6',
        type_id: 2
    },
    {
        attraction_id: '6',
        type_id: 3
    },
    {
        attraction_id: '7',
        type_id: 3
    },
    {
        attraction_id: '7',
        type_id: 5
    },
    {
        attraction_id: '8',
        type_id: 4
    },
    {
        attraction_id: '9',
        type_id: 3
    },
    {
        attraction_id: '9',
        type_id: 4
    },
    {
        attraction_id: '10',
        type_id: 3
    },
    {
        attraction_id: '10',
        type_id: 7
    },
    {
        attraction_id: '11',
        type_id: 3
    }
];

const seedAttractionTypes = () => AttractionType.bulkCreate(attractionTypeData);

module.exports = seedAttractionTypes;