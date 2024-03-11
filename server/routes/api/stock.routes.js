const router = require("express").Router();

const {createStock, deleteStock, updateStock, getStock, 
    getAllStocks, getSearchStock}= require("../../controllers/stock.controller");


router.get("/", async (req, res) => {
    try {
        const payload = await getAllStocks();
        res.status(200).json(payload);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "error", message: err.message });
    }
});

// I can't think of a time where we'd look up a stock by ID, so commenting this one out so next one will work.
// router.get("/:id", async (req, res) => {
//     try {
//         const payload = await getStock(req.params.id);
//         res.status(200).json(payload);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ status: "error", message: err.message });
//     }
// });

// Create new route for the search
router.get("/:regex", async (req, res) => {
   console.log("I am in the regex router.get");
   try {
       const payload = await getSearchStock(req.params.regex);
       console.log("Successful find")
       res.status(200).json({status: "Success", payload});
   } catch (err) {
       console.log(err.message);
       res.status(500).json({ status: "error", message: err.message });
   }
});


// Should never need to adjust this table

// router.put("/:id", async (req, res) => {
//     try {
//         const payload = await updateStock(req.params.id, req.body);
//         res.status(200).json(payload);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ status: "error", message: err.message });
//     }
// });

// router.delete("/:id", async (req, res) => {
//     try {
//         const payload = await deleteStock(req.params.id);
//         res.status(200).json(payload);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ status: "error", message: err.message });
//     }
// });

// router.post("/", async (req, res) => {
//     try {
//         const payload = await createStock(req.body);
//         res.status(200).json(payload);
//     } catch (err) {
//         res.status(500).json({ status: "error", message: err.message });
//     }
// });

module.exports = router;