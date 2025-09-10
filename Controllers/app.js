const express=require("express");
const app=express();
const port=3000;
const productsRouter=require("./routes/products");

app.use("/products",productsRouter);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});