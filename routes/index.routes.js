const express = require("express");
const addProduct = require("../controller");
const router = express.Router();

router.post("/addProduct", addProduct);
module.exports = router;
