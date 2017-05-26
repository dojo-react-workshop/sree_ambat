const net = require("net");

var server = net.createServer(function(socket){

    socket.on('data', function(data){
        console.log("data received")
    })
    //socket.write("YYYY-MM-DD hh:mm"+"\n");
    date = new Date();
    var month = date.getMonth()+1
    month = month.toString()
    month = '0'.repeat(2-month.length) + month
    time = date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();

    socket.end(time+"\n");
    server.close()
})
server.listen(process.argv[2], ()=>{
    console.log("Server is up at "+process.argv[2]);
})