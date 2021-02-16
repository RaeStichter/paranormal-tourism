// express middleware to verify that user is owner of attraction or admin
// sequelize models
const { User, Comment } = require('../models')

// expects req.params.id to be comment id and user to be loggedIn
const ownsComment = (req, res, next) =>
{
  // Find the user to check level
  User.findOne({ where: { id: req.session.user_id }, attributes: ['level'] })
  .then(userData =>
  {
    if (userData.level == 2) return next(); // User is admin, next

    Comment.findOne({ where: { id: req.params.id }, attributes: ['owner'] })
    .then(commentData =>
    {
      if (commentData.owner === req.session.user_id) return next(); // User owns comment
      else return res.status(401).json({ message: 'You do not own this comment and are not admin' });
    })
  })
  .catch(err => { console.log('EXPRESS MIDDLEWARE ERROR', 'CHECKOWNSCOMMENT', err); return res.status(500).json(err); });
}

module.exports = ownsComment;
