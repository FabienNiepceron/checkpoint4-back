const router = require("express").Router();
const tresorerieRoutes = require("./tresorerie.routes");
const galerieRoutes = require("./galerie.routes");
const billeterieRoutes = require("./billeterie.routes");
const loginRoutes = require("./login.routes");

router.use("/tresorerie", tresorerieRoutes);
router.use("/galerie", galerieRoutes);
router.use("/billeterie", billeterieRoutes);
router.use("/login", loginRoutes);

module.exports = router;
