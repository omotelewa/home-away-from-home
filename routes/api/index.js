const router = require("express").Router();
const evaluationRoutes = require("./evaluation");
// const usersRoutes = require("./patrons");
const propertyRoutes = require("./properties");

// ====================================================

// match /api/evaluation
router.use('/evaluation', evaluationRoutes);
// match /api/user
// router.use('/user', usersRoutes);
// match /api/properties
router.use("/properties", propertyRoutes);

// ====================================================

module.exports = router;

