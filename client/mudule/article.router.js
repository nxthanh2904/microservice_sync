const express = require('express');
const router = express.Router();
const fetch = require('fetch');
const axios = require('axios');
router.post('/getByTag', async (req, res) => {
    try {
        const web = req.body;
        console.log(web);
        const article = await axios({
            method: 'post',
            url: `http://localhost:8000/article/getByTag`,
            data: web
        })
        console.log(article.data);
        res.status(200).json(article.data);
    } catch (error) {

        res.status(400).send(err);

    }

})

module.exports = router;