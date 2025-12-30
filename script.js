// MUSIK
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🎵";
  }
  playing = !playing;
};

// COUNTDOWN
const targetDate = new Date("June 7, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000*60*60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);
