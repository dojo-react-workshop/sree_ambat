const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bp = require("body-parser");

//static assets
app.use(express.static(path.join(__dirname+'/client')));

//location of templates
app.set("views", path.join(__dirname+'/client/views'))

//parsing
app.use(bp.urlencoded({extended:true}));

//set ejs as template engine
app.set('view engine', 'ejs');

//routes
require('./server/config/routes.js')(app);

app.listen(8000, ()=>{
    console.log("Server is up")
});

