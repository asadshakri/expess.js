const express=require("express");
const app= express();
const port=3000;
const studentsRouter=require("./Routes/students");
const coursesRouter=require("./Routes/courses");



app.get("/",(req,res)=>{
    console.log("Welcome to the Student-Course Management System");
    res.send("<h1>Welcome to the Student-Course Management System</h1");
});

app.use('/students',studentsRouter);
app.use('/courses',coursesRouter);


app.use('/*splat',(req,res)=>{
    res.status(404).send("404 Not Found! The requested resource does not exist.");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});