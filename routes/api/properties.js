const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// match /api/properties
router.route("/")
.get(propertyController.getAllProperty)
.post(propertyController.createProperty);

// match /api/properties/:id
// router.route("/:id")
// .get(propertyController.getAllreservationByPatrons)
// .delete(propertyController.deletereservation);

module.exports = router;
