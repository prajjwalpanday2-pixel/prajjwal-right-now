* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  background: #080b16;
  color: #f4f6ff;
  font-family: Arial, Helvetica, sans-serif;
}

/* =========================================
   SPACE BACKGROUND
   ========================================= */

.space-background {
  position: fixed;
  inset: 0;
  z-index: -10;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(55, 70, 130, 0.18),
      transparent 45%
    ),
    linear-gradient(
      135deg,
      #070a14,
      #10162b,
      #080b16
    );
}

.stars,
.stars::before,
.stars::after {
  position: absolute;
  inset: -100px;
  content: "";
  background-image:
    radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle,
      rgba(170, 190, 255, 0.55) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle,
      rgba(255, 255, 255, 0.35) 1px,
      transparent 1px
    );
  background-size:
    90px 90px,
    145px 145px,
    210px 210px;
  background-position:
    10px 20px,
    50px 70px,
    20px 100px;
  animation: starsMove 45s linear infinite;
}

.stars::before {
  opacity: 0.35;
  animation-duration: 65s;
}

.stars::after {
  opacity: 0.2;
  animation-duration: 85s;
}

@keyframes starsMove {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-90px, 70px, 0);
  }
}

/* =========================================
   PLANETS
   ========================================= */

.planet {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.planet-one {
  width: 135px;
  height: 135px;
  top: 12%;
  right: 8%;

  background:
    radial-gradient(
      circle at 35% 30%,
      #b8c8ff,
      #596da6 45%,
      #242a48 78%
    );

  box-shadow:
    0 0 35px rgba(120, 145, 255, 0.32),
    0 0 100px rgba(80, 100, 220, 0.12);

  animation: planetOneFloat 13s ease-in-out infinite;
}

.planet-two {
  width: 55px;
  height: 55px;
  left: 8%;
  bottom: 18%;

  background:
    radial-gradient(
      circle at 35% 30%,
      #decaff,
      #765aa8 50%,
      #30263f
    );

  box-shadow:
    0 0 30px rgba(160, 120, 255, 0.28);

  animation: planetTwoFloat 16s ease-in-out infinite;
}

@keyframes planetOneFloat {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(-25px, 22px) rotate(8deg);
  }
}

@keyframes planetTwoFloat {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(25px, -30px);
  }
}

/* =========================================
   GLOW ORB
   ========================================= */

.glow-orb {
  position: absolute;
  width: 420px;
  height: 420px;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: rgba(75, 95, 180, 0.06);

  filter: blur(75px);

  animation: orbPulse 9s ease-in-out infinite;

  pointer-events: none;
}

@keyframes orbPulse {
  0%,
  100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0.95);
  }

  50% {
    opacity: 0.75;
    transform: translate(-50%, -50%) scale(1.08);
  }
}

/* =========================================
   OPENING SCREEN
   ========================================= */

.opening-screen {
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 30px 20px;

  text-align: center;
}

.intro-content {
  width: min(850px, 100%);

  opacity: 0;

  animation: introReveal 2s ease forwards;
}

