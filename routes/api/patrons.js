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