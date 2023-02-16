const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/********--AUTH ROUTES--********/

// Route for registration
router.post("/add", productController.addProductFunction);

module.exports = router;
