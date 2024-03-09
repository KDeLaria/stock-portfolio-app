const router = require("express").Router()
const userRoutes = require("./user.routes");
const portfolioRoutes = require("./portfollio.routes");
const stockRoutes = require("./stock.routes");
const searchRoutes = require("./search")

router.use("/user", userRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/stock", stockRoutes);
router.use("/search", searchRoutes)


module.exports = router;