var context = document.querySelector('#canvas').getContext('2d');
context.beginPath();
context.arc(50, 50, 20, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.fill();
context.closePath();
// context.stroke();
// 1 radian = 57.2957795 degrees
// radians = (Math.PI / 180) * degrees;
