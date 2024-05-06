// explore.js
window.addEventListener('DOMContentLoaded', init);


// var but = document.querySelector("button");
// but.addEventListener("click",init);
function init() {
  const voices = speechSynthesis.getVoices();
  
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