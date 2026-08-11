/* =========================================
   PRAJJWAL RIGHT NOW
   MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   ENTER BUTTON
   ========================================= */

const enterButton = document.getElementById("enterButton");

if (enterButton) {
  enterButton.addEventListener("click", () => {

    const firstSection =
      document.querySelector(".page-section");

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

const scrollHint =
  document.querySelector(".scroll-hint");

function updateScrollHint() {

  if (!scrollHint) return;

  if (window.scrollY > 80) {
    scrollHint.classList.add("hidden");
  } else {
    scrollHint.classList.remove("hidden");
  }

}

window.addEventListener(
  "scroll",
  updateScrollHint,
  { passive: true }
);

updateScrollHint();


/* =========================================
   SECTION SCROLL REVEAL
   ========================================= */

const revealSections =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.15
    }
  );


revealSections.forEach((section) => {

  revealObserver.observe(section);

});


/* =========================================
   TEXT TO SPEECH
   ========================================= */

let currentSpeech = null;

function listenSection(elementId) {

  const element =
    document.getElementById(elementId);

  if (!element) return;


  /* Stop previous voice */

  window.speechSynthesis.cancel();


  const text =
    element.innerText.trim();

  if (!text) return;


  const speech =
    new SpeechSynthesisUtterance(text);


  /* Voice settings */

  speech.lang = "en-IN";

  speech.rate = 0.9;

  speech.pitch = 0.95;

  speech.volume = 1;


  currentSpeech = speech;


  /* Reduce ambient sound while speaking */

  if (
    window.ambientAudio &&
    !window.ambientAudio.paused
  ) {

    window.ambientAudio.volume = 0.08;

  }


  speech.onend = () => {

    if (window.ambientAudio) {

      window.ambientAudio.volume = 0.22;

    }

    currentSpeech = null;

  };


  speech.onerror = () => {

    if (window.ambientAudio) {

      window.ambientAudio.volume = 0.22;

    }

    currentSpeech = null;

  };


  window.speechSynthesis.speak(speech);

}


/* =========================================
   STOP SPEECH WHEN PAGE IS LEFT
   ========================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (document.hidden) {

      window.speechSynthesis.cancel();

    }

  }
);


/* =========================================
   AMBIENT SOUND
   ========================================= */

/*
  Browser autoplay rules normally prevent
  sound from starting automatically.

  So the user starts ambient sound by
  pressing the button.
*/

const soundButton =
  document.getElementById("soundButton");


/*
  Ambient audio element
*/

const ambientAudio =
  new Audio(
    "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a7345a.mp3"
  );


ambientAudio.loop = true;

ambientAudio.volume = 0.22;


/*
  Make audio available globally
  for the Listen button.
*/

window.ambientAudio =
  ambientAudio;


let ambientPlaying = false;


if (soundButton) {

  soundButton.addEventListener(
    "click",
    async () => {

      try {

        if (!ambientPlaying) {

          await ambientAudio.play();

          ambientPlaying = true;

          soundButton.textContent =
            "🔇 Ambient Sound On";

        } else {

          ambientAudio.pause();

          ambientPlaying = false;

          soundButton.textContent =
            "🎵 Ambient Sound";

        }

      } catch (error) {

        console.log(
          "Ambient sound could not start:",
          error
        );

      }

    }
  );

}


/* =========================================
   STOP AMBIENT SOUND WHEN PAGE IS CLOSED
   ========================================= */

window.addEventListener(
  "beforeunload",
  () => {

    if (window.ambientAudio) {

      window.ambientAudio.pause();

    }

    window.speechSynthesis.cancel();

  }
);
