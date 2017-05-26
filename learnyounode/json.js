var http = require("http");
var server = http.createServer(function(req, res){
    var url = req.url;
     var arr = url.substr(url.indexOf("?"), url.length-1).split("=")
    var date = new Date(arr[1])
    var startTime = new Date('1970-01-01T00:00:00.000Z')

    if(url.indexOf("parsetime")>-1) {
        var obj= {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second":date.getSeconds()
        }

        res.end(JSON.stringify(obj, null, 2))
    }
    else if(url.indexOf("unixtime") >-1){
       
       var obj = {
           "unixtime": date - startTime
       }
        res.end(JSON.stringify(obj, null, 2))
    } 

}).listen(process.argv[2]);