

var fs = require('fs');

var fname = "./data/players.txt";

var dataToWrite = "MS Dhoni";

var writeFile = function(err, data) {
    if(err)
    {
       // console.log("Some Error Occour");
        console.log(err);
    }
    else
    {
        console.log("Data added successfully...")
    }
}


fs.writeFile(fname,dataToWrite,writeFile);
// first parameter: path of the file
// second parameter:data to be written
// third parameter:callback function name, which will be called atuomatically