const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { getAllStocks } = require('../../controllers/')


router.get("/", async (req, res) => {
   try {
       const payload = await getAllStocks();
       res.status(200).json(payload);
   } catch (err) {
       console.log(err.message);
       res.status(500).json({ status: "error", message: err.message });
   }
});
