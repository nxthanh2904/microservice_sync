const Articles = require('../../models/article');


exports.getByWeb = async (data)=>{
    const { web } = data;
    
    return articles;
}

exports.getByTag = async (data) =>{
   
    const articles = await Articles.find().limit(1);
    console.log('arrr', articles.data);
    return articles;
}