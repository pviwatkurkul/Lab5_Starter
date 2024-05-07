// explore.js
window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;



function init() {

  if (typeof speechSynthesis === "undefined") {
    return;
  }
  
  let voices = [];
  
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();


    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let talk = document.querySelector("button");
  let inputTxt = document.getElementById("text-to-speak");
  let voiceSelect = document.querySelector("select");
  talk.addEventListener("click",function(){
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);


    let image = document.querySelector("img");
    if(synth.speaking){
      image.src = "assets/images/smiling-open.png";
    }
    
    utterThis.addEventListener("end",function(){
      image.src = "assets/images/smiling.png";
    });
  });
}