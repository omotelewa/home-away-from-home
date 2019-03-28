
// importing all api routes patron, property, optional services, listinginfo, retistration, reservations, and ammenities.


const router = require("express").Router();
const evalFeedbackRoutes = require("../../controllers/evalFeedbackController");

router.use('/eval', evalFeedbackRoutes);
// const infoListingRoutes = require("../../controllers/infoListingController");
// const optionalServicesRoutes = require("../../controllers/optionalServicesController");
// const patronsRoutes = require("../../controllers/patronsController");
// const propertyRoutes = require("../../controllers/propertyController");
// const registrationRoutes = require("../../controllers/registrationController");
// const reservationsRoutes = require("../../controllers/reservationsController");
// const amenitiesRoutes = require("../../controllers/amenitiesController");
// const usersRoutes = require("../../controllers/usersController");


// prefix api routes with their specific endpoint name
// router.use("/users", usersRoutes);
// router.use("/evalFeedback", evalFeedbackRoutes);//only correct so follow this smaple
// router.use("/infoListing", infoListingRoutes);
// router.use("/amenities", amenitiesRoutes);
// router.use("/property", propertyRoutes);
// router.use("/reservations", reservationsRoutes);
// router.use("/patrons", patronsRoutes);
// router.user("/optionalServices", optionalServicesRoutes);

module.exports = router;


// prefix api routes with  names of assigned endpoint names
//router.use("/evalFeedback", evalFeedbackControllerRoutes);
// router.use("/infoListing", infoListingRoutes);
// router.use("/optionalServices", optionalServicesRoutes);
// router.use("/patrons", patronsRoutes);
// router.use("/registration", registrationRoutes);
// router.use("/reservations", reservationsRoutes);
// route.use("/property", propertyRoutes );

