// expose.js

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('DOMContentLoaded', func);

var input = document.getElementById("horn-select");
var sound = document.getElementsByClassName("hidden")[0];

var slide = document.getElementById("volume");
var audioImg = document.querySelectorAll('img')[1];
var soundInput = document.querySelector("button");
var soundControls = document.getElementById("volume-controls");

input.addEventListener("change", init);
soundInput.addEventListener("click",init);
soundControls.addEventListener("input",func);

function init() {
  var image = document.querySelector('img');
  if (input.value == "air-horn"){
    image.src = "assets/images/air-horn.svg";
    sound.src = "assets/audio/air-horn.mp3";
    sound.play();
  }
  else if(input.value == "car-horn"){
    image.src = "assets/images/car-horn.svg";
    sound.src = "assets/audio/car-horn.mp3";
    sound.play();
  }
  else if(input.value == "party-horn"){
    image.src = "assets/images/party-horn.svg";
    sound.src = "assets/audio/party-horn.mp3";
    const jsConfetti = new JSConfetti({ input })
    jsConfetti.addConfetti()

    sound.play();
  }

}

function func() {
  if(slide.value == 0 ){
    audioImg.src = "assets/icons/volume-level-0.svg";
    sound.volume = (slide.value)/100;
  }
  else if(slide.value >= 1 && slide.value < 33){
    audioImg.src = "assets/icons/volume-level-1.svg";
    sound.volume = (slide.value)/100;
  }
  else if(slide.value >= 33 && slide.value < 67){
    audioImg.src = "assets/icons/volume-level-2.svg";
    sound.volume = (slide.value)/100;
  }
  else if(slide.value >= 67){
    audioImg.src = "assets/icons/volume-level-3.svg";
    sound.volume = (slide.value)/100;
  }
}