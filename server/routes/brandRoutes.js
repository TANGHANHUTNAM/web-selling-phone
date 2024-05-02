const express = require("express");
const router = express.Router();
const {getAllBrand, addNewBrand} = require("../controllers/brandController")


router.get("/", getAllBrand)
router.post("/", addNewBrand)

module.exports = router;