const router = require("express").Router();
const resvController = require("../../controllers/reservationController.js");

//todo: make the reservation controller method.

router.route("/").get(resvController.findAll).post(resvController.create);

module.exports = router;


  