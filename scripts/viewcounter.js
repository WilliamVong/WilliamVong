const { createCanvas } = require('canvas')

function viewCounter(count = 0, cv = { width: 100, height: 20 }, color = 'red') {
	let canvas = createCanvas(cv.width, cv.height);
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.globalAlpha = 0.3;
	ctx.beginPath();
	ctx.arc(1 + cv.height / 2, cv.height / 2, cv.height / 2 - 2, 0, Math.PI * 2);
	ctx.fill();
	// Convert count to string and pad it so it has 8 digits
	count = count.toString().padStart(8, '0');
	ctx.globalAlpha = 1;
	ctx.fillStyle = color;
	ctx.font = '16px Arial';
	ctx.fillText(count, cv.height + 5 - 1, cv.height - 5 + 1);
	return canvas;
}

module.exports = viewCounter;