// Importing express module
const express=require("express")
const Card = require("../model/card.model")


const router=express.Router()
  
// Handling request using router
router.post("/add", (req, res, next) => {
    const cardData = {
        name : req.body.name,
        description : req.body.description,
        status : req.body.status,
        priority : req.body.priority,
        imgUrl : req.body.imgUrl,
        socialLinks : req.body.socialLinks,
    }
    const new_card = new Card(cardData)
    new_card.save(function(err,result){
        if (err){
            console.log(err);
            res.send(err)
        }
        else{
            console.log(result)
            res.status(201).send(result)
        }
    })
})
  
// Importing the router
module.exports=router