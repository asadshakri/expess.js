const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
    console.log("Fetching all users....");
    res.send("Here is the list of users!");
}
);

Router.post("/", (req, res) => {
    console.log(`Received a new User`);
    res.send("User has been added!");
});

Router.get("/:id", (req, res) => {
    const userId = req.params.id;
    console.log(`Fetching details of user with id: ${userId}`);
    res.send(`Details of user with id: ${userId}`);
}
);
module.exports = Router;