@keyframes introReveal {
  from {
    opacity: 0;
    transform: translateY(35px);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.small-intro {
  margin-bottom: 22px;

  font-size: 12px;
  letter-spacing: 5px;

  color: #aebcff;

  opacity: 0.9;
}

h1 {
  margin-bottom: 25px;

  font-size: clamp(48px, 9vw, 100px);
  line-height: 1;
  font-weight: 700;

  letter-spacing: -3px;

  background:
    linear-gradient(
      120deg,
      #ffffff,
      #cbd6ff,
      #ffffff
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  text-shadow:
    0 0 35px rgba(170, 190, 255, 0.18);

  animation: titleGlow 4s ease-in-out infinite;
}

@keyframes titleGlow {
  0%,
  100% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.22);
  }
}

.intro-line {
  margin-bottom: 20px;

  font-size: clamp(16px, 3vw, 22px);

  color: #c8d0ed;

  letter-spacing: 1px;
}

.intro-description {
  max-width: 600px;

  margin: 0 auto 35px;

  color: #9da7c4;

  line-height: 1.8;

  font-size: 16px;
}

/* =========================================
   ENTER BUTTON
   ========================================= */

.enter-button {
  padding: 14px 28px;

  border: 1px solid rgba(180, 195, 255, 0.35);

  border-radius: 50px;

  background: rgba(120, 140, 220, 0.08);

  color: #f5f7ff;

  font-size: 15px;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.enter-button:hover {
  transform: translateY(-3px);

  background: rgba(130, 150, 230, 0.18);

  box-shadow:
    0 0 30px rgba(130, 150, 230, 0.2);
}

.enter-button:active {
  transform: scale(0.96);
}

/* =========================================
   SCROLL HINT
   ========================================= */

.scroll-hint {
  position: absolute;

  bottom: 30px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  color: #9da8c8;

  font-size: 25px;

  animation:
    scrollFloat 2s ease-in-out infinite;

  opacity: 1;

  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.scroll-hint span {
  font-size: 11px;

  letter-spacing: 2px;

  text-transform: uppercase;
}

.scroll-hint.hidden {
  opacity: 0;
  pointer-events: none;

  transform: translate(-50%, 15px);
}

@keyframes scrollFloat {
  0%,
  100% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, 8px);
  }
}

/* =========================================
   MAIN SECTIONS
   ========================================= */

.page-section {
  position: relative;

  min-height: 100vh;
  min-height: 100svh;

  max-width: 1050px;

  margin: auto;

  padding: 130px 35px;

  display: flex;

  align-items: center;

  gap: 45px;
}

.section-number {
  flex-shrink: 0;

  font-size: clamp(70px, 12vw, 150px);

  font-weight: 700;

  line-height: 1;

  color: rgba(190, 200, 245, 0.16);

  letter-spacing: -8px;

  transition:
    color 0.6s ease,
    transform 0.6s ease;
}

.page-section:hover .section-number {
  color: rgba(190, 200, 245, 0.24);

  transform: translateX(5px);
}

.section-content {
  width: 100%;
  max-width: 700px;
}

.section-label {
  margin-bottom: 15px;

  color: #aebcff;

  font-size: 12px;

  letter-spacing: 4px;
}

.page-section h2 {
  margin-bottom: 25px;

  font-size: clamp(35px, 7vw, 65px);

  line-height: 1.05;

  letter-spacing: -2px;

  color: #f4f6ff;

  text-shadow:
    0 0 30px rgba(170, 190, 255, 0.08);
}

.page-section p {
  max-width: 700px;

  color: #b4bdd6;

  font-size: 18px;

  line-height: 1.9;
}

/* =========================================
   FRIENDS
   ========================================= */

.friends-section .section-content {
  padding: 35px;

  border: 1px solid rgba(170, 185, 255, 0.12);

  border-radius: 28px;

  background: rgba(80, 95, 150, 0.035);

  backdrop-filter: blur(10px);

  box-shadow:
    0 0 70px rgba(70, 90, 170, 0.05);
}

.friends-intro {
  margin-bottom: 10px;
}

.friend-card {
  display: flex;
  align-items: flex-start;

  gap: 20px;

  margin-top: 25px;

  padding: 24px;

  border: 1px solid rgba(170, 185, 255, 0.14);

  border-radius: 22px;

  background: rgba(80, 95, 150, 0.055);

  backdrop-filter: blur(12px);

  box-shadow:
    0 10px 40px rgba(20, 30, 70, 0.12);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.friend-card:hover {
  transform: translateY(-5px);

  border-color: rgba(180, 195, 255, 0.28);

  background: rgba(90, 105, 165, 0.09);
}

.friend-number {
  flex-shrink: 0;

  font-size: 14px;

  letter-spacing: 2px;

  color: #aebcff;

  padding-top: 5px;
}

.friend-card h3 {
  margin: 0 0 10px;

  font-size: 25px;

  color: #eef1ff;
}

.friend-card p {
  margin: 0;

  color: #b4bdd6;

  font-size: 16px;

  line-height: 1.75;
}

.friends-ending {
  margin-top: 30px;
}

/* =========================================
   LISTEN BUTTON
   ========================================= */

.listen-button {
  margin-bottom: 30px;

  padding: 10px 17px;

  border: 1px solid rgba(170, 185, 255, 0.25);

  border-radius: 30px;

  background: rgba(120, 140, 220, 0.08);

  color: #dce3ff;

  cursor: pointer;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.listen-button:hover {
  transform: translateY(-2px);

  background: rgba(120, 140, 220, 0.18);

  box-shadow:
    0 0 25px rgba(130, 150, 230, 0.12);
}

.listen-button:active {
  transform: scale(0.96);
}

/* =========================================
   SUPPORT / QR
   ========================================= */

.support-section .section-content {
  width: 100%;
}

.support-card {
  width: min(100%, 420px);

  margin: 35px auto 0;

  padding: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(170, 185, 255, 0.16);

  border-radius: 28px;

  background: rgba(35, 45, 80, 0.20);

  backdrop-filter: blur(14px);

  box-shadow:
    0 20px 70px rgba(20, 30, 70, 0.20);

  overflow: hidden;
}

.support-qr {
  display: block;

  width: min(100%, 330px);

  height: auto;

  border-radius: 18px;

  object-fit: contain;

  box-shadow:
    0 0 35px rgba(170, 190, 255, 0.08);
}

.support-note {
  margin-top: 18px;

  text-align: center;

  font-size: 13px !important;

  line-height: 1.5 !important;

  color: #9da7c4 !important;
}

/* =========================================
   AMBIENT SOUND
   ========================================= */

.audio-controls {
  position: fixed;

  right: 18px;
  bottom: 18px;

  z-index: 20;
}

#soundButton {
  padding: 10px 14px;

  border: 1px solid rgba(170, 185, 255, 0.2);

  border-radius: 30px;

  background: rgba(10, 14, 30, 0.72);

  color: #d2daf3;

  font-size: 12px;

  cursor: pointer;

  backdrop-filter: blur(12px);

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

#soundButton:hover {
  background: rgba(80, 95, 160, 0.2);
}

#soundButton:active {
  transform: scale(0.96);
}

/* =========================================
   SCROLL REVEAL
   ========================================= */

.reveal {
  opacity: 0;

  transform: translateY(55px);

  filter: blur(8px);

  transition:
    opacity 1s ease,
    transform 1s ease,
    filter 1s ease;
}

.reveal.visible {
  opacity: 1;

  transform: translateY(0);

  filter: blur(0);
}

/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 700px) {

  .planet-one {
    width: 85px;
    height: 85px;

    right: -10px;
    top: 15%;
  }

  .planet-two {
    width: 38px;
    height: 38px;

    left: 5%;
  }

  .glow-orb {
    width: 260px;
    height: 260px;
  }

  h1 {
    letter-spacing: -2px;
  }

  .intro-line {
    line-height: 1.6;
  }

  .intro-description {
    font-size: 15px;

    line-height: 1.7;
  }

  .page-section {
    min-height: auto;

    padding: 110px 20px;

    display: block;
  }

  .section-number {
    margin-bottom: 25px;

    font-size: 75px;

    letter-spacing: -5px;
  }

  .page-section h2 {
    font-size: 42px;
  }

  .page-section p {
    font-size: 16px;

    line-height: 1.75;
  }

  .friends-section .section-content {
    padding: 25px;

    border-radius: 22px;
  }

  .friend-card {
    gap: 14px;

    padding: 20px;

    border-radius: 18px;
  }

  .friend-card h3 {
    font-size: 22px;
  }

  .friend-card p {
    font-size: 15px;
  }

  .support-card {
    width: 100%;

    max-width: 350px;

    padding: 16px;

    margin-top: 28px;

    border-radius: 22px;
  }

  .support-qr {
    width: min(100%, 290px);

    border-radius: 14px;
  }

  .audio-controls {
    right: 12px;
    bottom: 12px;
  }

  .scroll-hint {
    bottom: 22px;
  }
}

/* =========================================
   REDUCED MOTION
   ========================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    scroll-behavior: auto !important;
  }

}
