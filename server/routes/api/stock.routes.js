const router = require("express").Router();

const {createStock, deleteStock, updateStock, getStock, 
    getAllStocks}= require("../../controllers/stock.controller");


router.get("/", async (req, res) => {
    try {
        const payload = await getAllStocks();
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const payload = await getStock(req.params.id);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const payload = await updateStock(req.params.id, req.body);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const payload = await deleteStock(req.params.id);
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const payload = await createStock(req.body);
        res.status(200).json(payload);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

module.exports = router;