// //import models dependency
// const db = require("../models");
// const router = require('express').Router();

// router
//   .route('/howto')
//   .get((req, res) => {
//     // return db
//     //   .howto
//     //   .create(req.body)
//     //   .then(result => {
//     //     res.json(result)
//     //   })
//     //   .catch(err => {
//     //     console.log("howto Generating  Error: " + err);
//     //     res.status(400).json(err);
//     //   });
//     res.send('its working!')
//   })

// module.exports = router;
// // module.exports = {
// //   //create a how to sign up
// //   create howto: (req, res) => {
// //     db
// //       .howto
// //       .create(req.body)
// //       .then(result => {
// //         res.json(result)
// //       })
// //       .catch(err => {
// //         console.log("howto Generating  Error: " + err);
// //         res.status(400).json(err);
// //       });
// //   },
// //   //select all 
// //   getAllEval: (req, res) => {
// //     db
// //       .evaluation
// //       .find({

// //       })

// //       .then(dbevaluation => {
// //         res.json(dbevaluation);
// //       })
// //       .catch(err => {
// //         console.log("Select All Error: " + err);
// //         res.status(400).json(err);
// //       });
// //   },
// //   //select all comments by user
// //   getAllevaluationByPatrons: (req, res) => {
// //     db
// //       .evaluation
// //       .find({
// //         userId: req.body.userId
// //       })
// //       .then(dbevaluation => {
// //         res.json(dbevaluation);
// //       })
// //       .catch(err => {
// //         console.log("Select All Error: " + err);
// //         res.status(400).json(err);
// //       });
// //   },
// //   //delete a Comment
// //   deleteevaluation: (req, res) => {
// //     db
// //       .evaluation
// //       .delete({
// //         where: {
// //           userId: req.params.id
// //         }
// //       }).then(result => {
// //         res.json(result)
// //       })
// //       .catch(err => {
// //         console.log("Delete evaluation Error: " + err);
// //         res.status(400).json(err);
// //       });
// //   }
// // }
