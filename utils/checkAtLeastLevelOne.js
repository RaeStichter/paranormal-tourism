// express middleware to check that user.level > 1
// sequelize models
const { User } = require('../models');

const atLeastLevelOne = (req, res, next) =>
{
  User.findOne({ where: { id: req.session.user_id }, attributes: ['level'] })
  .then(userData =>
  {
    if (userData.level >= 1) next();
    else res.status(401).json({ message: 'You are not authorized' });
  })
}

module.exports = atLeastLevelOne;
