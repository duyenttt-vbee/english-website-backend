const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const lessonController = require('../controllers/lesson');
const { requireAdmin } = require('../middlewares/verifyAdmin');

/* eslint-disable prettier/prettier */
router.post('/lesson', requireAdmin, asyncMiddleware(lessonController.createLesson));
router.get('/lessons', asyncMiddleware(lessonController.getAllLessons));
router.get('/lesson/:id', asyncMiddleware(lessonController.getLesson));
/* eslint-enable prettier/prettier */

module.exports = router;
