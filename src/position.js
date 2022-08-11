function circlePositionByMousemove(event, element) {
  let posX = event.x
  let posY = event.y
  
  element.style.setProperty('--left', `${posX}px`)
  element.style.setProperty('--top', `${posY}px`)
}

export default circlePositionByMousemove