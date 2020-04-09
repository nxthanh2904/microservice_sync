const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const article = require('./mudule/article.router');

app.use(bodyParser());





app.use('/article',article);


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`client is running on port ${PORT}`)
})