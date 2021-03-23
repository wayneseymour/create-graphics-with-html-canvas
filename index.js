var context = document.querySelector('#canvas').getContext('2d');
// context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);
// 1 radian = 57.2957795 degrees
// radians = (Math.PI / 180) * degrees;

context.beginPath();
context.moveTo(100, 70); // move to this spot
context.lineTo(100, 20); // draw vertical line
context.arcTo(150, 20, 150, 70, 50)
context.lineTo(100, 70) // draw a horizontal line
context.fill()
context.closePath();



// let i = 0
// const loop = () => {
//   if (i++ < Math.PI * 2) {
//     drawPurpleCircle(i)
//   } else {
//     i = 0;
//     context.clearRect(0, 0, 500, 500)
//     setTimeout(loop, 400)
//   }
// }
// loop()
// function drawPurpleCircle(x) {
//   context.beginPath();
//   context.arc(100, 70, 50, 0, x)
//   context.fillStyle = 'rebeccaPurple'
//   context.fill()
//   context.closePath()
//   setTimeout(loop, 400)
// }
