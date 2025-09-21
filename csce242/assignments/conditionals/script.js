const tab1 = document.querySelector('.tab');
const tab2 = document.querySelector('.tab2');
const planting = document.getElementById('planting');
const clock = document.getElementById('clock');

const showExercise1 = (e) => {
    e.preventDefault();
    planting.style.display = 'block';
    clock.style.display = 'none';
}

const showExercise2 = (e) => {
    e.preventDefault();
    planting.style.display = 'none';
    clock.style.display = 'block';
}

tab1.addEventListener('click', showExercise1);
tab2.addEventListener('click', showExercise2); 

const days = document.getElementById('days');
const daysMsg = document.getElementById('days-msg');
const statusMsg = document.getElementById('status-msg');
const plantImg = document.getElementById('plant-img');

const updatePlant = () => {
    const d = +days.value;
    daysMsg.textContent = `Its been ${d} days since watering your plant`;
    if (d <= 2){
        statusMsg.textContent = 'Your plant is healthy and happy';
        plantImg.src = 'images/oneC.png';
    } else if (d <= 5){
        statusMsg.textContent = 'Your plant needs watering';
        plantImg.src = 'images/twoC.png';
    } else if (d <= 9){
        statusMsg.textContent = 'Leaves are dropping the color is changing, water soon';
        plantImg.src = 'images/threeC.png';
    } else {
        statusMsg.textContent = 'Sorry, your plant is no longer with us';
        plantImg.src = 'images/fourC.png';
    }
}

days.addEventListener('input', updatePlant);
updatePlant();

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? ' pm' : 'am';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = `${hours}:${minutes}${ampm}`;
    document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);