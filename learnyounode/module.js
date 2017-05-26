var fs = require("fs")
module.exports = function (dirName, fileName, callback) {

        var extn = "." + fileName;
        fs.readdir(dirName, function(err, list){
            if(!err) {
                var filteredList = [];
                list.forEach(function(listItem){
                    if(listItem.indexOf(extn) != -1){
                        filteredList.push(listItem);
                    }
                }) 
                callback(err, filteredList);       
            } else {
                callback(err);
            }
        })
    }
