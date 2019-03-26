//import models dependency
const db = require("../models");

module.exports = {
  //create a Evaluation Feedback
  createevalFeedback: (req, res) => {
    db
      .evalFeedback
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("EvalFeedback Generating  Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all Comments
  getAllEvalFeedback: (req, res) => {
    db
      .EvalFeedBack
      .findAll({
        include: [db.Property, db.Users]
      })
      .then(dbevalFeedback => {
        res.json(dbevalFeedback);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all comment by review
  getAllevalFeedbackByPatrons: (req, res) => {
    db
      .evalFeedback
      .findAll({
        where:{
          PatronId:req.params.PropertyId
        },
        include: [db.Users]
      })
      .then(dbevalFeedback => {
        res.json(dbevalFeedback);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a Comment
  deleteevalFeedback: (req, res) => {
    db
      .EvalFeedBack
      .delete({
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Delete EvalFeedback Error: " + err);
        res.status(400).json(err);
      });
  }
}