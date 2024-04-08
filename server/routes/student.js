const express = require("express");
const router = express.Router();
const {getStudent, getStudentByID, insertStudent} = require("../controllers/studentController");

router.get("/", getStudent);
router.get("/:id", getStudentByID);
router.post("/insert", insertStudent);

module.exports =  router;