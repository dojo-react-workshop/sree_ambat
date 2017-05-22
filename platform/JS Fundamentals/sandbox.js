// console.log(a);
// var a=2;

// console.log(typeof(b));
// var b="weird"
// console.log(typeof(b));

//ternary operations
// (1<2)?console.log(true):console.log(false);
// (null)?console.log(true):console.log(false);
// (undefined)?console.log(true):console.log(false);
// var a=[1, 2]
// (a)?console.log(true):console.log(false);


var ninja = {
  name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
  belt:[10, 10, 10, 9, 9.75]
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}
