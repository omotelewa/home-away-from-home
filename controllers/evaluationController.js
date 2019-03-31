//import models dependency
const db = require("../models/");
//const router = require('express').Router();

module.exports = { //create a Evaluation Feedback
  createevaluation: (req, res) => {
    db
      .evaluation
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("evaluation Generating  Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all Comments
  getAllevaluation: (req, res) => {
    db
      .evaluation
      .find({

      })

      .then(dbevaluation => {
        res.json(dbevaluation);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  }, //select all comments by user
  getAllevaluationByPatrons: (req, res) => {
    db
      .evaluation
      .find({
        userId: req.body.userId
      }).then(dbevaluation => {
        res.json(dbevaluation);
      }).catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a Comment
  deleteevaluation: (req, res) => {
    db.evaluation
      .delete({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Delete evaluation Error: " + err);
        res.status(400).json(err);
      });
  },
  //update an evaluation
  updateEvaluation: (req, res) => {
    db.evalutation
      .update({
        where: {
          userId: req.params.id
        }
      }).then(result => {
        res.json(result)
      }).catch(err => {
        console.log("Update evaluation Error: " + err);
        res.status(400).json(err);
      });
  }
}
