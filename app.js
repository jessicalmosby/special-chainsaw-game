/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const img1 = document.getElementById('#img2');
const img2 = document.getElementById('#img2');
const img3 = document.getElementById('#img3');

const winsEL = document.getElementById('wins');
const lossesEL = document.getElementById('losses');
const totalEL = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetSaw();

    const sawLocation = Math.ceil(Math.random() * 3);
    console.log('sawLocation', sawLocation);

    if (sawLocation === 1) {
        wins++;
        img1.classList.add('reveal');
    } else if (sawLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});

/* Display Functions */
function resetSaw() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}

function displayResults() {
    winsEL.textContent = wins;
    lossesEL.textContent = total - wins;
    totalEL.textContent = total;
}
// (don't forget to call any display functions you want to run on page load!)
