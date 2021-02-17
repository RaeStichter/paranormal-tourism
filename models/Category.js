const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'category'
    }
)
module.exports = Category;
