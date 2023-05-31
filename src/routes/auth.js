const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const { registerValidate } = require('../validations/auth');
const authController = require('../controllers/auth');

/* eslint-disable prettier/prettier */
router.post('/auths/register', registerValidate, asyncMiddleware(authController.register));
/* eslint-enable prettier/prettier */

module.exports = router;
