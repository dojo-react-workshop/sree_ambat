var fs=require("fs");
var path = require("path");

module.exports=((req, res)=>{
    return {
        namelist: (req, res) =>{
            const fileName = path.join(path.dirname(require.main.filename)+"/server/data/data.json");
            fs.exists(fileName, (exists)=>{
                fs.readFile(fileName, 'utf8', (err, data)=>{
                    if(err) {
                        console.log("error reading file")
                    } else{
                        res.send(JSON.stringify(JSON.parse(data), null, 2))
                    }
                })

            })
        },
        addName: (req, res)=>{
            
            const fileName = path.join(path.dirname(require.main.filename)+"/server/data/data.json");

            fs.readFile(fileName, 'utf8', (err, data)=>{
                if(err) {
                    var arr = []
                    arr.push(req.body)
                    fs.appendFile(fileName, JSON.stringify(arr, null, 2), (err)=>{
                        console.log("Error creating file")
                    })
                }   
                else {
                    var arr = JSON.parse(data);
                    arr.push(req.body)
                    fs.writeFile(fileName, JSON.stringify(arr, null, 2), (err)=>{
                        if(err) console.log("Error writing to file")
                    })                   
                } 
            })
            res.render("index")
        }
    }
})();