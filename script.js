/* =========================================
   PRAJJWAL PANDEY — RIGHT NOW
   Interactive controls
   ========================================= */

const enterButton = document.getElementById("enterButton");
const homeSection = document.getElementById("home");
const soundButton = document.getElementById("soundButton");
const scrollHint = document.querySelector(".scroll-hint");

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
   HIDE SCROLL HINT AFTER SCROLLING
   ========================================= */

window.addEventListener("scroll", () => {

  if (!scrollHint) {
    return;
  }

  if (window.scrollY > 80) {

    scrollHint.classList.add("hidden");

  } else {

    scrollHint.classList.remove("hidden");

  }

});


/* =========================================
   TEXT TO SPEECH
   ========================================= */

function listenSection(elementId) {

  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

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

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-IN";
  speech.rate = 0.82;
  speech.pitch = 0.95;
  speech.volume = 1;

  speechActive = true;

  lowerAmbientSound();

  window.speechSynthesis.speak(speech);

  speech.onend = () => {

    speechActive = false;

    restoreAmbientSound();

  };

  speech.onerror = () => {

    speechActive = false;

    restoreAmbientSound();

  };

}


/* =========================================
   AMBIENT SOUND
   ========================================= */

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

          soundButton.textContent =
            "🔊 Ambient Sound: ON";

        })
        .catch(() => {

          soundButton.textContent =
            "🎵 Tap again to play";

        });

    } else {

      ambientAudio.pause();

      ambientEnabled = false;

      soundButton.textContent =
        "🎵 Ambient Sound: OFF";

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
