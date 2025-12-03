// Din JavaScript här

console.log("Dag 12 - Dansande jultomte är redo! 🎄");

const santa = document.getElementById("dancingSanta");
const danceToggle = document.getElementById("danceToggle");

let isDancing = false;

function updateDanceState() {
  if (!santa || !danceToggle) return;

  if (isDancing) {
    santa.classList.add("is-dancing");
    danceToggle.textContent = "Pausa dansen 🧊";
  } else {
    santa.classList.remove("is-dancing");
    danceToggle.textContent = "Starta dansen 💃";
  }
}

if (santa && danceToggle) {
  // Starta/stoppa grunddansen
  danceToggle.addEventListener("click", () => {
    isDancing = !isDancing;
    updateDanceState();
  });

  // Extra snurr när man klickar på tomten
  santa.addEventListener("click", () => {
    santa.classList.add("spin-once");

    const handleEnd = () => {
      santa.classList.remove("spin-once");
      santa.removeEventListener("animationend", handleEnd);
    };

    santa.addEventListener("animationend", handleEnd);
  });
}
