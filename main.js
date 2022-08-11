import circlePositionByMousemove from "./src/position.js"

const pressedKeys = []
const secretCode = 'weikai'
const circle = document.querySelector(".circle")

window.addEventListener('keyup', e => {
  pressedKeys.push(e.key)
  pressedKeys.splice(-pressedKeys.length, pressedKeys.length - secretCode.length)
  if (pressedKeys.join('') === secretCode) {
    console.log('BINGO')
  }
})

window.addEventListener('mousemove', (event) => {
  circlePositionByMousemove(event, circle)
})