//import models dependency
const db = require("../models");
const router = require('express').Router();

router
  .route('/feedback')
  .get((req, res) => {
    // return db
    //   .EvalFeedback
    //   .create(req.body)
    //   .then(result => {
    //     res.json(result)
    //   })
    //   .catch(err => {
    //     console.log("EvalFeedback Generating  Error: " + err);
    //     res.status(400).json(err);
    //   });
    res.send('its working!')
  })

module.exports = router;
// module.exports = {
//   //create a Evaluation Feedback
//   createevalFeedback: (req, res) => {
//     db
//       .EvalFeedback
//       .create(req.body)
//       .then(result => {
//         res.json(result)
//       })
//       .catch(err => {
//         console.log("EvalFeedback Generating  Error: " + err);
//         res.status(400).json(err);
//       });
//   },
//   //select all Comments
//   getAllEvalFeedback: (req, res) => {
//     db
//       .EvalFeedBack
//       .find({

//       })

//       .then(dbevalFeedback => {
//         res.json(dbevalFeedback);
//       })
//       .catch(err => {
//         console.log("Select All Error: " + err);
//         res.status(400).json(err);
//       });
//   },
//   //select all comments by user
//   getAllevalFeedbackByPatrons: (req, res) => {
//     db
//       .evalFeedback
//       .find({
//         userId: req.body.userId
//       })
//       .then(dbevalFeedback => {
//         res.json(dbevalFeedback);
//       })
//       .catch(err => {
//         console.log("Select All Error: " + err);
//         res.status(400).json(err);
//       });
//   },
//   //delete a Comment
//   deleteevalFeedback: (req, res) => {
//     db
//       .EvalFeedBack
//       .delete({
//         where: {
//           userId: req.params.id
//         }
//       }).then(result => {
//         res.json(result)
//       })
//       .catch(err => {
//         console.log("Delete EvalFeedback Error: " + err);
//         res.status(400).json(err);
//       });
//   }
// }
