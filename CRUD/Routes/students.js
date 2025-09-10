const express = require('express');
const Router = express.Router();
const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

Router.get("/", (req, res) => {
    console.log("Fetching all students....");
    const studentsList=students.map((students)=>{
        return students.name;
    })
    res.send(`Students: ${JSON.stringify(studentsList)}`);
});

Router.get("/:id", (req, res) => {
    const studentsId=req.params.id;
    for(let i=0;i<students.length;i++){
        if(students[i].id==studentsId){
            let obj={
                "students":students[i].name,
            }
             res.send(JSON.stringify(obj));
             console.log(`Fetching details of students with id: ${studentsId}`);
                return;
        }}
        console.log(`Student with id: ${studentsId} not found`);
        return res.status(404).send("Student not found");
    });


module.exports = Router;

