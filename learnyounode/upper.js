var http = require('http');
var port = process.argv[2]
var server = http.createServer(function(req, res){
var txt = ""
    req.setEncoding("utf8")
    if(req.method == 'POST') {
        var reqStr ="";
        req.on('data', function(data){
            txt=txt+data.toUpperCase();
        }).on('end', function(){
            res.write(txt)
            res.end()
        })
     }
}).listen(port);