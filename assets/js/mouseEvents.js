const mouseX = document.querySelector('#mouseX')
const mouseY = document.querySelector('#mouseY')

const afficherPos = (event) => {
    mouseX.textContent = `X: ${event.x}`
    mouseY.textContent = `Y: ${event.y}`
}


document.addEventListener('mousemove', afficherPos)