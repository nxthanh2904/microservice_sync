const express = require('express');
const router = express.Router();
const WebsiteController = require('./website.controller');

router.get('/',WebsiteController.get);

module.exports = router;
