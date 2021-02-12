const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
{
  id:
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  comment_text:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [1] }
  },
  owner:
  {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: 'user', key: 'id' }
  },
  attraction_id:
  {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: 'attraction', key: 'id' }
  }
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment'
});

module.exports = Comment;
