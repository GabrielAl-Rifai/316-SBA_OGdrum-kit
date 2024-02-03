// I used querySelectorAll to select all drum buttons and sounds, and then used forEach to attach event listeners. The playSound function is now generic and takes an index parameter,
// get the kick button element
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


// 
  //  window.playbackStart = 0
  //  window.playbackEnd = 3

  //  $("audio").off("timeupdate").on "timeupdate", (e) ->
  //     audio = e.currentTarget
  //     if audio.currentTime > playbackEnd
  //       audio.currentTime = playbackStart
