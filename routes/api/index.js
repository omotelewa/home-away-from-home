const router = require("express").Router();
const resvRoutes = require("./resvRoutes");

router.use("/reservations", resvRoutes);

module.exports = router;
