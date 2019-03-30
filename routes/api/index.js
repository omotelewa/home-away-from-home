const router = require("express").Router();

const evaluationController = require("../../controllers/evaluationController");
//const booksController = require('../../controllers/evaluationController');

//router.use('/eval', evaluationRoutes);

// match /api/evaluation
router
  .route('/')
  .get(evaluationController.getAllevaluation)
  .post(evaluationController.createevaluation)
  .put(evaluationController.updateEvaluation);

// match /api/books/:id
/* router
  .route('/:id')
  .get(booksController.findById)
  .delete(booksController.deleteBook); */

// match /api/books

// match /api/books/:id
/* router
  .route('/:id')
  .get(evaluationController.)
  .delete(evaluationController.evaluationBook); */

module.exports = router;

// importing all api routes patron, property, optional services, listinginfo, retistration, reservations, and ammenities.

// const router = require("express").Router();

// const evaluationRoutes = require("../../controllers/evaluationController");
// router.use('/eval', evaluationRoutes);


// const infoListingRoutes = require("../../controllers/infoListingController");
// router.use("/infoListing", infoListingRoutes);

// const optionalServicesRoutes = require("../../controllers/optionalServicesController");
// router.user("/optionalServices", optionalServicesRoutes);

// const patronsRoutes = require("../../controllers/patronsController");
// router.use("/patrons", patronsRoutes);

// const propertyRoutes = require("../../controllers/propertyController");
// router.use("/property", propertyRoutes);

// const registrationRoutes = require("../../controllers/registrationController");
// router.use("/reservations", registrationRoutes);

// const reservationsRoutes = require("../../controllers/reservationsController");
// router.use("/reservations", reservationsRoutes);

// const amenitiesRoutes = require("../../controllers/amenitiesController");
// router.use("/amenities", amenitiesRoutes);

// const usersRoutes = require("../../controllers/usersController");
// router.use("/users", usersRoutes);

// module.exports = router;

// // prefix api routes with their specific endpoint name
// // router.use("/users", usersRoutes);
// // router.use("/evaluation", evaluationRoutes);//only correct so follow this smaple
// // router.use("/infoListing", infoListingRoutes);
// // router.use("/amenities", amenitiesRoutes);
// // router.use("/property", propertyRoutes);
// // router.use("/reservations", reservationsRoutes);
// // router.use("/patrons", patronsRoutes);
// // router.user("/optionalServices", optionalServicesRoutes);



// // prefix api routes with  names of assigned endpoint names
// //router.use("/evaluation", evaluationControllerRoutes);
// // router.use("/infoListing", infoListingRoutes);
// // router.use("/optionalServices", optionalServicesRoutes);
// // router.use("/patrons", patronsRoutes);
// // router.use("/registration", registrationRoutes);
// // router.use("/reservations", reservationsRoutes);
// // route.use("/property", propertyRoutes );

