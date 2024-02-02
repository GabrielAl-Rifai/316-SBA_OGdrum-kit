// First Steps
// get the kick button element
const kickButton = document.getElementById("kick");
const hihatButton = document.getElementById("hihat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");

// get the kick sound element
const kickSound = document.getElementById("kick-sound");
const hihatSound = document.getElementById("hihat-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tomSound = document.getElementById("tom-sound");

// attach a click event listenenr to the kick button
kickButton.addEventListener("click",function() {
// reset the sound time to replay instance of play the kick sound
  kickSound.currentTime = 0;

// Play the kick sound
kickSound.play();
// Kick WORKS!!!
});

hihatButton.addEventListener("click",function() {
    hihatSound.currentTime = 0;
    hihatSound.play();
});
// HiHat Works
rideButton.addEventListener("click",function() {
  rideSound.currentTime = 0;
  rideSound.play();
});
// Ride Works

snareButton.addEventListener("click",function() {
  snareSound.currentTime = 0;
  snareSound.play();
});
// Snare Works

tomButton.addEventListener("click",function() {
  tomSound.currentTime = 0;
  tomSound.play();
});
// Deep Tom Works

