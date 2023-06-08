const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const cardController = require('../controllers/card');
const { requireAdmin } = require('../middlewares/verifyAdmin');

/* eslint-disable prettier/prettier */
router.post('/cards', requireAdmin, asyncMiddleware(cardController.createCard));
router.get('/cards', asyncMiddleware(cardController.getCards));
router.get('/cards/:id', asyncMiddleware(cardController.getCard));
/* eslint-enable prettier/prettier */

module.exports = router;
