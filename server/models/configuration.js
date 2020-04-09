const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigurationSchema = new Schema({
    category:{
       id: Number,
       name: String, 
    },
    website:{
        id: Number,
        name: String,
    },
    rss: [{
        version: Number,
        url: String,
        configuration:{
            intemSelector: String,
            titleSelector: String,
            linkSelector: String,
            sapoSelector: String,
            publicDateSelector: String,
        },
    }],

    article:{
        sapoSelector: String,
        sapoRedundancySelectors: [],
        titleSelector:{
            type: String,
            required: true,
        },
        titleRedundancySelectors: [],
        thumbnaiSelector:{
            type: String,
            required: true,
        },
        thumbnailRedundancySelectors: [],
        tagsSelector:{
            type: String,
        },

        tagsRedundancySelectors: [],
        contentSelector:{
            type: String,
        },

        contentSelector:{
            type: String,
        },

        contentRedundancySelectors:[{
            type: String,
        }],

        textRedundancySelectors:[{
            type: String,
        }],


    },

    articleDemoLink:{
        type: String,
        required: true,
    },

    status:{
        type: String,
        required: true,
    },
    crawlType:{
        type: String,
        required: true,
    },

    schedules:[{
        type: String,
        required: true,
    }],

},{
    timestamps : true,
});

module.exports = mongoose.model('configurations', ConfigurationSchema);
