const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
  Attraction,
  Category,
  Comment,
  Type,
  User,
  Vote,
  AttractionType,
} = require("../../models");

// <server>/ - Default URL, should serve index.html // TODO:
// router.get('', (req, res) =>
// {
//   res.status(200).json({ message: 'is this working????!' });
// });
// HTML routes here // TODO:

// ROUTE used for pulling all attraction data.  Currently displaying
router.get("/", (req, res) => {
  Attraction.findAll({
    attributes: [
      "id",
      "name",
      "lat",
      "lng",
      "category_id",
      "description",
      "owner",
    ],
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
      },
      {
        model: Type,
        as: "attraction_types",
        through: AttractionType,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((dbAttractionData) => {
      const attractions = dbAttractionData.map((attraction) =>
        attraction.get({ plain: true })
      );
      res.render("index", {
        attractions,
      });
    })
    .catch((err) => {
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

// ROUTE used for attractions
router.get("/attractions", (req, res) => {
  Attraction.findAll({
    attributes:[
      'id',
      'name',
      'lat',
      'lng',
      'category_id',
      'description',
      'owner'
    ],
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
      },
      {
        model: Type,
        as: "attraction_types",
        through: AttractionType,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((dbAttractionData) => {
      const attractions = dbAttractionData.map((attraction) =>
        attraction.get({ plain: true })
      );
      res.render("attractions", {
        attractions,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  //res.status(200).json({ message: 'This is where we will create an account' });
  //res.render('attractions');
});

// ROUTE used for /account/create
router.get("/account/create", (req, res) => {
  //res.status(200).json({ message: 'This is where we will create an account' });
  res.render("createAccount");
});

// ROUTE used for login
router.get("/login", (req, res) => {
  //res.status(200).json({ message: 'This is the login page' });
  res.render("login");
});

// ROUTE used for attractions
router.get("/attractions/:id", (req, res) => {
  Attraction.findOne({
    where: {
      id: req.params.id,
    },
    attributes:[
      'id',
      'name',
      'lat',
      'lng',
      'category_id',
      'description',
      'owner'
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "owner", "attraction_id"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: Category,
        attributes: ["id", "name"],
      },
      {
        model: Type,
        as: "attraction_types",
        through: AttractionType,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((dbAttractionData) => {
      const attraction = dbAttractionData.get({ plain: true });
      console.log(attraction);
      res.render("single-attraction", {
        attraction
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  //res.render('attractions');
});

module.exports = router;
