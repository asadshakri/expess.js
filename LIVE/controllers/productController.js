const path=require('path');

const getAllProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','product.html'));
}

const postProduct=(req,res)=>{
    const data=req.body;
    console.log(data);
    res.json({value:data.productName});
}

module.exports={
    getAllProducts,
    postProduct
};