// function runningLogger () {
//     console.log("I am running");
// }

// runningLogger();

//  function multiplyByTen(num) {
//      return num*10;
//  }

//  console.log(multiplyByTen(5));

// function stringReturnOne (){
//     return "Returns First String"
// }

// function stringReturnTwo (){
//     return "Returns Second String"
// }
// console.log(stringReturnOne());
// console.log(stringReturnTwo());


// function caller(callback){
//     if(typeof(callback) === "function") {
//         callback()
//     }
// }

// caller(function(){console.log("hi");})

function myDoubleConsoleLog (callback1, callback2) {
    if(typeof(callback1)==="function" && typeof(callback2) === "function"){
        console.log(callback1());
        console.log(callback2());
    }
}

// myDoubleConsoleLog(()=>{return 1}, ()=>{return 2})

function caller2(callback) {
    console.log("starting");
    setTimeout(function(callback){
        console.log("ending?")
        if(typeof(callback) === "function") {
            callback();

        }
        return "interesting";
    }, 2000, callback)
    
}

caller2(myDoubleConsoleLog(()=>{return 1}, ()=>{return 2}))
