'use strict';

const a =[1,2,3,4];

//custom map
Array.prototype.map = function (cb) {
    var newArr = [];
    if(cb) {
        this.forEach(function(val) {
            newArr.push (cb(val));
        }, this);        
    }
    else {
        newArr = this;
    }
    return newArr
}

var ret = a.map(function(val) {
    return val*2;
})


console.log(ret)
