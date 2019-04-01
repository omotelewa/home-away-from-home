const router = require("express").Router();

const evaluationRoutes = require("./evaluation");
const usersRoutes = require("./patrons");

// match /api/evaluation
router.use('/evaluation', evaluationRoutes);
// match /api/user
router.use('/user', usersRoutes);

module.exports = router;

// const evaluationRoutes = require("../../controllers/evaluationController");
// const infoListingRoutes = require("../../controllers/infoListingController");
// router.use("/infoListing", infoListingRoutes);
// const patronsRoutes = require("../../controllers/patronsController");
// const registrationRoutes = require("../../controllers/registrationController");
// router.use("/reservations", registrationRoutes);
// router.use("/reservations", reservationsRoutes);
// const usersRoutes = require("../../controllers/usersController");
// // prefix api routes with their specific endpoint name
// // router.use("/users", usersRoutes);
// // router.use("/evaluation", evaluationRoutes);//only correct so follow this smaple
// // router.use("/infoListing", infoListingRoutes);
// // router.use("/amenities", amenitiesRoutes);
// // router.use("/property", propertyRoutes);
// // router.use("/reservations", reservationsRoutes);
// // router.user("/optionalServices", optionalServicesRoutes);



// // prefix api routes with  names of assigned endpoint names
// //router.use("/evaluation", evaluationControllerRoutes);
// // router.use("/infoListing", infoListingRoutes);
// // router.use("/optionalServices", optionalServicesRoutes);
// // router.use("/patrons", patronsRoutes);
// // router.use("/registration", registrationRoutes);
// // router.use("/reservations", reservationsRoutes);
// // route.use("/property", propertyRoutes );

