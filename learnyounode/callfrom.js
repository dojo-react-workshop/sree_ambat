const lister = require("./module");
function cb(e, l) {
    if(!e) {
        l.forEach(function(listItem) {
            console.log(listItem)
        });
    } else {
        console.log("Error reading the directory")
    }
}

 lister(process.argv[2], process.argv[3], cb)