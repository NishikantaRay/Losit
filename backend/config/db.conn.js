const mongoose = require('mongoose');
const config = require('./db.config');

const dbConn = async()=>{
    try {
        await mongoose.connect(config.uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
            console.log("connected to MongoDB");
        });
    } catch(err){
        console.log(err);
    }
    
};

module.exports=dbConn;