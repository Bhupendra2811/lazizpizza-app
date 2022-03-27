const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://9898913180:9898913180@cluster0.viwzi.mongodb.net/mern-pizza '

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose