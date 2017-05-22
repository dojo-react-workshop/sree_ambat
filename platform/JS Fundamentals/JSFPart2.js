// function sumbetween(x, y) {
//     var sum = 0;
//     for(i=x; i<=y; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }

// sumbetween(10, 20)

// function minimum(arr){
//     var min;
//     for(let i=0; i<arr.length; i++){
//         if(i==0 || min>arr[i]) min = arr[i];
//     }
//     return min
// }
// console.log(minimum([1,2,3,4,5,6,7]))

// function average(arr){
//     var avg=0;
//     for(let i=0; i<arr.length; i++){
//         avg+=arr[i];
//     }
//     return avg/arr.length;
// }

// console.log(average([1,2,3,4,5,6,7]))

// var sumbetween = function (x, y) {
//     var sum = 0;
//     for(i=x; i<=y; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }
// sumbetween(10, 20)

// var minimum = function(arr){
//     var min;
//     for(let i=0; i<arr.length; i++){
//         if(i==0 || min>arr[i]) min = arr[i];
//     }
//     return min
// }
// console.log(minimum([1,2,3,4,5,6,7]))

// var average=function(arr){
//     var avg=0;
//     for(let i=0; i<arr.length; i++){
//         avg+=arr[i];
//     }
//     return avg/arr.length;
// }

// console.log(average([1,2,3,4,5,6,7]))

// var obj = {}

// obj.sumbetween = function (x, y) {
//     var sum = 0;
//     for(i=x; i<=y; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }

// obj.minimum = function(arr){
//     var min;
//     for(let i=0; i<arr.length; i++){
//         if(i==0 || min>arr[i]) min = arr[i];
//     }
//     return min
// }

// obj.average=function(arr){
//     var avg=0;
//     for(let i=0; i<arr.length; i++){
//         avg+=arr[i];
//     }
//     return avg/arr.length;
// }


var person = function(name ){
this.name = name;
this.distanceTravelled = 0;

this.say_name = function() {
    console.log(this.name);
}

this.say_something = function(str) {
    console.log(this.name + " says " + str)
}

this.walk = function() {
    console.log(this.name + " is walking");
    this.distanceTravelled+= 3;
}

this.run = function() {
    console.log(this.name + " is running");
    this.distanceTravelled+= 10;
}

this.crawl = function() {
    console.log(this.name + " is crawling");
    this.distanceTravelled+= 1;
}


}

var newPerson = new person("Sree")


newPerson.say_name();
newPerson.say_something("You are cool")
newPerson.walk()
newPerson.run()
newPerson.crawl()

console.log(newPerson.distanceTravelled);