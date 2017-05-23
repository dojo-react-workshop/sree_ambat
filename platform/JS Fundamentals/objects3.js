function Vehicle (name, wheels, passengers) {
    const vehicle = {
        name,
        wheels,
        passengers,
        makeNoise: () => {console.log("Noise");}
    };
    return vehicle
}

const v1 = Vehicle("Sedan", 4, 5)
v1.makeNoise()