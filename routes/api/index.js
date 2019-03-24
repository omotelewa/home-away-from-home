
// importing all api routes user,place, review, comment and photo


const router = require("express").Router();

const evalFeedbackControllerRoutes = require("../../controllers/evalFeedbackController");
const infoLisingRoutes = require("../../controllers/infoListingController");
const optionalServicesRoutes = require("../../controllers/optionalServicesController");
const patronsRoutes = require("../../controllers/patronsController");
const propertyRoutes = require("../../controllers/propertyController");
const registrationRoutes = require("../../controllers/registrationController");
const reservationsRoutes = require("../../controllers/reservationsController");


// prefix api routes with  names of assigned endpoint names
//router.use("/evalFeedback", evalFeedbackControllerRoutes);
// router.use("/infoListing", infoListingRoutes);
// router.use("/optionalServices", optionalServicesRoutes);
// router.use("/patrons", patronsRoutes);
// router.use("/registration", registrationRoutes);
// router.use("/reservations", reservationsRoutes);
// route.use("/property", propertyRoutes );

module.exports = router;