const { createCanvas } = require('canvas')

function createRandomDots(dots = { min: 50, max: 100 }, radius = { min: 5, max: 15 }, cv = { width: 50, height: 50 }) {
		const { min: minDots, max: maxDots } = dots;
		const { min: minRadius, max: maxRadius } = radius;
		const { width, height } = cv;
		const genDots = [];
		const dotCount = Math.floor(Math.random() * (maxDots - minDots + 1)) + minDots;
		for (let i = 0; i < dotCount; i++) {
			  let radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
				const dot = {
						x: (radius * 2) + Math.floor(Math.random() * (width - (radius * 4))),
						y: (radius * 2) + Math.floor(Math.random() * (height - (radius * 4))),
						radius: Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius
				};
				genDots.push(dot);
		}
		return genDots;
}

function drawRandomDots(dots = { min: 50, max: 100 }, radius = { min: 5, max: 15 }, cv = { width: 50, height: 50 }, color = 'red') {
		let canvas = createCanvas(cv.width, cv.height);
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = color;
		const genDots = createRandomDots(dots, radius, cv);
		ctx.globalAlpha = 0.3;
		genDots.forEach(dot => {
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
				ctx.fill();
		});
		return canvas;
}

module.exports = drawRandomDots;


// test
const fs = require('fs');
const data = drawRandomDots({ min: 7, max: 10 }, { min: 3, max: 10 }, { width: 75, height: 75 }, 'red').toDataURL();
fs.writeFileSync('dots.png', data.replace(/^data:image\/png;base64,/, ''), 'base64');