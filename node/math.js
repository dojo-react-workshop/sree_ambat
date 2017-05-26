
const mathObj = {
    add: function(arr) {
        var sum = 0;
        arr.forEach(function(element) {
            sum+=element;
        });
        return sum;
    },

    multiply: function(arr) {
        var product = 1;
        arr.forEach(function(element) {
            product*=element;
        });
        return product;
    },

    square: function(num) {
        return num*num;
    },

    random: function(min, max) {
        if(max<min) return new Error("Max must be greater than Min");
        return((Math.round(Math.random())*(max-min))+min)
    }

}

module.exports = mathObj;