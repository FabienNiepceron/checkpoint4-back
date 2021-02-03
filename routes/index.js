const router = require("express").Router();
const exempleRoutes = require("./exemple");

router.use("/exemple", exempleRoutes);

module.exports = router;
