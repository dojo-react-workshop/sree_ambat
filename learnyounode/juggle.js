const http = require("http");
const concat = require("concat-stream");
for(let i=2; i<process.argv.length; i++) {
http.get(process.argv[i], function(res){
    res.setEncoding("utf8");
    var countChars = 0
    res.on('error', function(err){
        console.log(err);
        return;
    })
    res.pipe(concat(function(data){
        console.log(data)
    }));
})

}

//Official Solution
//  var http = require('http')
//  var bl = require('bl')
//  var results = []
//  var count = 0

//  function printResults () {
//    for (var i = 0; i < 3; i++) {
//      console.log(results[i])
//    }
//  }

//  function httpGet (index) {
//    http.get(process.argv[2 + index], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err) {
//          return console.error(err)
//        }

//        results[index] = data.toString()
//        count++

//        if (count === 3) {
//          printResults()
//        }
//      }))
//    })
//  }

//  for (var i = 0; i < 3; i++) {
//    httpGet(i)
//  }