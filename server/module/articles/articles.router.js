const express = require('express');
const router = express.Router();
const ArticleController = require('./articles.controller');


router.post('/getByWeb/', ArticleController.getByWeb);
router.post('/getByTag/', ArticleController.getByTag);

module.exports = router;
