// Dag 11 - Christmas Card Maker
console.log('Dag 11 - Julkortsmakare! 🎄');

// Get elements
const greetingInput = document.getElementById('greeting');
const messageInput = document.getElementById('message');
const senderInput = document.getElementById('sender');
const cardGreeting = document.getElementById('cardGreeting');
const cardMessage = document.getElementById('cardMessage');
const cardSender = document.getElementById('cardSender');
const card = document.getElementById('christmasCard');
const decorations = document.getElementById('decorations');
const createBtn = document.querySelector('.create-btn');
const modal = document.getElementById('successModal');
const closeModalBtn = document.querySelector('.close-modal');

// Design buttons
const designBtns = document.querySelectorAll('.design-btn');
const colorBtns = document.querySelectorAll('.color-btn');

let currentDesign = 'snowflakes';
let currentColor = 'red';

// Update card in real-time
greetingInput.addEventListener('input', (e) => {
    cardGreeting.textContent = e.target.value || 'God Jul!';
});

messageInput.addEventListener('input', (e) => {
    cardMessage.textContent = e.target.value || 'Önskar dig en riktigt fin jul och ett gott nytt år!';
});

senderInput.addEventListener('input', (e) => {
    cardSender.textContent = e.target.value ? `- ${e.target.value}` : '- Ditt namn';
});

// Design selection
designBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        designBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDesign = btn.dataset.design;
        updateDesign();
    });
});

// Color selection
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentColor = btn.dataset.color;
        card.className = `card ${currentColor}`;
    });
});

// Update decorations based on design
function updateDesign() {
    decorations.innerHTML = '';
    
    switch(currentDesign) {
        case 'snowflakes':
            createSnowflakes();
            break;
        case 'tree':
            createTrees();
            break;
        case 'santa':
            createSantas();
            break;
        case 'gifts':
            createGifts();
            break;
    }
}

function createSnowflakes() {
    const snowflakeCount = 15;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'decoration snowflake';
        snowflake.textContent = '❄️';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `${Math.random() * -100}px`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
        decorations.appendChild(snowflake);
    }
}

function createTrees() {
    const treeCount = 8;
    for (let i = 0; i < treeCount; i++) {
        const tree = document.createElement('div');
        tree.className = 'decoration';
        tree.textContent = '🎄';
        tree.style.left = `${Math.random() * 90}%`;
        tree.style.top = `${Math.random() * 90}%`;
        tree.style.animationDelay = `${Math.random() * 3}s`;
        tree.style.opacity = '0.6';
        decorations.appendChild(tree);
    }
}

function createSantas() {
    const santaCount = 6;
    const santas = ['🎅', '🤶'];
    for (let i = 0; i < santaCount; i++) {
        const santa = document.createElement('div');
        santa.className = 'decoration';
        santa.textContent = santas[Math.floor(Math.random() * santas.length)];
        santa.style.left = `${Math.random() * 90}%`;
        santa.style.top = `${Math.random() * 90}%`;
        santa.style.animationDelay = `${Math.random() * 3}s`;
        santa.style.opacity = '0.5';
        decorations.appendChild(santa);
    }
}

function createGifts() {
    const giftCount = 10;
    const gifts = ['🎁', '🎀'];
    for (let i = 0; i < giftCount; i++) {
        const gift = document.createElement('div');
        gift.className = 'decoration';
        gift.textContent = gifts[Math.floor(Math.random() * gifts.length)];
        gift.style.left = `${Math.random() * 90}%`;
        gift.style.top = `${Math.random() * 90}%`;
        gift.style.animationDelay = `${Math.random() * 3}s`;
        gift.style.opacity = '0.6';
        decorations.appendChild(gift);
    }
}

// Create button - show success modal
createBtn.addEventListener('click', () => {
    // Add a nice animation to the card
    card.style.transform = 'scale(1.05)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 300);
    
    // Show success modal
    modal.classList.add('show');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Initialize with snowflakes
updateDesign();
