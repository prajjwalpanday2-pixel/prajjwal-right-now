/* =========================================
   ENTER BUTTON
   ========================================= */

const enterButton = document.getElementById("enterButton");

if (enterButton) {
  enterButton.addEventListener("click", function () {
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

function hideScrollHint() {
  if (!scrollHint) return;

  if (window.scrollY > 80) {
    scrollHint.classList.add("hidden");
  } else {
    scrollHint.classList.remove("hidden");
  }
}

window.addEventListener("scroll", hideScrollHint);
hideScrollHint();


/* =========================================
   SECTION REVEAL
   ========================================= */

const sections = document.querySelectorAll(".reveal");

function showSections() {
  sections.forEach(function (section) {
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.9) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showSections);

showSections();


/* =========================================
   LISTEN
   ========================================= */

function listenSection(elementId) {

  const element = document.getElementById(elementId);

  if (!element) return;

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(element.innerText);

  speech.lang = "en-IN";
  speech.rate = 0.88;
  speech.pitch = 0.95;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}


/* =========================================
   STOP VOICE WHEN PAGE IS HIDDEN
   ========================================= */

document.addEventListener("visibilitychange", function () {

  if (document.hidden) {
    window.speechSynthesis.cancel();
  }

});
