// In this updated version, I used querySelectorAll to select all drum buttons and sounds, and then used forEach to attach event listeners. The playSound function is now generic and takes an index parameter, making the code more maintainable. The keyboard event listener also uses toLowerCase() to handle both uppercase and lowercase keys.

// Drum buttons and sounds
const drumButtons = document.querySelectorAll(".container button");
const drumSounds = document.querySelectorAll("audio");

// Event listener for drum buttons
drumButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    playSound(index);
  });
});

// Event listener for keyboard keys
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();
  const index = ["k", "h", "r", "s", "t", "c"].indexOf(key);

  if (index !== -1) {
    playSound(index);
  }
});

// Function to play the drum sound based on index
function playSound(index) {
  const sound = drumSounds[index];

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
// Cache elements using getElementById
const container = document.getElementById('container');
const outputParagraph = document.getElementById('output');
const changeContentBtn = document.getElementById('changeContentBtn');
const validationForm = document.getElementById('validationForm');
const usernameInput = document.getElementById('username');

// Cache elements using querySelector
// const outputParagraph = document.querySelector('#output');

// Use parent-child-sibling relationship to navigate between elements
const firstChildOfContainer = container.firstChild;
const lastChildOfContainer = container.lastChild;

// Iterate over a collection of elements to accomplish a task
const childElements = container.children;
for (const childElement of childElements) {
    // Perform some task with each child element
}

// Create an element using createElement
const newElement = document.createElement('p');
newElement.textContent = 'Copyright 2024';

// Append new elements to the DOM
container.appendChild(newElement);

// Use DocumentFragment for templating
const fragment = document.createDocumentFragment();
const templateElement = document.createElement('div');
templateElement.textContent = 'template1';
fragment.appendChild(templateElement);

// Modify HTML or text content in response to user interaction
function changeContent() {
    outputParagraph.innerText = 'Optional Finish';
}

// Modify styles and/or CSS classes
changeContentBtn.addEventListener('mouseover', () => {
    outputParagraph.style.color = 'blue';
});

// Modify styles using classList
changeContentBtn.addEventListener('mouseout', () => {
    outputParagraph.classList.remove('highlight');
});

// Modify at least one attribute of an element in response to user interaction
validationForm.addEventListener('submit', validateForm);

// Register at least two different event listeners and create associated event handler functions
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now

    if (usernameInput.checkValidity()) {
        alert('Form submitted successfully!');
    } else {
        alert('Please enter a valid username.');
    }
}

// Use at least two Browser Object Model (BOM) properties or methods
console.log('Window width: ' + window.innerWidth);
console.log('User Agent: ' + navigator.userAgent);

// 
  //  window.playbackStart = 0
  //  window.playbackEnd = 3

  //  $("audio").off("timeupdate").on "timeupdate", (e) ->
  //     audio = e.currentTarget
  //     if audio.currentTime > playbackEnd
  //       audio.currentTime = playbackStart
