const router = require("express").Router();
const resvController = require("../../controllers/resvController.js");

// match api/reservations
router
  .route("/")
  .get(resvController)

