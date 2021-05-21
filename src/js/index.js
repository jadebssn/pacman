'use strict';

console.log('it works!');
const pacman = new Pacman(0,0)
pacman.mount()

// const pacman = document.querySelector('.entity--pac');


// document.addEventListener('click', () => {
//     console.log('click');
//     pacman.classList.toggle('pacboy--close-mouse')

// })
// pacman.style.left = '0px';
let currentPositionX = 0;
document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight') {
    pacman.moveRight()  
  } else if (event.code === 'ArrowLeft') {
pacman.moveLeft()
  }
pacman.update()
});

