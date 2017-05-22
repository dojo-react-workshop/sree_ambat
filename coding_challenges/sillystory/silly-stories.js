var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var textStr = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var character = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var loc = ["the soup kitchen", "Disneyland", "the White House"];
var event = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

  var name = "Bob";
  if(customName.value != '') {
    var name = customName.value;
    
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
    
  }

 textStr.replace(":insertx:", randomValueFromArray(character));
 textStr.replace(":inserty:", randomValueFromArray(loc));
 textStr.replace(":insertz:", randomValueFromArray(event));
 textStr.replace("Bob", name);
 story.textContent = textStr;
 story.style.visibility = 'visible';
}