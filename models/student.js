const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : Number,
        required : true
    },
    phone :{
        type : Number,
        required : true
    },
    message:{
        type : String,
        required : true
    }
});

const Client = mongoose.model('Client',clientSchema);

module.exports = Client;