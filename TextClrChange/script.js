/**
 * Write your challenge solution here
 */
const mainHeading = document.getElementById('mainHeading');

function changeColor(color) {
    mainHeading.style.color = color;
}
document
    .getElementById('redButton')
    .addEventListener('click', () => changeColor('Red'));
document
    .getElementById('greenButton')
    .addEventListener('click', () => changeColor('green'));
document
    .getElementById('blueButton')
    .addEventListener('click', () => changeColor('blue'));
document
    .getElementById('purpleButton')
    .addEventListener('click', () => changeColor('Purple'));
document
    .getElementById('resetButton')
    .addEventListener('click', () => changeColor(''));
