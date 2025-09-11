const express=require('express');
const app=express();
const port=3000;
const productRouter=require('./routes/productRoutes');


app.use("/api/products",productRouter);

app.listen(port,()=>{   
    console.log(`Server is running on http://localhost:${port}`);
});