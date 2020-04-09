const Website = require('../../models/website');

exports.getWebsite =async ()=>{

        const website = await Website.find();
        return website;

}

