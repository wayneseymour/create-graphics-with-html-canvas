var canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;

var context = canvas.getContext('2d');
// context.fillStyle = 'rgb(255, 192, 203)'; // rgb
// context.fillStyle = 'rgba(255, 192, 203, 1)'; // rgba
context.fillStyle = '#ffc0cb'; // hex
context.fillRect(0, 0, canvas.width, canvas.height);
