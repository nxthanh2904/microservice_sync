const express = require('express');
const router = express.Router();
const fetch = require('fetch');
const axios = require('axios');
router.post('/getByTag',async (req, res) =>{
    const web = req.body;
    console.log(web);
    const article = await axios({
        method: 'post',
        url: `http://localhost:8000/article/getByTag`,
        data: web
    })
    console.log(article);
    return res.status(200).json(article.data);
  
})

module.exports = router;