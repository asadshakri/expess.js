const express = require("express");
const Router = express.Router();
const userCont = require("../controllers/usersController");
Router.get("/", userCont.fetchUsers);


Router.post("/", userCont.addUser);

Router.get("/:id", userCont.fetchUserById);

module.exports = Router;