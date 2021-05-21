'use strict';

console.log('it works!');

const pacman = document.querySelector('.entity--pac');


document.addEventListener('click', () => {
    console.log('click');
    pacman.classList.toggle('pacboy--close-mouse')

})
