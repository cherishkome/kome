const startDate = new Date("2026-05-12T02:00:00+01:00");

function updateTimer() {
  const now = Date.now();
  const elapsed = Math.max(0, now - startDate.getTime());

  const totalSeconds = Math.floor(elapsed / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent =
    String(days).padStart(3, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);

// ENVELOPE INTERACTION

const envelopeButton = document.getElementById("envelopeButton");
const letterContent = document.getElementById("letterContent");
const instruction = document.getElementById("envelopeInstruction");

envelopeButton.addEventListener("click", () => {
  if (envelopeButton.classList.contains("opened")) {
    return;
  }

  envelopeButton.classList.add("opened");
  envelopeButton.setAttribute("aria-expanded", "true");

  instruction.textContent = "[ SEAL BROKEN · MESSAGE DECLASSIFIED ]";

  setTimeout(() => {
    letterContent.hidden = false;

    letterContent.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 1000);
});