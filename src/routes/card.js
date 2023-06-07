const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const cardController = require('../controllers/card');
const { requireAdmin } = require('../middlewares/verifyAdmin');

/* eslint-disable prettier/prettier */
router.post('/cards', requireAdmin, asyncMiddleware(cardController.createCard));
/* eslint-enable prettier/prettier */

module.exports = router;
