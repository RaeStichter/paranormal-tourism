const router = require('express').Router();
const { User } = require('../../models');
const uniqid = require('uniqid');
const loggedIn = require('../../utils/checkLogin.js');
const isAdmin = require('../../utils/checkAdmin.js');

// Get api/user
router.get('/', loggedIn, isAdmin, (req,res) =>
{
  User.findAll({ attributes: { exclude: 'passhash' } })
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  })
});

// Get api/user/:id
router.get('/:id', loggedIn, isAdmin, (req,res) =>
{
  User.findOne(
  {
    attributes: { exclude: 'passhash' },
    where: { id: req.params.id }
  }).then(dbUserData =>
  {
    if (!dbUserData) return res.status(400).json({ message: 'User not found' });

    return res.status(500).json(dbUserData);
  })
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  })
});

// POST api/user
router.post('/', (req,res) =>
{
  User.create(
  {
      id: uniqid(),
      username: req.body.username,
      email: req.body.email,
      passhash: req.body.password
  })
  .then(dbUserData =>
  {
    req.session.save(() =>
    {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      return res.json(dbUserData);
    });
  })
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  })
});

// POST user login
router.post('/login', (req,res) =>
{
  User.findOne({ where: { email: req.body.email } })
  .then(dbUserData =>
  {
    console.log(req.body);
    if(!dbUserData) return res.status(400).json({ message: 'User not found' });

    const validPassword = dbUserData.checkPassword(req.body.passhash);

    if (!validPassword) return res.status(400).json({ message: 'Incorrect password' });

    req.session.save(() =>
    {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      return res.json({ message: 'You are now logged in' });
    });
  })
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  })
});

// POST user/logout
router.post('/logout', (req, res) =>
{
  if (req.session.loggedIn)
  {
    req.session.destroy(() =>
    {
      console.log('session ended')
      return res.status(204).end();
    })
  }
  else
  {
    return res.status(404).end();
  }
});


// PUT update user
router.put('/:id', (req,res) =>
{
  User.update(req.body,
  {
    individualHooks: true,
    where: { id: req.params.id }
  })
  .then(dbUserData =>
  {
    if(!dbUserData[0]) return res.status(400).json({ message: 'User not found' });

    return res.json(dbUserData)
  })
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  });
});

// DELETE user
router.delete('/:id', (req,res) =>
{
  User.destroy({ where: { id: req.params.id }})
  .then(dbUserData =>
  {
    if(!dbUserData) return res.status(400).json({ message: 'User not found' });

    return res.json(dbUserData);
  })
  .catch(err =>
  {
    console.log(err);
    return res.status(500).json(err);
  })
});

module.exports = router;
