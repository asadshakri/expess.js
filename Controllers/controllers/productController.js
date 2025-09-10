
const productsGet=(req,res)=>{
    console.log("Fetching all products....");
    res.send("Here is the list of products!");
}

const productsPost=(req,res)=>{
    console.log(`Received a new Product`);
    res.send("Product has been added!");
}

const productByIdGet=(req,res)=>{
    const productId=req.params.id;
    console.log(`Fetching details of product with id: ${productId}`);
    res.send(`Details of product with id: ${productId}`);
}

module.exports={
    productsGet,
    productsPost,
    productByIdGet
}