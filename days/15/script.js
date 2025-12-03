// Din JavaScript här

console.log('Dag 15 - Redo att skapa något fantastiskt! 🎄');

// Exempel: Lägg till interaktivitet här
let shakePower = 0;
let lastX = null;

const globe = document.getElementById("globe");
const message = document.getElementById("message");

document.addEventListener("mousemove", (e) => {
    if (lastX === null) {
        lastX = e.clientX;
        return;
    }

    const delta = Math.abs(e.clientX - lastX);

    if (delta > 20) {
        shakePower += delta;
        globe.classList.add("shake");
    }

    if (shakePower > 600) {
        revealMessage();
    }

    lastX = e.clientX;
});

function revealMessage() {
    globe.classList.remove("shake");
    message.classList.remove("hidden");
    message.classList.add("show");
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = (3 + Math.random() * 5) + "s";
    snowflake.style.fontSize = (10 + Math.random() * 20) + "px";

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflake, 200);