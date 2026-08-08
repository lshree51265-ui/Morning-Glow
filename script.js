/* ===========================================================
   GOOD MORNING, SHREE — script.js
   Fully ambient. Nothing here needs daily input.
=========================================================== */

/* ---------- greeting + date ---------- */
(function greetAndDate(){
  const greetEl = document.getElementById("greeting");
  const dateEl = document.getElementById("fullDate");
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 5)       greeting = "Rest peacefully, Shree";
  else if (hour < 12)  greeting = "Good morning, Shree";
  else if (hour < 17)  greeting = "Good afternoon, Shree";
  else                 greeting = "Good evening, Shree";

  greetEl.textContent = greeting;

  dateEl.textContent = now.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric"
  });
})();

/* ---------- daily truth (changes once a day, no input needed) ---------- */
(function dailyTruth(){
  const truths = [
    "Everything is working out for me.",
    "I am worthy of the life I am building.",
    "Money, love and peace flow to me easily.",
    "My family is united, protected, and blessed by a higher power.",
    "My business grows because I show up with intention.",
    "I am allowed to rest without guilt.",
    "I trust the timing of my life.",
    "I radiate the calm I want to receive.",
    "Today, I choose ease over struggle.",
    "I am becoming more myself every single day."
  ];
  const dayIndex = Math.floor(Date.now() / 86400000); // stable across the whole day
  document.getElementById("dailyTruth").textContent = truths[dayIndex % truths.length];
})();

/* ---------- breathing cue, synced to the orb's 12s cycle ---------- */
(function breathingCue(){
  const label = document.getElementById("breatheLabel");
  const phases = ["breathe in", "hold", "breathe out"];
  let i = 0;
  label.textContent = phases[0];
  setInterval(() => {
    i = (i + 1) % phases.length;
    label.textContent = phases[i];
  }, 4000);
})();

/* ---------- scroll cue fades once you start reading ---------- */
(function scrollCue(){
  const cue = document.querySelector(".scroll-cue");
  if (!cue) return;
  window.addEventListener("scroll", () => {
    cue.style.opacity = window.scrollY > 80 ? "0" : "1";
  });
})();

/* ---------- gentle reveal on scroll ---------- */
(function revealOnScroll(){
  const targets = document.querySelectorAll(".pillar-inner, .vision-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.25 });
  targets.forEach(t => observer.observe(t));
})();

/* ---------- ambient floating light motes ---------- */
(function motes(){
  const container = document.getElementById("motes");
  if (!container) return;
  const count = window.innerWidth < 700 ? 18 : 34;
  for (let i = 0; i < count; i++){
    const m = document.createElement("div");
    m.className = "mote";
    const size = 4 + Math.random() * 8;
    m.style.width = size + "px";
    m.style.height = size + "px";
    m.style.left = Math.random() * 100 + "%";
    m.style.top = 40 + Math.random() * 60 + "%";
    m.style.animationDuration = 14 + Math.random() * 16 + "s";
    m.style.animationDelay = Math.random() * 14 + "s";
    container.appendChild(m);
  }
})();

/* ---------- sky deepens slightly as you scroll toward evening-in-miniature ---------- */
(function skyShift(){
  const sky = document.querySelector(".sky");
  if (!sky) return;
  window.addEventListener("scroll", () => {
    const progress = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
    sky.style.filter = `saturate(${1 + progress * 0.15}) brightness(${1 - progress * 0.04})`;
  });
})();
