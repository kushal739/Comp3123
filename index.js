var express = require('express');

const SERVER_PORT = 8089;
var app = express();


// This will
app.use(express.json());

// This will activate get method
//(1) GET request for /hello
app.get("/hello",(req,res)=>{
    res.send("Hello Express JS");

});

//(2) GET request for /user with query parameters
app.get("/user",(req,res)=>{
            const p ={
            fname:"Kushal",
            lname:"Patel"
        }

        res.send(p)
    
});

//POST request to /user with path parameters
app.post("/user",(req,res)=>{
    const p ={
    fname:"Kushal",
    lname:"Patel"
}

res.send(p)

});




// Start the server
app.listen(SERVER_PORT,()=>{
    console.log('Server is running at http://localhost:${SERVER_PORT}/');

});


/*const express = require('express');
const app = express();
const port = 8089;

// Middleware to parse JSON requests
app.use(express.json());

// GET request to /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET request to /user with query parameters
app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  res.json({ firstname, lastname });
});

// POST request to /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/
