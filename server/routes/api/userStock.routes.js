const router = require("express").Router();
const { updateUserStock } = require("../../controllers/userStock.controller")

router.put("/:id", async (req, res) => {
   try {
      const payload = await updateUserStock(req.params.id, req.body);
      res.status(200).json({ status: "Success", payload });
   } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "error", message: err.message });
   }
});

module.exports = router;