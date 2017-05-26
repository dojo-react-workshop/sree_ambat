const http = require("http");
const concat = require("concat-stream");

http.get(process.argv[2], function(res){
    res.setEncoding("utf8");
    var countChars = 0
    res.on('error', function(err){
        console.log(err);
        return;
    })
    res.pipe(concat(function(data){
        countChars+=data.length
        console.log(countChars);
        console.log(data)
    }));
})