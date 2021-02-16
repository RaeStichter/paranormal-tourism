const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Attraction, Category, Comment, Type, User, Vote } = require('../../models');

// <server>/ - Default URL, should serve index.html // TODO:
// router.get('', (req, res) =>
// {
//   res.status(200).json({ message: 'is this working????!' });
// });
// HTML routes here // TODO: 

// ROUTE used for pulling all attraction data.  Currently displaying
router.get('/', (req, res) => {
  Attraction.findAll({
    attributes:[
      'id',
      'name',
      'latitude',
      'longitude',
      'category_id',
      'description',
      'imagePath',
      'owner'
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'name']
      },
      {
        model: Type,
        attributes: ['id', 'name']
      }
    ]
  })
    .then(dbAttractionData => {
      const attractions = dbAttractionData.map(attraction => attraction.get({ plain: true}));
      res.render('index', {
        attractions
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
// ROUTE used for pulling all categories
// router.get('/', (req, res) => {
//   Category.findAll({
//     attributes:[
//       'id',
//       'name'
//     ]
//   })
//     .then(dbCategoryData => {
//       const categories = dbCategoryData.map(category => category.get({ plain: true}));

//       res.render('index', {
//         categories
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
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
router.get('/attractions/:id', (req, res) => {
  Attraction.findAll({
    attributes:[
      'id',
      'name',
      'latitude',
      'longitude',
      'category_id',
      'description',
      'imagePath',
      'owner'
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'name']
      },
      {
        model: Type,
        attributes: ['id', 'name']
      }
    ]
  })
    .then(dbAttractionData => {
      const attractions = dbAttractionData.map(attraction => attraction.get({ plain: true}));
      res.render('attractions', {
        attractions
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  //res.render('attractions');
});


module.exports = router;
