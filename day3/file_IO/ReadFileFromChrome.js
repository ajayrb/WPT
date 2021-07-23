


var http = require('http');
var fs = require('fs');

var onrequestHandler = function(request, response) {
    var fileloc = "./data/"+request.url;

    console.log(fileloc);
    fs.readFile(fileloc,(err, data)=>{
        if(err)
        {
            console.log("something went Wrong");
            console.log(err);
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("<h2>File data</h2><p>");
            response.write(data);
            response.write("</p>");
        }
        response.end();
    }   )

};


var server = http.createServer(onrequestHandler);
server.listen(2233);
console.log("Server started on port 2233");