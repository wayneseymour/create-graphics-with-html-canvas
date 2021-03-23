const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const coords = document.querySelector('.display-coords')

context.fillStyle = 'pink'
context.fillRect(0, 0, canvas.width, canvas.height)

const getCoords = event => {
  const x = event.clientX;
  const y = event.clientY;

  coords.textContent = `${x}, ${y}`
}

canvas.addEventListener('click', getCoords)
