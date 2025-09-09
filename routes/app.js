const express=require("express");
const app=express();
const port=4000;

app.get('/products',(req,res)=>{
    res.send("here is the list of all products");
});

app.post('/products',(req,res)=>{ 
    res.send(" A new product has been added");
});

app.get('/categories',(req,res)=>{
    res.send("here is the list of all categories");
});
app.post('/categories',(req,res)=>{
    res.send("A new categories has been created");
});

app.all('/*splat',(req,res)=>{
    res.status(404).send("<h1>404! Page Not Found</h1>");
});

app.listen(port,()=>{
    console.log(`Server is up and running on http://localhost:${port}`);
})