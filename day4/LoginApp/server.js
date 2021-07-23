        

const { urlencoded } = require('body-parser');

var express = require('express');
var path = require('path');

var app = express();
app.use(urlencoded({extended:true}));
app.use(express.json());

var middleware = express.static(path.join(__dirname,"public"));

app.use(middleware);

app.get("/",(req, res)=>{
    console.log("Home page opened")
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post("/login",(req, res)=>{
    var user = req.body;
    console.log(user);

    if(user.email=="ajay" && user.pass=="123")
    {
        console.log("Valid User");
    }
    else
    {
        console.log("Invalid user");
    }
    console.log("Login Form Received");
});


app.listen(9966);

console.log("Server is listening to port 9966");
