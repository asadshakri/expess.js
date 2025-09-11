const express=require("express");
const Router=express.Router();
const cartCont=require("../controllers/cartsController");

Router.get("/:userId", cartCont.fetchCart);

Router.post("/:userId",cartCont.addItemToCart);

module.exports=Router;
