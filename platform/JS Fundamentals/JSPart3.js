function person(name) {
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

var sree = person("sree").walk()

console.log(sree.distanceTravelled);
