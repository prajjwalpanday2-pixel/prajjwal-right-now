/* =========================================
   PRAJJWAL PANDEY — RIGHT NOW
   Interactive controls
   ========================================= */

const enterButton = document.getElementById("enterButton");
const homeSection = document.getElementById("home");

const soundButton = document.getElementById("soundButton");

let speechActive = false;
let ambientAudio = null;
let ambientEnabled = false;


/* =========================================
   ENTER MY WORLD
   ========================================= */

if (enterButton) {
  enterButton.addEventListener("click", () => {

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });
}


/* =========================================
   TEXT TO SPEECH
   ========================================= */

function listenSection(elementId) {

  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  /* Stop current speech if already speaking */
  if (speechActive) {
    window.speechSynthesis.cancel();
    speechActive = false;

    restoreAmbientSound();

    return;
  }

  const text = element.innerText;

  if (!text) {
    return;
  }

  /* Create speech */
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-IN";
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  speechActive = true;

  /* Reduce background sound */
  lowerAmbientSound();

  /* Start speaking */
  window.speechSynthesis.speak(speech);

  /* When speech finishes */
  speech.onend = () => {

    speechActive = false;

    restoreAmbientSound();

  };

  /* If an error happens */
  speech.onerror = () => {

    speechActive = false;

    restoreAmbientSound();

  };
}


/* =========================================
   AMBIENT SOUND
   ========================================= */

/*
   Audio file will be added later.

   Example:
   audio/rain.mp3
*/

function createAmbientAudio() {

  if (!ambientAudio) {

    ambientAudio = new Audio("audio/rain.mp3");

    ambientAudio.loop = true;
    ambientAudio.volume = 0.08;

  }

}


/* =========================================
   AMBIENT SOUND BUTTON
   ========================================= */

if (soundButton) {

  soundButton.addEventListener("click", () => {

    createAmbientAudio();

    if (!ambientEnabled) {

      ambientAudio.play()
        .then(() => {

          ambientEnabled = true;

          soundButton.textContent = "🔊 Ambient Sound: ON";

        })
        .catch(() => {

          soundButton.textContent = "🎵 Tap again to play";

        });

    } else {

      ambientAudio.pause();

      ambientEnabled = false;

      soundButton.textContent = "🎵 Ambient Sound: OFF";

    }

  });

}


/* =========================================
   LOWER AMBIENT SOUND
   ========================================= */

function lowerAmbientSound() {

  if (!ambientAudio || !ambientEnabled) {
    return;
  }

  ambientAudio.volume = 0.01;
}


/* =========================================
   RESTORE AMBIENT SOUND
   ========================================= */

function restoreAmbientSound() {

  if (!ambientAudio || !ambientEnabled) {
    return;
  }

  ambientAudio.volume = 0.08;
}


/* =========================================
   STOP SPEECH WHEN LEAVING PAGE
   ========================================= */

window.addEventListener("beforeunload", () => {

  window.speechSynthesis.cancel();

});
