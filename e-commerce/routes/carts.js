const express=require("express");
const Router=express.Router();

Router.get("/:userId",(req,res)=>{
    const userId=req.params.userId;
    console.log(`Fetching cart details for user with id: ${userId}`);
    res.send(`Cart details for user with id: ${userId}`);
});

Router.post("/:userId",(req,res)=>{
    const userId=req.params.userId;
    console.log(`Adding new item to cart for user with id: ${userId}`);
    res.send(`New item has been added to cart for user with id: ${userId}`);
});

module.exports=Router;
