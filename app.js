const express = require("express");

const app = express();
const PORT = 3000;

//Parses JSON request bodies
app.use(express.json());

//Makes sure server works
app.get("/health", (req, res) => {
    res.json({status: "ok"});
});

//Starts server and listens on port 3000
app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`);
});
