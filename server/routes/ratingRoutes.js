const express = require("express");
const router = express.Router();
const {addRating, getRatedProductByProductID, getRatedProcuctByUserID} = require("../controllers/ratingController")


router.post("/user/:userID/product/:productID", addRating)
router.get("/product/:productID", getRatedProductByProductID)
router.get("/user/:userID", getRatedProcuctByUserID)

module.exports = router;