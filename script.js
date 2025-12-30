// Fade on scroll
const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
fades.forEach(fade => observer.observe(fade));

// Music
function playMusic() {
  document.getElementById("music").play();
}

// Countdown
const weddingDate = new Date("June 7, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText =
    Math.floor((distance / 1000) % 60);
}, 1000);