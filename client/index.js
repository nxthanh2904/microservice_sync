const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const article = require('./mudule/article.router');

app.use(bodyParser());

app.use('/article',article);

app.get('/', (req, res)=>{
    console.log('Hello')
    res.send('Hello, This is client!');
})

const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`client is running on port ${PORT}`)
})