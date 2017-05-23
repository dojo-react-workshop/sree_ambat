const array = ['a', 'b', 'c', 'd']

Array.prototype.reduce = function (cb, initVal) {
    if(typeof initVal != 'undefined') {
        var result = initVal;
        var start = 0
    }else
    {
        var result=this[0];
        var start =1
    }
    for(let i=start; i<this.length; i++){
        result = cb(result, this[i])
    }
    return result
}

const sum = array.reduce((currentSum, currentVal)=>{
    return currentSum*currentVal
}, 'z');

console.log(sum)