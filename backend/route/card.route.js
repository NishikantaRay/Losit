// Importing express module
const express=require("express")
const Card = require("../model/card.model")


const router=express.Router()
  
// Handling request using router
// Create a Card
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
// Get all Card
router.get("/", (req, res, next) => {
    Card.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(docs)
            res.send(docs)
        }
    })
})

// Importing the router
module.exports=router