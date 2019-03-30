//import models dependency
const db = require("../models");
//const router = require('express').Router();

module.exports = { //create a Amenities Feedback
  createamenities: (req, res) => {
    db
      .amenities
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("amenities Generating  Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all amenities
  getAllamenities: (req, res) => {
    db
      .amenities
      .find({

      })

      .then(dbamenities => {
        res.json(dbamenities);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  }, //select all comments by user
  getAllamenitiesByPatrons: (req, res) => {
    db
      .evaluation
      .find({
        userId: req.body.userId
      }).then(dbamenities => {
        res.json(dbamenities);
      }).catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a Comment 
  deleteamenities: (req, res) => {
    db.amenities
      .delete({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Delete amenities Error: " + err);
        res.status(400).json(err);
      });
  },
  //update an amenities
  updateAmenities: (req, res) => {
    db.evalutation
      .update({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Update amenities Error: " + err);
        res.status(400).json(err);
      });
  }
}
