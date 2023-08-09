const express = require('express');
const drawRandomDots = require('./randomdots');
const viewCounter = require('./viewcounter');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

const pathToCountFile = __dirname + '/n';

app.get('/randomdots', (req, res) => {
	let canvas = drawRandomDots({ min: 7, max: 10 }, { min: 3, max: 10 }, { width: 75, height: 75 }, 'red');
	res.set('Content-Type', 'image/png');
	res.set('Cache-Control', 'no-cache');
	res.send(canvas.toBuffer());
});

app.get('/viewcount', (req, res) => {
	let count = parseInt(fs.readFileSync(pathToCountFile, 'utf8')) + 1;
	fs.writeFileSync(pathToCountFile, count.toString(), 'utf8');
	let canvas = viewCounter(count, { width: 100, height: 20 }, 'red');
	res.set('Content-Type', 'image/png');
	res.set('Cache-Control', 'no-cache');
	res.send(canvas.toBuffer());
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});