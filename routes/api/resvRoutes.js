const router = require("express").Router();
const resvController = require("../../controllers/resvController.js");

// match api/reservations
router
  .route("/")
  .get(resvController.findAllReservations)
  .post(resvController.updateOneReservation);
  
router
  .route("/:reserve")
  .get(resvController.findOneReservation)
  .put(resvController.findOneReservation)
  .delete(resvController.findOneReservation);

  module.exports = router;

