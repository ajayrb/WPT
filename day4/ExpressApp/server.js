

var express = require('express');  
var path = require('path');
var app = express();

var middleware = express.static(path.join(__dirname, "public"));

app.use(middleware);

app.get("/",(request, response)=>{
    console.log("file send");
    response.sendFile(__dirname,+"/index.html");
});

app.get("/players",(req, res)=>{
    console.log("JSON obj send");
    var players=[
        {"id":101,"name":"C.Ronaldo"},
        {"id":202,"name":"Leo Messi"},
        {"id":303,"name":"Neymar jr."}
    ];
    res.send(players);
});

app.listen(9988);

console.log("express web app is listening on port 9988");