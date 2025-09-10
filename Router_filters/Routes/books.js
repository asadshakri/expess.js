const express=require("express");

const Router=express.Router();

Router.get("/",(req,res)=>{
    console.log("Fetching all books....");
    res.send("Here is the list of books!");
})

Router.post("/",(req,res)=>{
    const newBook=JSON.stringify(req.body);
    console.log(`Received a new Book: ${newBook}`);
    res.send("Book has been added!");
})

module.exports=Router;