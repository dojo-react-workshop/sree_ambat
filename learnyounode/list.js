var fs = require("fs")

var dirPath = process.argv[2];
var extn = "." + process.argv[3];

fs.readdir(dirPath, function(err, list) {

    list.forEach(function(listItem){
        if(listItem.indexOf(extn) != -1){
            console.log(listItem);
        }
    })
})