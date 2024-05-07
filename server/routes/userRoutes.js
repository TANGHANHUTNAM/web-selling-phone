const express = require("express");
const router = express.Router();
const {getUserByEmail ,registerUser, loginUser, getAllUsers, updateUser, deleteUser, getUserByID } = require("../controllers/userController")

router.post ("/register", registerUser)
router.post("/login", loginUser)
router.get("/", getAllUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUserByID)
router.get("/email/emailUser", getUserByEmail)
module.exports = router;

