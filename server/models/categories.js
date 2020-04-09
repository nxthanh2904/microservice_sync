const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
},{
    timestamps:true,
});

module.exports = Category = mongoose.model("categories", CategorySchema);