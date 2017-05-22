'use strict';

const a =[1,2,3,4];

//custom filter
Array.prototype.filter = function (cb) {
    var newArr = [];
    this.forEach(function(val) {
        if (cb(val)) {
            newArr.push (val);
        }
        
    }, this);        


    return newArr
}

var ret = a.filter(function(val) {
    return (val%2===0);
})

console.log(ret)