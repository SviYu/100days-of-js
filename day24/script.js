const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.getElementById('speak');
const stopBtn = document.getElementById('stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    //console.log(voices);
    const voiceOptions = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice(){
    console.log(this.value);
    msg.voice = voices.find(voice => voice.name === this.value);
    //toggle();
}

function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}

function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    //toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakBtn.addEventListener('click', toggle);
stopBtn.addEventListener('click', () => toggle(false));