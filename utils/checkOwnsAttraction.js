// express middleware to verify that user is owner or admin
// sequelize models
// expects req.params.attaction_id
const { User, Attraction }

const ownsAttraction = (req, res, next) =>
{
  if (!req.session.user_id) res.status(401).redirect('/login');

  User.findOne({ where: { id: req.session.user_id }, attributes: ['level'] })
  .then(userData =>
  {
    if (userData.level === 2) next(); // User is admin, next

    Attraction.findOne({ where: { id: req.params.attaction_id }, attributes: ['owner'] })
    .then(attractionData =>
    {
      if (attractionData.owner === req.session.user_id) next(); // User owns attraction
      else res.status(401).json({ message: 'You are do not own this attraction and are not admin' });
    })
  })
  .catch(err => { console.log('EXPRESS MIDDLEWARE ERROR', 'CHECKOWNSATTRACTION', err); res.status(500).json(err); }
}

module.exports = ownsAttraction;
