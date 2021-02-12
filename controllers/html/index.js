const router = require('express').Router();
//const sequelize = require('../config/connection');

// <server>/ - Default URL, should serve index.html // TODO:
// router.get('', (req, res) =>
// {
//   res.status(200).json({ message: 'is this working????!' });
// });
// HTML routes here // TODO: 

// ROUTE used for creating the homepage index.html
router.get('/', (req, res) => {
  //res.status(200).json({ message: 'This is the index' });
  res.render('index');
});

// ROUTE used for /account/create
router.get('/account/create', (req, res) => {
  //res.status(200).json({ message: 'This is where we will create an account' });
  res.render('createAccount');
});

// ROUTE used for login
router.get('/login', (req, res) => {
  //res.status(200).json({ message: 'This is the login page' });
  res.render('login');
});

// ROUTE used for attractions
router.get('/attractions', (req, res) => {
  //res.status(200).json({ message: 'This is the login page' });
  res.render('attractions');
});


module.exports = router;
