const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const website = require('./module/website/website.router');
const article = require('./module/articles/articles.router');
const cors = require('cors');
require('dotenv/config');
const app = express();


// connect db
const db = process.env.DATABASE;

mongoose.connect(db, { useNewUrlParser: true,
                       useUnifiedTopology: true })
        .then(() => console.log("MongoDB connected succesfully"))
        .catch(err => console.log(err));

app.use(bodyParser());
app.use(cors());
app.get('/', (req, res)=>{
        res.send("Hello World!");
        console.log('Hello World !');
})
app.use('/website', website);
app.use('/article', article);


const port = process.env.PORT || 3000;

app.listen(port, 
    () => console.log(`Server is running on port ${port}!`));
