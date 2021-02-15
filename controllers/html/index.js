const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Attraction, Category, Comment, Type, User, Vote } = require('../../models');

// <server>/ - Default URL, should serve index.html // TODO:
// router.get('', (req, res) =>
// {
//   res.status(200).json({ message: 'is this working????!' });
// });
// HTML routes here // TODO: 

// ROUTE used for creating the homepage index.html
router.get('/', (req, res) => {
  // Category.findAll({
  //   attributes: [
  //     'id',
  //     'name'
  //   ],
  // })
  //   .then(dbData => {
  //     const category = dbData.map(category => category.get({ plain: true }));

  //     res.render('index', {
  //       category
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  //res.render('index');
});



// router.get('/', (req,res) => {
//   Category.findAll()
//   .then(dbUserData => res.json(dbUserData))
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   })
// });

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
