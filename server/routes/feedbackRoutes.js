const express = require("express")
const router = express.Router();
const { getFeedbacks, getAllFeedbacks, addFeedback, getAllFeedbacksApproved } = require("../controllers/feedbackController")

router.get("/:userID", getFeedbacks)
router.get("/", getAllFeedbacks)
router.post("/:userID", addFeedback)
router.get("/status/approved", getAllFeedbacksApproved)
module.exports = router;