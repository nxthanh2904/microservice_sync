const Articles = require('../../models/article');


exports.getByWeb = async (data)=>{
    const { web } = data;
    const articles = Articles.find({"website.name" : web});
    return articles;
}

exports.getByTag = async (data) =>{
    const {tag} = data;
    console.log(tag);
    const articles = Articles.find({ tags : tag});
    
    return articles;
}