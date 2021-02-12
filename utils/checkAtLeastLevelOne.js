// express middleware to check that user.level > 1
// sequelize models
const { User } = require('../models');

const atLeastLevelOne = (req, res, next) =>
{
  // TODO: verify user.level >= 1
  next();

  User.
}

module.exports = atLeastLevelOne;
