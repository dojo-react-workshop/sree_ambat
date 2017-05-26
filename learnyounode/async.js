var fs = require("fs")

fs.readFile(process.argv[2], "utf8", function(err, data){
    //console.log(data);
    arr = data.split("\n")
    console.log(arr.length-1)
})