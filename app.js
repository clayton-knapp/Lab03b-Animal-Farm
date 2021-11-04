// import functions and grab DOM elements
const catPicEl = document.getElementById('cat-pic');
const dogPicEl = document.getElementById('dog-pic');
const horsePicEl = document.getElementById('horse-pic');

const catAudioEl = document.getElementById('cat-audio');
const dogAudioEl = document.getElementById('dog-audio');
const horseAudioEl = document.getElementById('horse-audio');

const displayLastEl = document.getElementById('display-last');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

catPicEl.addEventListener('click', ()=>{
    catAudioEl.play();
    displayLastEl.textContent = "Cat";
})

dogPicEl.addEventListener('click', ()=>{
    dogAudioEl.play();
    displayLastEl.textContent = "Dog";
})

horsePicEl.addEventListener('click', ()=>{
    horseAudioEl.play();
    displayLastEl.textContent = "Horse";
})


//KEYDOWN

document.addEventListener('keydown', (event)=>{
  if (event.key === "c"){
    catAudioEl.play();
    displayLastEl.textContent = "Cat";
  }
  if (event.key === "d") {
    dogAudioEl.play();
    displayLastEl.textContent = "Dog";
  }
  if (event.key === "h") {
    horseAudioEl.play();
    displayLastEl.textContent = "Horse";
  }
});