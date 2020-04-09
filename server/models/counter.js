const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CounterSchema = new Schema({
    _id :{
        required : true
    },

    sequence: {
        type : Number,
        required: true
    },

    counter: {
        type: String,
        required: true
    }
});

module.exports = Counter = mongoose.model("counters", CounterSchema);