/* =========================================
   ENTER BUTTON
   ========================================= */

const enterButton = document.getElementById("enterButton");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    const firstSection = document.querySelector(".page-section");

    if (firstSection) {
      firstSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


/* =========================================
   SCROLL HINT
   ========================================= */

const scrollHint = document.querySelector(".scroll-hint");

function updateScrollHint() {
  if (!scrollHint) return;

  if (window.scrollY > 80) {
    scrollHint.classList.add("hidden");
  } else {
    scrollHint.classList.remove("hidden");
  }
}

window.addEventListener("scroll", updateScrollHint);
updateScrollHint();


/* =========================================
   SECTION REVEAL
   ========================================= */

const sections = document.querySelectorAll(".reveal");

function revealSections() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();


/* =========================================
   LISTEN BUTTON
   ========================================= */

function listenSection(elementId) {
  const element = document.getElementById(elementId);

  if (!element) return;

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(
    element.innerText.trim()
  );

  speech.lang = "en-IN";
  speech.rate = 0.88;
  speech.pitch = 0.95;
  speech.volume = 1;

  /* Lower ambient sound while speaking */
  if (window.ambientAudio && !window.ambientAudio.paused) {
    window.ambientAudio.volume = 0.05;
  }

  speech.onend = () => {
    if (window.ambientAudio && !window.ambientAudio.paused) {
      window.ambientAudio.volume = 0.20;
    }
  };

  speech.onerror = () => {
    if (window.ambientAudio && !window.ambientAudio.paused) {
      window.ambientAudio.volume = 0.20;
    }
  };

  window.speechSynthesis.speak(speech);
}


/* =========================================
   AMBIENT SOUND
   ========================================= */

/*
   NOTE:
   Browser autoplay is blocked on most phones.
   Therefore sound starts only after pressing
   the Ambient Sound button.
*/

const soundButton = document.getElementById("soundButton");

/*
   Ambient nature sound.
   This is only a temporary test sound.
*/

const ambientAudio = new Audio(
  "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a7345a.mp3"
);

ambientAudio.loop = true;
ambientAudio.volume = 0.20;

window.ambientAudio = ambientAudio;

let ambientPlaying = false;


if (soundButton) {

  soundButton.addEventListener("click", async () => {

    try {

      if (!ambientPlaying) {

        await ambientAudio.play();

        ambientPlaying = true;

        soundButton.textContent =
          "🔇 Ambient Sound ON";

      } else {

        ambientAudio.pause();

        ambientPlaying = false;

        soundButton.textContent =
          "🎵 Ambient Sound";

      }

    } catch (error) {

      console.log("Audio error:", error);

      soundButton.textContent =
        "🎵 Sound unavailable";

    }

  });

}


/* =========================================
   STOP VOICE WHEN PAGE IS HIDDEN
   ========================================= */

document.addEventListener("visibilitychange", () => {

  if (document.hidden) {
    window.speechSynthesis.cancel();
  }

});
