const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const lessonController = require('../controllers/lesson');
const { requireAdmin } = require('../middlewares/verifyAdmin');

/* eslint-disable prettier/prettier */
router.post('/lesson', requireAdmin, asyncMiddleware(lessonController.createLesson));
/* eslint-enable prettier/prettier */

module.exports = router;
