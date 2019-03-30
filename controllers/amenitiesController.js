//import models dependency
const db = require("../models");
const router = require('express').Router();

router
  .route('/amenities')
  .get((req, res) => {
    // return db
    //   .
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