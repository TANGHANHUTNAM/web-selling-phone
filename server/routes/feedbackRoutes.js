const express = require("express")
const router = express.Router();
const {updateFeedbackStatus ,getAllFeedbacksPending, getFeedbacks, getAllFeedbacks, addFeedback, getAllFeedbacksApproved } = require("../controllers/feedbackController")

router.get("/:userID", getFeedbacks)
router.get("/", getAllFeedbacks)
router.post("/:userID", addFeedback)
router.get("/status/approved", getAllFeedbacksApproved)
router.get("/status/pending", getAllFeedbacksPending)
router.put("/:feedbackID/status", updateFeedbackStatus)
module.exports = router;