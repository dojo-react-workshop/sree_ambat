var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var weight, temperature;

var textStr = "It was :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs :weight:, and it was a hot day.";

var characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var locations = ["the soup kitchen", "Disneyland", "the White House"];
var events = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

function randomValueFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

randomize.addEventListener('click', result);

function result() {

  var name = "Bob";
  if(customName.value != '') {
    var name = customName.value;
    
  }


  if(document.getElementById("uk").checked) {
     weight = Math.round(150) + " kgs";
     temperature =  Math.round(32) + " centigrade";
  }
  else {
     weight = Math.round(300) + " lbs";
     temperature =  Math.round(94) + " fahrenheit";
  }

 character =  randomValueFromArray(characters)
 textStr = textStr.replace(":insertx:", character);
 textStr = textStr.replace(":insertx:", character);
 textStr = textStr.replace(":inserty:", randomValueFromArray(locations));
 textStr = textStr.replace(":insertz:", randomValueFromArray(events));
 textStr = textStr.replace("Bob", name);
 textStr = textStr.replace(":temp:", temperature);
 textStr = textStr.replace(":weight:", weight);
 story.textContent = textStr;
 story.style.visibility = 'visible';
}