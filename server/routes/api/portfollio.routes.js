const router = require("express").Router();
const jwt = require("jsonwebtoken");

require("dotenv").config();

const {createStock, deleteStock, updateStock, getStock, 
    getAllPortfolio}= require("../../controllers/portfolio.controller");


router.get("/", async (req, res) => {
    try {
        const payload = await getAllPortfolio();
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const payload = await getUser(req.params.id);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const payload = await updateUser(req.params.id, req.body);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const payload = await deleteUser(req.params.id);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const payload = await createUser(req.body);
        const token = setToken(payload._id);
        res.status(200).cookie("auth_cookie", token).json(payload);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

module.exports = router;