// First Steps
// get the kick button element
const kickButton = document.getElementById("kick");

// get the kick sound element
const kickSound = document.getElementById("kick-sound");

// attach a click event listenenr to the kick button
kickButton.addEventListener("click",function() {
// reset the sound time to replay instanceofplay the kick sound
  kickSound.currentTime = 0;

// Play the kick sound
kickSound.play();

});
