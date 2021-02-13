const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Model
{
  async checkPassword(pass)
  {
    let valid = await bcrypt.compare(pass, this.passhash);
    return valid;
  }
}

User.init(
{
  id:
  {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  username:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len:[1] }
  },
  passhash:
  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len:[1] }
  },
  email:
  {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  level:
  {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 0
  }
},
{
  hooks:
  {
    async beforeCreate(newUserData)
    {
      // Hash users password before creating user in database
      newUserData.passhash = await bcrypt.hash(newUserData.passhash, 10);
      return newUserData;
    },
    async beforeUpdate(updatedUserData)
    {
      // Hash users password before updating user in database
      updatedUserData.passhash = await bcrypt.hash(updatedUserData.passhash, 10);
      return updatedUserData;
    }
  },
  sequelize,
  underscored: true,
  freezeTableName: true,
  modelName: 'user'
});

module.exports = User;
