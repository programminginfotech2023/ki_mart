const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/Expressp");

const db = mongoose.connection;

db.on("error",console.error.bind(console,"db is not connected"));

db.once('open', function(err){
    if(err){
        console.log(err);
        return false;
    }

    console.log("db is connected");
})

module.exports = db;

