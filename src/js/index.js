'use strict';

// console.log('it works!');

const pacman = document.querySelector('.entity entity--pac pacboy-active-light');
console.log(pacman);
document.addEventListener('click', () => {
const closed = document.querySelector('.entity entity--pac pacboy-active-light');
closed.className = ''
})