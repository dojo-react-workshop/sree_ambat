// function Vehicle (name, wheels, passengers, speed) {

//     const vehicleProto = {
//         accelerate: function(){this.speed; return this.speed}
//     }

//     const vehicle = Object.create(vehicleProto);
//     vehicle.name = name;
//     vehicle.speed = speed;

//     return vehicle;
// }

// const v1 = Vehicle("Sedan", 4, 5, 100)
// console.log(v1);
// console.log(v1.accelerate()); 


// const VehicleConstructor = (function(){
// const vehiclePrototype = {
//     accelerate: function(velChg = 1) {
//         this.speed = velChg;
//         return this.speed;
//     }
// }

// return function VehicleConstructor(name, numWheels, numPass, speed=0){
//     const vehicle = Object.create(vehiclePrototype);
//     vehicle.name = name;
//     vehicle.speed = speed;
    
//     return vehicle;
// }

// })();


function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.accelerate = function(vel=1) {
    return this.speed += vel;
}

v1 = new Vehicle("Bus", 100)
console.log(v1.accelerate());