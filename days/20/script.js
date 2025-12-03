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

// Håll koll på knappens skala
let currentScale = 1.0;

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
    // Krympa knappen med 10%
    currentScale *= 0.9;
    button.style.transform = `scale(${currentScale})`;
    
    // Flytta knappen
    moveButton();
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
