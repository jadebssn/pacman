'use strict';

console.log('it works!');

const pacman = document.querySelector('.entity--pac');


// document.addEventListener('click', () => {
//     console.log('click');
//     pacman.classList.toggle('pacboy--close-mouse')

// })

document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight') {
    pacman.classList.toggle('pacboy--close-mouse')
  }
});

// const xpos = document.querySelector('pacboy--close-mouse');
// xpos = 0;
document.querySelector('pacboy--close-mouse').style.left = "85px";


// document.addEventListener('keydown', (event) => {
//   if(event.code === 'ArrowRight') {
//     console.log(xpos + 85 + 'px')
//   }
// });
