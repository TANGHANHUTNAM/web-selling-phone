const express = require("express");
const router = express.Router();
const {addRating, getRatedProduct, getRatedUser} = require("../controllers/ratingController")


router.post("/:userID/:productID", addRating)
router.get("/product/:productID", getRatedProduct)
router.get("/user/:userID", getRatedUser)

module.exports = router;