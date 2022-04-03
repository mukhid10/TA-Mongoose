const express = require('express');
const router = express.Router()

const courseRouter = require('./course.route')
const instruktorRouter = require('./instruktor.route')
const participantRouter = require('./participant.route')

router.use('/instruktor', instruktorRouter)
router.use('/course', courseRouter)
router.use('/participant', participantRouter)


module.exports = router;