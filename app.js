// import functions and grab DOM elements
const catPicEl = document.getElementById('cat-pic');
const dogPicEl = document.getElementById('dog-pic');
const horsePicEl = document.getElementById('horse-pic');

const catAudioEl = document.getElementById('cat-audio');
const dogAudioEl = document.getElementById('dog-audio');
const horseAudioEl = document.getElementById('horse-audio');

const displayLastEl = document.getElementById('display-last');


//Make function that takes 2 arguments of what animal sound and a string with which animal name
// Plays the sound of the animal specified in the argument
// Displays the text of the animal specified int the argument

function playAnimalSound(someSoundEl, someWord) {
  someSoundEl.play();
  displayLastEl.textContent = someWord;

}


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

catPicEl.addEventListener('click', ()=>{
    playAnimalSound(catAudioEl, 'Cat');
});

dogPicEl.addEventListener('click', ()=>{
    playAnimalSound(dogAudioEl, 'Dog');
});

horsePicEl.addEventListener('click', ()=>{
    playAnimalSound(horseAudioEl, 'Horse');
});


//KEYDOWN

document.addEventListener('keydown', (event)=>{
  if (event.key === "c"){
    playAnimalSound(catAudioEl, 'Cat');
  }
  if (event.key === "d") {
    playAnimalSound(dogAudioEl, 'Dog');
  }
  if (event.key === "h") {
    playAnimalSound(horseAudioEl, 'Horse');
  }
});



