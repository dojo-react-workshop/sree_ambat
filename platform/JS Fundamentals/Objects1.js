function VehicleConstructor (name, wheels, passengers) {
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.makeNoise = function() {
    console.log("Noise");
  }
}

var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = () => {
console.log('Ring Ring')
};

bike.makeNoise()

var sedan = new VehicleConstructor("sedan", 4, 5)
sedan.makeNoise = () => {
console.log('Honk Honk')
};

sedan.makeNoise()

var bus = new VehicleConstructor("sedan", 4, 5)

bus.pickup = function(num) {
  this.passengers+=num;
}

console.log(bus.passengers)