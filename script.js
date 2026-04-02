const weddingDate = new Date("2026-08-20T18:00:00").getTime();
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "Этот день уже наступил";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}

updateCountdown();
setInterval(updateCountdown, 1000);