import circlePositionByMousemove from "./src/position.js"

const pressedKeys = []
const secretCode = 'weikai'
const circle = document.querySelector(".circle")

window.addEventListener('keyup', e => {
  pressedKeys.push(e.key)
  pressedKeys.splice(-pressedKeys.length, pressedKeys.length - secretCode.length)
  if (pressedKeys.join('') === secretCode) {
    circle.classList.add('pulse')
  }
})

window.addEventListener('mousemove', (event) => {
  circlePositionByMousemove(event, circle)
})

window.addEventListener('animationend', () => {
  circle.classList.remove('pulse')
})