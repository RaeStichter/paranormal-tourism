const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')

class AttractionType extends Model
{

}

AttractionType.init(
{
  id:
  {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  attraction_id:
  {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: 'attraction', key: 'id' }
  },
  type_id:
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'type', key: 'id' }
  }
},
{
  sequelize,
  modelName: 'attraction_type',
  underscored: true,
  freezeTableName: true
});

module.exports = AttractionType;
