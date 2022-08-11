const pressedKeys = []
const secretCode = 'weikai'

window.addEventListener('keyup', e => {
  pressedKeys.push(e.key)
  console.log(pressedKeys)
  pressedKeys.splice(-pressedKeys.length, pressedKeys.length - secretCode.length)
  console.log(pressedKeys.join(''))
  if (pressedKeys.join('') === secretCode) {
    console.log('BINGO')
  }
})