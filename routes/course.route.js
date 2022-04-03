const express = require('express')
const router = express.Router()
const {getAll, getById, addCourse, updateCourseById, deleteCourseById} = require('../controllers/course.controller')

router.get('/', getAll)

router.get("/:id", getById);

router.post("/", addCourse);

router.put("/:id", updateCourseById);

router.delete("/:id", deleteCourseById);

module.exports = router;