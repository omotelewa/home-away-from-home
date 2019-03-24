const router = require("express").Router();
const resvController = require("../../controllers/resvationController.js");

// match api/reservations
router
  .route("/")
  .get(resvController)

  const router = require("express").Router();
  const patronsController = require("../../controllers/patronController");
  const cloudinaryMiddleware = require('../../utils/middleware/patronCloudinary');
  const passport = require('../../utils/middleware/passport-local');
  
  //method to handle patrons authentication login status and logout
  router
    .route("/status")
    .get(patronController.patronCheck);
  
  router
    .route("/login")
    .post(passport.authenticate('local'), patronController.login);
  
  router
    .route("/logout")
    .get((req, res) => {
      req.logout();
      res.redirect('/');
    });
  
  // methods for /api/patron (GET and POST) 
  router
    .route("/")
    .get(patronsController.getAllPatrons)
    .post(patronsController.register);
  
  //methods for api/patrons/:id (PUT and DELETE)
  router
    .route("/:id")
    .get(patronsController.getPatronsActivities)
    .put(cloudinaryMiddleware,patronsController.updateAccount)
    .delete(patronsController.deletePatron);
  
  //method to change patrons password
    router
    .route("/changePassword/:id")
    .put(cloudinaryMiddleware,patronsController.changePassword)
  
  module.exports = router;
  

  const router = require("express").Router();
const feedbackEvaluationController = require("../../controllers/placeController");

//method for /api/feedback and evaluation
router
.route("/")
.get(EvalFeedbackController.getAllEvalFeedback)
.post(EvalFeedbackController.createevalFeedback);

//method for /api/info property listing/ listings
router
.route("/:how to")
.get(howToController.getlistinginfo);

//method for /api/property
router
.route("/:id")
.put(Controller.updatePlace);

module.exports = router;

