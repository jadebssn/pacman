'use strict';

console.log('it works!');

const pacman = document.querySelector('.entity--pac');


// document.addEventListener('click', () => {
//     console.log('click');
//     pacman.classList.toggle('pacboy--close-mouse')

// })
pacman.style.left = '0px';
let currentPositionX = 0;
document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight') {
    pacman.classList.toggle('pacboy--close-mouse')
   
    currentPositionX++
     pacman.style.left = `${currentPositionX * 85}px`;
     
  }
});


// const xpos = document.querySelector('pacboy--close-mouse');
// xpos = 0;



// document.addEventListener('keydown', (event) => {
//   if(event.code === 'ArrowRight') {
//     console.log(xpos + 85 + 'px')
//   }
// });
