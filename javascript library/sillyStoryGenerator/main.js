const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = "Willy the Goblin"+ "Big Daddy"+ "Father Christmas";
const insetY = "the soup kitchen" + "Disneyland" + "the White House";
const insertZ = "spontaneously combusted" +  "melted into a puddle on the sidewalk" + "turned into a slug and crawled away";
let newStory = storyText;
let xItem = randomValueFromArray();
let yItem = randomValueFromArray();
let zItem = randomValueFromArray();

randomize.addEventListener("click", result());

function result(){

}

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}