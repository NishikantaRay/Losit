const dbConn = require("./config/db.conn");
const cors = require('cors');

const cardRoute = require("./route/card.route")

const express = require('express');
const app=express();
const corsOption={
    "origin":"*"
}
app.use(cors(corsOption));
app.use(express.json());
dbConn();

app.use("/card", cardRoute)

const port=process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});