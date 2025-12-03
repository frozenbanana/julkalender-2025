console.log('Dag 20 - Slumpmässig dag-öppnare! 🎄');

// Array med alla tillgängliga dagar (1-24)
const availableDays = Array.from({ length: 24 }, (_, i) => i + 1);

// Funktion för att få en slumpmässig dag (exklusive nuvarande dag 20)
function getRandomDay() {
    const otherDays = availableDays.filter(day => day !== 20);
    const randomIndex = Math.floor(Math.random() * otherDays.length);
    return otherDays[randomIndex];
}

// Hämta knappen
const button = document.getElementById('randomDayButton');
const santaScene = document.getElementById('santaScene');

// Håll koll på knappens skala och om det är första hovern
let currentScale = 1.0;
let firstHover = true;
let santaSceneTriggered = false;

// Funktion för att flytta knappen till en slumpmässig position
function moveButton() {
    const container = document.querySelector('main');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Beräkna max förflyttning (så knappen stannar inom container)
    const maxX = containerRect.width - buttonRect.width - 40;
    const maxY = containerRect.height - buttonRect.height - 100;
    
    // Slumpmässig position (undvik toppen där welcome-meddelandet är)
    const randomX = Math.random() * maxX;
    const randomY = 150 + Math.random() * (maxY - 150); // Börja från 150px nedåt
    
    // Flytta knappen
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transition = 'all 0.3s ease';
}

// Flytta knappen när musen kommer nära och krympa den 10%
button.addEventListener('mouseenter', () => {
    // Om det är första gången, gör allt svart och ta bort UI
    if (firstHover) {
        // Gör allt svart och ta bort UI
        document.body.style.background = 'black';
        document.querySelector('.container').style.animation = 'fallOut 1s ease-in forwards';
        
        firstHover = false;
        return; // Avsluta denna första hover utan att flytta
    }
    
    // Krympa knappen med 10%
    currentScale *= 0.9;
    
    // Flytta knappen till en slumpmässig position
    const randomX = Math.random() * (window.innerWidth - 300);
    const randomY = Math.random() * (window.innerHeight - 150);
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transform = `scale(${currentScale})`;
    button.style.transition = 'all 0.3s ease';
    
<<<<<<< HEAD
    // Kontrollera om knappen är mindre än 80px bred
    const buttonWidth = button.offsetWidth * currentScale;
    if (buttonWidth < 80 && !santaSceneTriggered) {
=======
    // Kontrollera om knappen är mindre än 100px bred
    const buttonWidth = button.offsetWidth * currentScale;
    if (buttonWidth < 100 && !santaSceneTriggered) {
>>>>>>> 3933bf31ea2c8b28fe038ca942609696c4ab29c2
        santaSceneTriggered = true;
        triggerSantaScene();
    }
});

// Lägg till klickhändelse
button.addEventListener('click', () => {
    const randomDay = getRandomDay();
    console.log(`Navigerar till dag ${randomDay}...`);
    
    // Lägg till en liten animation innan navigering
    button.classList.add('clicking');
    
    setTimeout(() => {
        window.location.href = `../${randomDay}/index.html`;
    }, 300);
});

// Funktion för att trigga tomte-scenen
function triggerSantaScene() {
    // Ändra bakgrund till midnattsblå
    document.body.style.background = 'linear-gradient(to bottom, #0a1128 0%, #1a2456 50%, #2d3561 100%)';
    document.body.style.transition = 'background 2s ease';
    
    // Visa tomte-scenen
    santaScene.classList.remove('hidden');
    
    console.log('🎅 Ho Ho Ho! Tomten har kommit!');
}
