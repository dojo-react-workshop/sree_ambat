var mongoose = require('mongoose');
require('./../models/model.js')
var List = mongoose.model('NameList');
mongoose.connect("mongodb://localhost/myDB", (err)=>{
    if (err) {
        console.log("Error connecting to MongoDB");
    } else {
        db = mongoose.connection;
    }
});



module.exports=((req, res)=>{
    return {
        add:(req, res) => {
            var namelist = new List(req.body)

            namelist.save((err)=>{
                if(err) {
                    console.log("Error saving to DB");
                    res.json({'statusCode': 'FAIL'})
                } else {
                    res.json({'statusCode': 'OK'})  
                }
            })
        },
        list: (req, res) => {
            List.find({}, (err, data)=>{
                //console.log(data);
                if(err){
                    res.json({'statusCode': 'FAIL'})
                } else {
                    res.send(JSON.stringify(data, null, 2));
                }
            })
        },
        delete: (req, res)=>{
            List.remove({_id:req.params.id}, (err)=>{
                if(err) {
                    console.log("Error deleting")
                    res.json({'statusCode': 'FAIL'})
                } else {
                    res.json({'statusCode': 'OK'})
                }
            });
        },
        update:(req, res) => {
            List.update({_id:req.body.key}, {name:req.body.name}, (err, raw)=>{
                if(err) {
                    console.log("Error Updating");
                    res.json({'statusCode': 'FAIL'})
                } else {
                    res.json({'statusCode': 'OK'})  
                }
            })
        },

    }
})()
