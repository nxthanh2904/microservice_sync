const ArticleService = require('./articles.service');

exports.getByWeb = async(req, res)=>{
   try {
    console.log(req.body);
    const articles = await ArticleService.getByWeb(req.body);
    res.status(200).json(articles);
   } catch (error) {
       res.status(400).json(error);
   }
}

exports.getByTag = async(req, res)=>{
    try {
        const articles = await ArticleService.getByTag(req.body);
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json(error);
    }
}