//import models dependency
const db = require("../models");

module.exports = {
  //create a Property 
  createProperty: (req, res) => {
    db
      .Property
      .create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Property Creation Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all Property
  getAllProperty: (req, res) => {
    db
      .Property
      .findAll({
        include: [db.property, db.patrons]
      })
      .then(dbComments => {
        res.json(dbComments);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //select all Property by evaluation
  getAllPropertyByReview: (req, res) => {
    db
      .Property
      .findAll({
        where:{
          PropertId:req.params.propertyId
        },
        include: [db.Users]
      })
      .then(dbevaluation => {
        res.json(dbevaluation);
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //delete a property
  deleteProperty: (req, res) => {
    db
      .Comments
      .destroy({
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Delete Property from listing Error: " + err);
        res.status(400).json(err);
      });
  }
}