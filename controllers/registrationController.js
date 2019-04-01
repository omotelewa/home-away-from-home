//import models dependency
const db = require("../models");
//const router = require('express').Router();

module.exports = { //create a registration 
  createregistration: (req, res) => {
    db
      .evaluation
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("registrataion Generating  Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all registration
  getAllregistration: (req, res) => {
    db
      .registration
      .find({

      })

      .then(dbHomeAwayFromHome => {
        res.json(dbrgistration);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  }, //select all comments by user
  getAllregistrationByPatrons: (req, res) => {
    db
      .registration
      .find({
        userId: req.body.userId
      }).then(dbregistration => {
        res.json(dbregistration);
      }).catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a registration record
  deleteregistration: (req, res) => {
    db.registration
      .delete({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Delete registration Error: " + err);
        res.status(400).json(err);
      });
  },
  //update an registration
  updateRegistration: (req, res) => {
    db.evalutation
      .update({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Update registration Error: " + err);
        res.status(400).json(err);
      });
  }
}
