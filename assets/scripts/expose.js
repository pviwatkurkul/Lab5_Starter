// expose.js

window.addEventListener('DOMContentLoaded', init);

var input = document.getElementById("horn-select");
var soundInput = document.querySelector("button");
input.addEventListener("change", init);
soundInput.addEventListener("click",init);

function init() {
  var image = document.querySelector('img');
  var sound = document.getElementsByClassName("hidden")[0];
  console.log(sound);
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
    sound.play();
  }
}

