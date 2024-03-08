const router = require("express").Router()
const userRoutes = require("./user.routes")
const searchRoutes = require("./search")

router.use("/user", userRoutes);
router.use("/search", searchRoutes)


module.exports = router;