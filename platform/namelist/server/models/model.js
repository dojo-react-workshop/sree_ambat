var mongoose = require("mongoose");
var Schema = mongoose.Schema;

ListSchema = new Schema({
    'name': String
}, {timestamps:true})

mongoose.model('NameList', ListSchema);