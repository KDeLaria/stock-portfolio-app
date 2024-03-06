const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { getAllUsers, createUser, deleteUser, getUser,
    updateUser, loginHandler } = require("../../controllers/user.controller");

    

router.get("/", async (req, res) => {
    try {
        const data = await getAllUsers();
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const data = await getUser(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const data = await getUser(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

module.exports = router;