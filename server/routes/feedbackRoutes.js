const express = require("express")
const router = express.Router();
const { getFeedbacks, getAllFeedbacks, addFeedback } = require("../controllers/feedbackController")

router.get("/:userID", getFeedbacks)
router.get("/", getAllFeedbacks)
router.post("/:userID", addFeedback)

module.exports = router;