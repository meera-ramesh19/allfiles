
/ Track 1: Audio element was first created in HTML. We can control the Audio element from Javascript
var track1 = document.getElementById("track1");
track1.loop = false;      // Loop playback infinitely

// Track 2: Audio element is created in Javascript, and can be added to the DOM if we want it to appear as an HTML5 Audio element
var track2 = new Audio();
track2.src = 'https://p.scdn.co/mp3-preview/8064eef0f1170380720c7c124eabf2d06b3f2170';
track2.controls = true;   // Set to false to make it a hidden element
track2.currentTime = 10;  // Set the playhead to a specific time in seconds
var track2container = document.getElementById("track2container");
track2container.appendChild(track2);

// Track 3: We can also keep the standard HTML5 Audio element hidden, and control it using custom buttons.
var track3 = new Audio();
track3.src = 'https://p.scdn.co/mp3-preview/c2bca95698cc381f0a1a9111095156d15ebd4698';
var customPlayButton = document.getElementById("customPlayButton");
customPlayButton.addEventListener("click", function(){
  if( track3.paused )
    track3.play();
  else
    track3.pause();
});
