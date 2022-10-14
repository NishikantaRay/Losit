// Importing express module
const express=require("express")


const router=express.Router()


const cardController=require("../controllers/card.controller")


router.post("/create",cardController.create)

router.get("/findAll",cardController.findAll)

router.delete("/delete/:id",cardController.delete)

  
module.exports=router