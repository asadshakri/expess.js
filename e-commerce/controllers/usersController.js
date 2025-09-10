const fetchUsers=(req, res) => {
    console.log("Fetching all users....");
    res.send("Here is the list of users!");
}

const addUser=(req, res) => {
    console.log(`Received a new User`);
    res.send("User has been added!");
}

const fetchUserById=(req, res) => {
    const userId = req.params.id;
    console.log(`Fetching details of user with id: ${userId}`);
    res.send(`Details of user with id: ${userId}`);
}

module.exports={
    fetchUsers,
    addUser,
    fetchUserById
}