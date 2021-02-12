// express middleware to verify that user is owner of attraction or admin
// sequelize models
const { User, Comment }

// expects req.params.id to be comment id
const ownsComment = (req, res, next) =>
{
  // User isn't logged in -> redirect to login
  if (!req.session.user_id) res.status(401).redirect('/login');

  // Find the user to check level
  User.findOne({ where: { id: req.session.user_id }, attributes: ['level'] })
  .then(userData =>
  {
    if (userData.level === 2) next(); // User is admin, next

    Comment.findOne({ where: { id: req.params.id }, attributes: ['owner'] })
    .then(commentData =>
    {
      if (commentData.owner === req.session.user_id) next(); // User owns comment
      else res.status(401).json({ message: 'You are do not own this comment and are not admin' });
    })
  })
  .catch(err => { console.log('EXPRESS MIDDLEWARE ERROR', 'CHECKOWNSCOMMENT', err); res.status(500).json(err); }
}

module.exports = ownsComment;
