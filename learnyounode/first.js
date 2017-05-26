var fs = require("fs")

txtStr = fs.readFileSync(process.argv[2], "utf8")
console.log(txtStr.split("\n").length-1);