//import models dependency
const db = require("../models");
//const router = require('express').Router();

module.exports = { //create a reservation 
  createreservation: (req, res) => {
    db
      .reservation
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("reservation Generating  Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all Comments
  getAllreservation: (req, res) => {
    db
      .reservation
      .find({

      })

      .then(dbRegistration => {
        res.json(dbreservation);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  }, //select all comments by user
  getAllreservationByPatrons: (req, res) => {
    db
      .reservation
      .find({
        userId: req.body.userId
      }).then(dbreservation => {
        res.json(dbreservation);
      }).catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a Reservation
  deletereservation: (req, res) => {
    db.reservation
      .delete({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Delete reservation Error: " + err);
        res.status(400).json(err);
      });
  },
  //update a reservation
  updateReservation: (req, res) => {
    db.reservation
      .update({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Update reservation Error: " + err);
        res.status(400).json(err);
      });
  }
}
