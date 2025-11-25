// Christmas icons for each day
const christmasIcons = [
    '🎁', '⛄', '🎅', '🔔', '⭐', '🕯️',
    '🎄', '🦌', '🎀', '🍪', '☃️', '🎵',
    '🌟', '🧦', '🎊', '❄️', '🍬', '🎺',
    '🎪', '🎨', '🎭', '🎸', '🎮', '🎯'
];

// Generate calendar doors
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar');
    
    for (let day = 1; day <= 24; day++) {
        const door = document.createElement('div');
        door.className = 'calendar-door';
        door.setAttribute('data-day', day);
        
        const number = document.createElement('div');
        number.className = 'door-number';
        number.textContent = day;
        
        const icon = document.createElement('div');
        icon.className = 'door-icon';
        icon.textContent = christmasIcons[day - 1];
        
        door.appendChild(number);
        door.appendChild(icon);
        
        // Add click event listener
        door.addEventListener('click', () => openDoor(day, door));
        
        calendarContainer.appendChild(door);
    }
}

// Open door animation and navigation
function openDoor(day, doorElement) {
    // Add opening animation class
    doorElement.classList.add('opening');
    
    // Navigate to day page after animation
    setTimeout(() => {
        window.location.href = `days/${day}/index.html`;
    }, 800);
}

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', generateCalendar);
