

const getAllProducts = ()=>{
    return `Fetching all products....`;
}

const addNewProduct = ()=>{
    return `Received a new Product....`;
}

const getProductById = (id)=>{
    return `Fetching details of product with id: ${id}`;
}

module.exports={
    getAllProducts,
    addNewProduct,
    getProductById
}