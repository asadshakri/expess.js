const express=require("express");
const Router=express.Router();
const productCont=require("../controllers/productsController");
Router.get("/",productCont.fetchProducts);

Router.post("/",productCont.addProduct);

Router.get("/:id",productCont.fetchProductById);

module.exports=Router;