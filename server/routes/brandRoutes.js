const express = require("express");
const router = express.Router();
const {getAllBrand, addNewBrand, getBrandByID} = require("../controllers/brandController")


router.get("/", getAllBrand)
router.post("/", addNewBrand)
router.get("/:brandID", getBrandByID)

module.exports = router;