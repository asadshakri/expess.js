const productService=require('../services/productServices');
const fetchProducts=(req,res)=>{
    let result=productService.getAllProducts();
    res.send(result);
}

const addProduct= (req,res)=>{
    let result=productService.addNewProduct();
    res.send(result);
}

const fetchProductById=(req,res)=>{
    let result=productService.getProductById(req.params.id);
    res.send(result);
}

module.exports={
    fetchProducts,
    addProduct,
    fetchProductById
}
