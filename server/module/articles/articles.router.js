const express = require('express');
const router = express.Router();
const ArticleController = require('./articles.controller');
const Articles = require('../../models/article');

router.post('/getByWeb/', ArticleController.getByWeb);
router.post('/getByTag/', async (req, res) => {
    try {
        const articles = await Articles.find().limit(1);
        console.log('arrr', articles);
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
