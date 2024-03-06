const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { getAllUsers, createUser, deleteUser, getUser,
    updateUser, loginHandler } = require("../../controllers/user.controller");

function setToken () {
    return jwt.sign({ id: id }, process.env.JWT_SECRET);
};

router.get("/", async (req, res) => {
    try {
        const payload = await getAllUsers();
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
        const token = setToken(payload.id);
        res.status(200).cookie("auth_cookie", token).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});


router.post("/logout", async(req, res) => {
    try {
      res.status(200).cookie("auth_cookie", "").json({ status: "success" })
    }catch(err){
      console.log(err.message);
      res.status(401).json({ status: "error", message: "Could not you logout." })
    }
  });

  router.post("/login", async(req, res) => {
    try {
      const payload = await loginHandler(req.body.username, req.body.password);
      const token = createToken(payload._id);
      res.status(200).cookie("auth_cookie", token).json(payload);
    }catch(err){
      console.log(err.message);
      res.status(401).json({ status: "error", message: "Invalid username or password." })
    }
  });

module.exports = router;