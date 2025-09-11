const fetchCart= (req,res)=>{
    const userId=req.params.userId;
    console.log(`Fetching cart details for user with id: ${userId}`);
    res.send(`Cart details for user with id: ${userId}`);
}
const addItemToCart= (req,res)=>{
    const userId=req.params.userId;
    console.log(`Adding new item to cart for user with id: ${userId}`);
    res.send(`New item has been added to cart for user with id: ${userId}`);
}

module.exports={
    fetchCart,
    addItemToCart
}