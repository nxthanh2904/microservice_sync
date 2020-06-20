const ArticleService = require('./articles.service');

exports.getByWeb = async(req, res)=>{
   try {
    console.log('ddd',req.body);
    const articles = await ArticleService.getByWeb(req.body);
    res.status(200).json(articles);
   } catch (error) {
       res.status(400).json(error);
   }
}

exports.getByTag = async(req, res)=>{
   // try {
        
    // } catch (error) {
    //     res.status(400).json(error);
    //}
}