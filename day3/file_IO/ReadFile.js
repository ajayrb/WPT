
var fs = require('fs'); //import the file system fs

var loc = "./data/randomthought.txt"; 
//save your filr location in variable  its optional we can directly give name inside readFilefunction

var readData = function(err, data) {     //this function is predefined and has two parameters data and err
    if (err)
    {
        console.log(err);
    }
    else{

        console.log(data.toString());
    }
};

fs.readFile(loc,readData);    
//fs provide readFile function which read data from provided file and call provided function