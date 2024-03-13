const router = require("express").Router();
const { updateUserStock, deleteUserStock } = require("../../controllers/userStock.controller")

router.put("/:id", async (req, res) => {
   try {
      const payload = await updateUserStock(req.params.id, req.body);
      res.status(200).json({ status: "Success", payload });
   } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "error", message: err.message });
   }
});

router.delete("/:id/portfolio/:portfolioTicker", async (req, res) => {
   try {
      console.log("router req.params.id is :" + req.params.id)
      console.log("router req.params.portfolioTicker is :" + req.params.portfolioTicker)
      const payload = await deleteUserStock(req.params.id, req.params.portfolioTicker);
      console.log("Router has completed")
      res.status(200).json({ status: "Success", payload });
   } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "error", message: err.message });
   }
});




module.exports = router;