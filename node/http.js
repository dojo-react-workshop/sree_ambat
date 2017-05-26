var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res){
    var url = req.url;
    var fileName = ""

    console.log("I got hit at " + url);

    if(url == "/") {
        fileName = "index.html"
    } else if(url == "/ninjas"){
        fileName = "ninjas.html"
    } else if (url == "/dojo/new") {
        fileName = "dojos.html"
    }

    fs.readFile(fileName, "utf8", function(err, data){
        if(!err) {
            console.log("Reading " + fileName);
            res.write(data);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end("<html><body><h2>Page not found</h2></body></html>");
        }
    })
}).listen(8000);