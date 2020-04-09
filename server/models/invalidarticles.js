const mongoose = require('mongoose');
new Schema = mongoose.Schema;

const InvalidarticleSchema = new Schema({
    title: {
        type : String,
        required : true
    },

    link: {
        type: String,
        required: true
    },

    website : {
        id : Number,
        name : String
    },

    category:{
       id : Number,
       name : String,
    },
},{
    timestamp : true,
});

module.exports  = mongoose.model("invalidarticles", InvalidarticleSchema);