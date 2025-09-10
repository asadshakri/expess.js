const express=require("express");
const app= express();
const port=3000;
const booksRouter=require("./Routes/books");

app.use(express.text());
app.use("/books",booksRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});