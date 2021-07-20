//create a server and send a simple http request

var http = require('http')//import http inbuilt function

var data = "Wel-Come User";

//whenever an http request comes this function invokes 
var onRequestHandler = function(request, response) {
    console.log("request received");

    response.writeHead(200,{'Content-Type':"text/html"}); //use to write which type of content we are gonna display
    response.write("<center><h1>");
    response.write(data);
    response.write("</h1></center>")
    response.end(); //ends respone otherwise response will stay open

}


var server = http.createServer(onRequestHandler); //create server and serves http request on onRequestHandler
server.listen(9988); //assign port to server    note 0 to 1024 are system reserve ports
console.log("Server is Started on Port 9988");   //prints data on consol
