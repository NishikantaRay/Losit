const dbConn = require("./config/db.conn");
const cors = require('cors');
const express = require('express');
const app=express();
const corsOption={
    "origin":"*"
}
app.use(cors(corsOption));
app.use(express.json());
dbConn();
const port=process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});