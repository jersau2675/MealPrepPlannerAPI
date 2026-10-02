const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

//Parses JSON request bodies
app.use(express.json());



//Makes sure server works
app.get("/health", (req, res) => {
    res.json({status: "ok"});
});



//Allows addition of recipes to the planner
app.post("/api/recipes", (req, res) => {
    
    //Deconstructs request body
    const {recipe_name, recipe_prep_mins, recipe_cook_mins} = req.body;

    //Validates request body
    if(!recipe_name || !recipe_prep_mins || !recipe_cook_mins) {
        return res.status(400).json({error: "Missing required fields."})
    }

    //Creates sql command and the params to pass into the table values
    const sql = `
        INSERT INTO recipes [recipe_name, recipe_prep_mins, recipe_cook_mins]
        VALUES (?, ?, ?)
    `;
    const params = [recipe_name, recipe_prep_mins, recipe_cook_mins];

    //Executes the query
    db.run(sql, params, function(err)) {

        //Displays error if there is a problem executing the sql command
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        //Displays success message if command executes successfully
        res.status(201).json({message: "Recipe successfully added!"});
    }
});



//Allows retrieval of recipes to the planner
app.get("/recipes", (req, res) => {

});

//Starts server and listens on port 3000
app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`);
});