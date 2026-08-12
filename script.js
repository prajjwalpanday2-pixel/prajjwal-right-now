/* =========================================
   PRAJJWAL — RIGHT NOW
   JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     ENTER BUTTON
     ========================================= */

  const enterButton = document.getElementById("enterButton");

  if (enterButton) {
    enterButton.addEventListener("click", () => {

      const firstSection = document.querySelector(".page-section");

      if (firstSection) {
        firstSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });
  }


  /* =========================================
     SCROLL HINT
     ========================================= */

  const scrollHint = document.querySelector(".scroll-hint");

  const updateScrollHint = () => {

    if (!scrollHint) return;

    if (window.scrollY > 80) {
      scrollHint.classList.add("hidden");
    } else {
      scrollHint.classList.remove("hidden");
    }

  };

  window.addEventListener("scroll", updateScrollHint, {
    passive: true
  });

  updateScrollHint();


  /* =========================================
     SCROLL REVEAL
     ========================================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* =========================================
     AMBIENT SOUND
     ========================================= */

  const soundButton = document.getElementById("soundButton");

  let audioContext = null;
  let oscillator = null;
  let gainNode = null;
  let soundPlaying = false;

  if (soundButton) {

    soundButton.addEventListener("click", () => {

      if (!soundPlaying) {

        try {

          audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
          )();

          oscillator = audioContext.createOscillator();
          gainNode = audioContext.createGain();

          oscillator.type = "sine";

          oscillator.frequency.setValueAtTime(
            110,
            audioContext.currentTime
          );

          gainNode.gain.setValueAtTime(
            0.015,
            audioContext.currentTime
          );

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.start();

          soundPlaying = true;

          soundButton.textContent = "🔇 Ambient Sound";

        } catch (error) {

          console.log("Ambient sound could not start.");

        }

      } else {

        if (oscillator) {
          oscillator.stop();
          oscillator.disconnect();
          oscillator = null;
        }

        if (audioContext) {
          audioContext.close();
          audioContext = null;
        }

        soundPlaying = false;

        soundButton.textContent = "🎵 Ambient Sound";

      }

    });

  }

});


/* =========================================
   LISTEN SECTION
   ========================================= */

function listenSection(elementId) {

  const element = document.getElementById(elementId);

  if (!element) return;

  if (!("speechSynthesis" in window)) {
    alert("Text-to-speech is not supported on this browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const text = element.innerText.trim();

  if (!text) return;

  const speech = new SpeechSynthesisUtterance(text);

  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);

}
