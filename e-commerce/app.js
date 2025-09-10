const express = require("express");
const app = express();
const port = 3000;
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const cartsRouter = require("./routes/carts");


app.use('/products', productsRouter);
app.use('/carts', cartsRouter);
app.use('/users', usersRouter);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});