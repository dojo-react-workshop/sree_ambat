function personConstructor(name) {
    var obj = {}
    obj.name = name;
    obj.distanceTravelled = 0;
    obj.say_name = function () {
        console.log(obj["name"]);
    }
    obj.say_something = function (str) {
        console.log(obj["name"] + " says " + str);
    }
    obj.walk = function () {
        obj.distanceTravelled+=3;
    }
    obj.run = function () {
        obj.distanceTravelled+=10;
    }    
    obj.crawl = function (tr) {
        obj.distanceTravelled+=1;
    }

    
    return obj;
}

// var person = personConstructor("sree")
// person.walk();
// console.log(person.distanceTravelled)


function ninjaConstructor(name) {
    var obj ={};
    obj.name = name;
    obj.cohort = "";
    obj.belt = "Yellow";

    obj.levelUp = function () {
        obj.belt = "Black"
    }
    return obj;
}

var ninja = ninjaConstructor("Sree");
ninja.cohort = "MEAN";
ninja.levelUp()
console.log(ninja.belt);