const router = require("express").Router()
const userRoutes = require("./user.routes");
const portfolioRoutes = require("./portfolio.routes");
const stockRoutes = require("./stock.routes");
const userStockRoutes = require("./userStock.routes")


router.use("/user", userRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/stock", stockRoutes);
router.use("/userStock", userStockRoutes)


module.exports = router;