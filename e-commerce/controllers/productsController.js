const fetchProducts=(req,res)=>{
    console.log("Fetching all products....");
    res.send("Here is the list of products!");
}

const addProduct= (req,res)=>{
    console.log(`Received a new Product`);
    res.send("Product has been added!");
}

const fetchProductById=(req,res)=>{
    const productId=req.params.id;
    console.log(`Fetching details of product with id: ${productId}`);
    res.send(`Details of product with id: ${productId}`);
}

module.exports={
    fetchProducts,
    addProduct,
    fetchProductById
}
