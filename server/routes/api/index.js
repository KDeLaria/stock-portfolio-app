const router = require("express").Router()
const userRoutes = require("./user.routes");
const portfolioRoutes = require("./portfolio.routes");
const stockRoutes = require("./stock.routes");

router.use("/user", userRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/stock", stockRoutes);


module.exports = router;