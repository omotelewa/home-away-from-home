const router = require("express").Router();
const resvController = require("../../controllers/reservationController.js");

// match /api/reservation

router.route("/")
.get(resvController.findAll)
.post(resvController.saveReservation);

// match /api/evaluation/:id
router.route("/:id")
.get(resvController.getAllreservationByPatrons)
.delete(resvController.deletereservation);

module.exports = router;
