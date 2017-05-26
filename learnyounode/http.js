var http = require("http");
var fs = require("fs");
var port = process.argv[2]
var server = http.createServer(function(req, res){
    var fileName = process.argv[3]

    data = fs.createReadStream(fileName, {defaultEncoding: 'utf8'})
    data.on('open', ()=>{
        data.pipe(res)
    })

}).listen(port);