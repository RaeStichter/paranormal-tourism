const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attraction extends Model {}

Attraction.init(
    {
        id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'attraction'
    }
)