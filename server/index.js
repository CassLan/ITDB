const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

// Add a vendor
app.post("/vendor", async(req,res) => {
    try {
        //const { description } = req.body.description;
        //const { application_name } = req.body.application_name;
        console.log(req.body); 
        console.log(req.body.company_name);
        console.log(req.body.description);
        console.log(req.body.application_url);
        const newTodo = await pool.query('INSERT INTO "Vendor" ("Company_Name", "Notes", "Account_Number", "Contract_Renewal") VALUES ($1, $2, $3, $4)', [req.body.Company_Name, req.body.Notes, req.body.Account_Number, req.body.Contract_Renewal]);
        res.json(newTodo.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
})

// Get all Vendors
app.get("/vendor", async(req,res) => {
    try {
        const allVendors = await pool.query('SELECT * FROM "Vendor" ORDER BY "Serial"')
        res.json(allVendors.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//Get one application by Serial
app.get("/application/:serial", async(req,res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM "Application" WHERE "Serial" = $1', [serial])
        console.log(req.params);
        res.json(todo.rows[0]); // The [0] will only give us the first row returned, in this case we would only have one row returned anyway
    } catch (err) {
        console.error(err.message)
    }
});

// Update an application
app.put("/application/:serial", async(req,res) => {
try {
    const { serial } = req.params;
    const { Application_Name } = req.body;
    const { Application_URL } = req.body;
    const { Description } = req.body;
    const updateTodo = await pool.query('UPDATE "Application" SET "Application_Name" = $1, "Application_URL" =$3, "Description" = $4 WHERE "Serial" = $2', [Application_Name, serial, Application_URL, Description])
    res.json("Application was updated");  
    console.log("Application was updated"); 
    console.log(req.body); 
} catch (err) {
    console.error(err.message)
    console.log(req.body);
}
});

//delete an Application
app.delete("/application/:serial", async(req,res) => {
    try{
        const { serial } = req.params;
        const deleteTodo = await pool.query('DELETE FROM "Application" WHERE "Serial" = $1', [serial])
        res.json("Application was deleted")
    } catch (err) {
        console.error(err.message)
    }
})

// Add an application
app.post("/application", async(req,res) => {
    try {
        //const { description } = req.body.description;
        //const { application_name } = req.body.application_name;
        console.log(req.body); 
        console.log(req.body.application_name);
        console.log(req.body.description);
        console.log(req.body.application_url);
        const newTodo = await pool.query('INSERT INTO "Application" ("Application_Name", "Application_URL", "Description") VALUES ($1, $2, $3)', [req.body.Application_Name, req.body.Application_URL, req.body.Description]);
        res.json(newTodo.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
})

// Get all Applications
app.get("/application", async(req,res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM "Application" ORDER BY "Serial"')
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//Get one application by Serial
app.get("/application/:serial", async(req,res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM "Application" WHERE "Serial" = $1', [serial])
        console.log(req.params);
        res.json(todo.rows[0]); // The [0] will only give us the first row returned, in this case we would only have one row returned anyway
    } catch (err) {
        console.error(err.message)
    }
});

// Update an application
app.put("/application/:serial", async(req,res) => {
try {
    const { serial } = req.params;
    const { Application_Name } = req.body;
    const { Application_URL } = req.body;
    const { Description } = req.body;
    const updateTodo = await pool.query('UPDATE "Application" SET "Application_Name" = $1, "Application_URL" =$3, "Description" = $4 WHERE "Serial" = $2', [Application_Name, serial, Application_URL, Description])
    res.json("Application was updated");  
    console.log("Application was updated"); 
    console.log(req.body); 
} catch (err) {
    console.error(err.message)
    console.log(req.body);
}
});

//delete an Application
app.delete("/application/:serial", async(req,res) => {
    try{
        const { serial } = req.params;
        const deleteTodo = await pool.query('DELETE FROM "Application" WHERE "Serial" = $1', [serial])
        res.json("Application was deleted")
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(5000, () => {
    console.log("Server has started on Port 5000");
});
