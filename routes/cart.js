const express = require('express')
const path = require('path');
const router = express.Router();
const cartController = require('../controllers/cart')

router.get('/cart', cartController);

module.exports = router;