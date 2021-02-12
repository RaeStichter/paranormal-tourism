const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Type extends Model{}

Type.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        attraction_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'attraction',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'type'
    }
)

module.exports = Type;
