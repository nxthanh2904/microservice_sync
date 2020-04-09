const WebService = require('./website.service');

exports.get = async (req, res) =>{
    try {
        const webs = await WebService.getWebsite(req.params);
        res.status(200).json(webs);
    } catch (error) {
        res.status(400).json(error);
    }
}