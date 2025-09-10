const express = require('express');
const Router = express.Router();
const courses = [
        { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
        { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

Router.get("/", (req, res) => {
    console.log("Fetching all courses....");
    const coursesList=courses.map((courses)=>{
        return courses.name;
    })
    res.send(`Courses: ${JSON.stringify(coursesList)}`);
});

Router.get("/:id", (req, res) => {
    const courseId=req.params.id;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==courseId){
            let obj={
                "courses":courses[i].name,
                "description":courses[i].description
            }
             res.send(JSON.stringify(obj));
             console.log(`Fetching details of course with id: ${courseId}`);
                return;
        }}
        console.log(`Course with id: ${courseId} not found`);
        return res.status(404).send("Course not found");
    });


module.exports = Router;