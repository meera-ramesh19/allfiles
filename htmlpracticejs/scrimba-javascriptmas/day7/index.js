const { Button } = require("bootstrap");

audioSongs=['bells.mp3','carol.mp3','christmas.mp3','holynight.mp3','magicnight.mp3','marchsnowmen.mp3','positivewinter.mp3','winter.mp3']
let index=0;
let songSelect=''

const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const muteBtn=document.getElementById('mute-btn')
const unmuteBtn=document.getElementById('unmute-btn')
const prevBtn=document.getElementById('skip_previous');
const nextBtn=document.getElementById('next_previous');
// const audio = new Audio('bells.mp3');
const audioElem=document.querySelector('audio')
 const volume= document.getElementById('volume');
const seek_slider = document.getElementById(".seek-slider");
const volume_slider = document.getElementById(".volume-slider");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");

console.log(volume_slider)
// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

muteBtn.addEventListener('click',function(){
   console.log("mute")
   if (audioElem.mute) {
      audioElem.muted=false
      
   }else{
      audioElem.muted=true

   }
},false);

audioElem.addEventListener("volumechange", function(){
   if(audioElem.muted){
      muteBtn.innerHTML+=` <button id="mute-btn" class="mute-volume">
      <span class="material-icons-outlined" id="volume-display-icon">volume_up</span>
  </button>`
   }else{
      muteBtn.innerHTML+=`<button id="unmute-btn" class="unmute-volume hidden"></button>
      <span class="material-icons-outlined " id="volume-mute-icon hidden"> volume_mute</span>
    </button> `
   }
   
},false);


playBtn.addEventListener('click', function(event){
   audioElem.play()
   audioElem.classList.toggle('hide-element')
})

pauseBtn.addEventListener('click', function(event){
   audioElem.pause();
   audioElem.classList.toggle('hide-element')
})


stopBtn.addEventListener('click', function(event){
    audioElem.pause();
    audioElem.currentTime = 0; 
 })

//  nextBtn.addEventListener('click',function(event){

//  })

//  prevBtn.addEventListener('click',function(event){

//  })

 

//  volume.addEventListener('change',function(e){
//    // audio.volume=e.currentTarget.value/100;
//    audio.volume=audio.curr_time/audio.total_duration;
// })


// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.


function seekTo() {
   // Calculate the seek position by the
   // percentage of the seek slider 
   // and get the relative duration to the track
   let seektop = curr_track.duration * (seek_slider.value / 100);
   
   // Set the current track position to the calculated seek position
   curr_track.currentTime = seektop;
 }
// Function to reset all values to their default
function resetValues() {
   curr_time.textContent = "00:00";
   total_duration.textContent = "00:00";
   seek_slider.value = 0;
 }
// audioVolume.innerHTML+=`
//    <audio id="myAudio" controls>
//      <source src="bells.mp3" type="audio/mpeg">
//      Your browser does not support the audio element.
//    </audio>
//   `

// var audio_element = document.getElementById("myAudio");

// document.onkeydown = function(event) {
//     switch (event.key) {
//        case 'ArrowUp':
//             event.preventDefault();
//             audio_vol = audio_element.volume;
//             if (audio_vol!=1) {

//               try {
//                   audio_element.volume = audio_vol + 0.02;
//               }
//               catch(err) {
//                   audio_element.volume = 1;
//               }
              
//             }
            
//           break;
//        case 'ArrowDown':
//             event.preventDefault();
//             audio_vol = audio_element.volume;
//             if (audio_vol!=0) {

//               try {
//                   audio_element.volume = audio_vol - 0.02;
//               }
//               catch(err) {
//                   audio_element.volume = 0;
//               }
              
//             }
            
//           break;
//     }
// };


//http://www.developphp.com/video/JavaScript/Audio-Play-Pause-Mute-Buttons-Tutorial
//https://www.section.io/engineering-education/how-to-build-a-music-player-with-vanilla-javascript/

// var selectElem = document.getElementById('audio_list');
// var pElem=document.getElementById('p')
// // var file_to_play = file_list.options[ file_list.selectedIndex ].value ;
// // console.log(file_to_play)
// // var player = document.getElementById('audio_player');
// selectElem.addEventListener('change',function(){
//    index=selectElem.selectedIndex;
//    const songSelect=selectElem.options[selectElem.selectedIndex].value;
//    pElem.innerHTML='selectedindex:'+  index;
//    console.log(index)
// })