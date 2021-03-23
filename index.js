var context = document.querySelector('#canvas').getContext('2d');
// context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);
// 1 radian = 57.2957795 degrees
// radians = (Math.PI / 180) * degrees;

// context.beginPath();
// context.arc(100, 70, 50, Math.PI / 180 * -90, 0);
// context.fill()
// context.closePath();









let i = 0
const loop = () => {
  if (i++ < Math.PI * 2) {
    drawPurpleCircle(i)
  } else {
    i = 0;
    context.clearRect(0, 0, 500, 500)
    setTimeout(loop, 400)
  }
}
loop()
function drawPurpleCircle(x) {
  context.beginPath();
  context.arc(100, 70, 50, 0, x)
  context.fillStyle = 'rebeccaPurple'
  context.fill()
  context.closePath()
  setTimeout(loop, 400)
}







// context.arc(120, 20, 10, 0, Math.PI * 2);
// context.fillStyle = 'rebeccaPurple'
// context.fill();
// context.closePath();
//
// context.beginPath();
// context.arc(20, 120, 10, 0, Math.PI * 2);
// context.lineWidth = 10;
// context.strokeStyle = 'pink'
// context.stroke();
// context.closePath();
