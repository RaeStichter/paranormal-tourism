// Dependencies
// ------------
// express router
const router = require("express").Router();
// sequelize models
const { Attraction, Comment, AttractionType } = require("../../models");
// express middleware
const loggedIn = require("../../utils/checkLogin.js");
const atLeastLevelOne = require("../../utils/checkAtLeastLevelOne.js");
const ownsAttraction = require("../../utils/checkOwnsAttraction.js");
const ownsComment = require("../../utils/checkOwnsComment.js");
// uniqid
const uniqid = require("uniqid");

// '/' POST - add a new attraction, verify user level > 0
// expects { name: 'abc', latitude: '<latitude as string>', longitude: '<longitude as string>',
// category_id: '3', type_ids: '1,2,3', description: 'dasdfkasjfj adjasjd' }
router.post("/", loggedIn, atLeastLevelOne, (req, res) => {
  Attraction.create({
    id: uniqid(),
    name: req.body.name,
    lat: req.body.latitude,
    lng: req.body.longitude,
    category_id: req.body.category_id,
    description: req.body.description,
    owner: req.session.user_id,
  })
    // redirect client to new attraction page
    .then((dbAttractionData) => {
      // link new attraction to types
      if (req.body.type_ids.length) {
        let arr = req.body.type_ids.split(",");

        const attractionTypeIdArr = arr.map((type_id) => {
          return { attraction_id: dbAttractionData.id, type_id };
        });

        let attTypes = AttractionType.bulkCreate(attractionTypeIdArr);
        return res.status(200).json(dbAttractionData);
      }

      return res.status(400).json({
        message: "You didn't include types",
        attraction: JSON.stringify(dbAttractionData),
      });
    })
    .catch((err) => {
      console.log("/CONTROLLERS/API/ATTRACTIONROUTES ERROR", "/ POST", err);
      return res.status(500).json(err);
    });
});

// '/:id' - PUT - update attraction with new info, verify owner or admin
// expects { name: 'abc', latitude: '<latitude as string>', longitude: '<longitude as string>',
// category_id: '3', type_id: '2', description: 'dasdfkasjfj adjasjd' }
router.put("/:attraction_id", loggedIn, ownsAttraction, (req, res) => {
  Attraction.update(
    {
      name: req.body.name,
      lat: req.body.latitude,
      lng: req.body.longitude,
      category_id: req.body.category_id,
      description: req.body.description,
    },
    {
      where: { id: req.params.attraction_id },
    }
  )
    .then((updatedAttractionData) => {
      return res.status(200).json(updatedAttractionData);
      // TODO: delete old AttractionTypes and create new ones
    })
    .catch((err) => {
      console.log(
        "/CONTROLLERS/API/ATTRACTIONROUTES ERROR",
        "/:attraction_id PUT",
        err
      );
      return res.status(500).json(err);
    });
});

// '/:id' - DELETE - delete an attraction, verify owner or admin
router.delete("/:attraction_id", loggedIn, ownsAttraction, (req, res) => {
  Attraction.destroy({ where: { id: req.params.attraction_id } })
    .then((dbAttractionData) => {
      if (!dbAttractionData) {
        return res
          .status(404)
          .json({ message: "No attraction found with this id" });
      }

      // // TODO: delete AttractionTypes where attraction_id = req.params.attraction_id

      return res.status(200).json({ message: "Deleted attraction" });
    })
    .catch((err) => {
      console.log(
        "/CONTROLLERS/API/ATTRACTIONROUTES ERROR",
        "/:attraction_id DELETE",
        err
      );
      return res.status(500).json(err);
    });
});

// '/:attraction_id/comments' - POST - add a comment to the attraction, verify logged in
// expects { comment_text: 'abcasdja' }
router.post("/:attraction_id/comments", loggedIn, (req, res) => {
  Comment.create({
    owner: req.session.user_id,
    attraction_id: req.params.attraction_id,
    comment_text: req.body.comment_text,
  })
    .then((dbCommentData) => {
      return res.status(200).json(dbCommentData);
    })
    .catch((err) => {
      console.log(
        "/CONTROLLERS/API/ATTRACTIONROUTES ERROR",
        "/:attraction_id/comments POST",
        err
      );
      return res.status(500).json(err);
    });
});

// '/:attraction_id/comments/:id' - Delete a comment, verify owner of comment or admin
router.delete(
  "/:attraction_id/comments/:id",
  loggedIn,
  ownsComment,
  (req, res) => {
    Comment.destroy({ where: { id: req.params.id } })
      .then((dbCommentData) => {
        if (!dbCommentData) {
          return res
            .status(404)
            .json({ message: "No comment found with this id" });
        }

        return res.status(200).json(dbCommentData);
      })
      .catch((err) => {
        console.log(
          "/CONTROLLERS/API/ATTRACTIONROUTES ERROR",
          "/:attraction_id/comments/:id DELETE",
          err
        );
        return res.status(500).json(err);
      });
  }
);

// NOT MVP // TODO:
// '/:attraction_id/votes'
// '/:attraction_id/votes/:id'

module.exports = router;
