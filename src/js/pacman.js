class Pacman {
    constructor (xPos, yPos){
    this.xPos = xPos
    this.yPos = yPos
    

    }
render() {
    let pacman = document.createElement('div')
    pacman.className = 'entity entity--pac pacboy-active-light'
    

return pacman
}

mount() {
this.element = this.render()
document.querySelector('div.container').appendChild(this.element)
this.update()
}
moveRight() {
    console.log('movingright')
    
   
    this.xPos++
    
    
}
moveLeft() {
    
   
    this.xPos--
      
}
update() {
    this.element.classList.toggle('pacboy--close-mouse')
    console.log('triggered update')
    this.element.style.left = `${this.xPos * 85}px`;
}
}
//  pacman.style.left = '0px';
// // let currentPositionX = 0;
// // document.addEventListener('keydown', (event) => {
// //   if(event.code === 'ArrowRight') {
// //     pacman.classList.toggle('pacboy--close-mouse')
   
// //     currentPositionX++
// //       pacman.style.left = `${currentPositionX * 85}px`;
     
// //   }
// // });