const express = require("express");
const Router = express.Router();
const productCont=require("../controllers/productController");

Router.get("/", productCont.productsGet);
Router.post("/", productCont.productsPost);
Router.get("/:id", productCont.productByIdGet);

module.exports = Router;
