// Din JavaScript här

console.log('Dag 23 - Redo att skapa något fantastiskt! 🎄');

// Exempel: Lägg till interaktivitet här
// Skapa canvas-elementet i main
const main = document.querySelector('main');
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
canvas.style.display = 'block';
canvas.style.margin = '0 auto';
main.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Ladda under construction gif
const underConstructionImg = new Image();
underConstructionImg.src = 'https://andsju.github.io/images/under-construction.gif';

// Skapa snöflingor
const snowflakes = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5
}));

// Tomtebloss parametrar
let sparklerTime = 0;
const sparklerDuration = 10; // sekunder
const sparkler = {
    x: canvas.width / 2,
    y: canvas.height / 2 + 100,
    length: 120,
    sparks: []
};

// Spår av människa
const steps = [];
const stepInterval = sparklerDuration / 5;
for (let i = 0; i < 5; i++) {
    steps.push({
        x: canvas.width / 2 - 60 + i * 30,
        y: canvas.height / 2 + 180 + i * 10,
        time: i * stepInterval
    });
}

// Jingle Bells - enkel melodi med Web Audio API
function playJingleBells() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [
        { freq: 392, dur: 0.3 }, // G
        { freq: 392, dur: 0.3 },
        { freq: 392, dur: 0.6 },
        { freq: 392, dur: 0.3 },
        { freq: 392, dur: 0.3 },
        { freq: 392, dur: 0.6 },
        { freq: 392, dur: 0.3 },
        { freq: 494, dur: 0.3 }, // B
        { freq: 261, dur: 0.3 }, // C
        { freq: 329, dur: 0.3 }, // E
        { freq: 392, dur: 0.6 }
    ];
    let t = ctx.currentTime;
    notes.forEach(note => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = note.freq;
        osc.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + note.dur);
        t += note.dur + 0.05;
    });
}

// Rita snöbakgrund
function drawSnow() {
    ctx.fillStyle = '#1a2233';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        flake.y += flake.speed;
        if (flake.y > canvas.height) flake.y = 0;
    });
}

// Rita tomtebloss
function drawSparkler(progress) {
    // Rita pinne
    ctx.save();
    ctx.strokeStyle = '#bfa76f';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(sparkler.x, sparkler.y);
    ctx.lineTo(sparkler.x, sparkler.y - sparkler.length);
    ctx.stroke();
    ctx.restore();

    // Rita eld
    const fireY = sparkler.y - sparkler.length * progress;
    ctx.save();
    ctx.beginPath();
    ctx.arc(sparkler.x, fireY, 18, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();

    // Rita gnistor
    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 30;
        ctx.beginPath();
        ctx.arc(
            sparkler.x + Math.cos(angle) * dist,
            fireY + Math.sin(angle) * dist,
            2,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
}

// Rita steg
function drawSteps(currentTime) {
    steps.forEach(step => {
        if (currentTime >= step.time) {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(step.x, step.y, 12, 20, Math.PI / 8, 0, Math.PI * 2);
            ctx.fillStyle = '#ccc';
            ctx.fill();
            ctx.restore();
        }
    });
}

// Rita text
function drawText() {
    ctx.save();
    ctx.font = 'bold 64px "Segoe Script", "Comic Sans MS", cursive';
    ctx.fillStyle = '#e53935';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 8;
    ctx.fillText('Lilljulafton', canvas.width / 2, 100);
    ctx.restore();
}

// Animation loop
function animate() {
    const elapsed = (Date.now() - startTime) / 1000;
    drawSnow();
    drawText();
    if (elapsed < sparklerDuration) {
        drawSparkler(elapsed / sparklerDuration);
        drawSteps(elapsed);
        requestAnimationFrame(animate);
    } else {
        // Visa under construction gif
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnow();
        ctx.drawImage(underConstructionImg, canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 200);
        ctx.font = 'bold 48px "Segoe Script", "Comic Sans MS", cursive';
        ctx.fillStyle = '#e53935';
        ctx.textAlign = 'center';
        ctx.fillText('Lilljulafton', canvas.width / 2, 100);
    }
}

const startTime = Date.now();
playJingleBells();
animate();