const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attraction extends Model {}

Attraction.init(
{
  id:
  {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [1] }
  },
  lattitude:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [9] }
  },
  longitude:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [9] }
  },
  category_id:
  {
    type: DataTypes.INTEGER,
    references: { model: 'category', key: 'id' }
  },
  description:
  {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imagePath:
  {
    type: DataTypes.STRING
  },
  owner:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [1] },
    default: 'admin'
  }
},
{
  sequelize,
  underscored: true,
  freezeTableName: true,
  modelName: 'attraction'
});

module.exports = Attraction;
