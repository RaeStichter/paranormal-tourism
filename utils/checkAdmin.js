// express middleware to check that user.level == 2
// sequelize models
const { User } = require('../models');

const isAdmin = (req, res, next) =>
{
  User.findOne({ where: { id: req.session.user_id }, attributes: ['level'] })
  .then(userData =>
  {
    if (userData.level === 2) next();
    else res.status(401).json({ message: 'You are not authorized' });
  })
  .catch(err => { return res.status(500).json(err); });
}

module.exports = isAdmin;
