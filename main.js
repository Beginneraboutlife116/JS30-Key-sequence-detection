import circlePositionByMousemove from "./src/position.js"

const pressedKeys = []
const secretCode = 'weikai'
const circle = document.querySelector(".circle")
const dialog = document.querySelector('dialog')
const showIntro = document.querySelector('.show-intro')
const introClose = document.querySelector('.intro__close')

dialog.showModal()

window.addEventListener('keyup', e => {
  if (dialog.open) return
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

dialog.addEventListener('cancel', () => {
  showIntro.classList.add('show-up')
})

introClose.addEventListener('click', () => {
  showIntro.classList.add('show-up')
})

showIntro.addEventListener('click', () => {
  dialog.showModal()
})