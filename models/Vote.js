// Dependencies
// ------------
// Sequelize
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection.js');

// 'votes' table class Sequelize Model

class Vote extends Model
{

}

Vote.init(
{
  id: // PRIMARY KEY
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  owner: // the ID of the User who made the vote
  {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: 'user', key: 'id' }
  },
  attraction_id: // the ID of the Attraction the vote was placed on
  {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: 'attraction', key: 'id' }
  },
  weight: // -1/+1 : thumbs down/thumbs up
  {
    type: DataTypes.TINYINT,
    allowNull: false,
    validate:
    {
      isPlusOrMinusOne(num) { return num === 1 || num === -1}
    }
  }
},
{
  hooks:
  {},
  sequelize,
  underscored: true,
  modelName: 'vote'
});
