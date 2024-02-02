// First Steps
// get the kick button element
const kickButton = document.getElementById("kick");
const hihatButton = document.getElementById("hihat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");
const crashButton = document.getElementById("crash");

// get the kick sound element
const kickSound = document.getElementById("kick-sound");
const hihatSound = document.getElementById("hihat-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tomSound = document.getElementById("tom-sound");
const crashSound = document.getElementById("crash-sound");

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
// Ride does NOT Work. the file is actually an mp3 but I changed the extension to wav. It won't work either way.
// Ride updated and is functioning
// Ride time duration is over 1 minute. I need a fix to trim or set an ending keyframe



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

crashButton.addEventListener("click",function() {
  crashSound.currentTime = 0;
  crashSound.play();
});

// Trigger drums with keyboard keys

function playSound(kick) {
  const audioElement = document.getElementById(`${kick}Sound`);
  if (kickSound) {
    kickSound.currentTime = 0;
    kickSound.play();
}
}

  // Get the key code of the pressed key

document.addEventListener('keydown', function(event) {

  if (event.key === 'k') {
    kickSound.currentTime = 0;
    kickSound.play();
  } else if (event.key === 'h') {
    hihatSound.currentTime = 0;
    hihatSound.play();
  } else if (event.key === 'r') {
    rideSound.currentTime = 0;
    rideSound.play();
  } else if (event.key === 's') {
    snareSound.currentTime = 0;
    snareSound.play();
  } else if (event.key === 't') {
    tomSound.currentTime = 0;
    tomSound.play();
  } else if (event.key === 'c') {
    crashSound.currentTime = 0;
    crashSound.play();
  }
  });




 



// 
  //  window.playbackStart = 0
  //  window.playbackEnd = 3

  //  $("audio").off("timeupdate").on "timeupdate", (e) ->
  //     audio = e.currentTarget
  //     if audio.currentTime > playbackEnd
  //       audio.currentTime = playbackStart
