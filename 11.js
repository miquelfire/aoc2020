'use strict';
const deepCopy = require('./utils').deepCopy;

/**
 * 
 * @param {string[][]} prevArea 
 * @param {string[][]} curArea 
 */
function doStep(prevArea, curArea) {
	for(let i = 0; i < curArea.length; i++) {
		for (let j = 0; j < curArea[i].length; j++) {
			let seatsFilled = 0;
			for (let x = -1; x < 2; x++) {
				for (let y = -1; y < 2; y++) {
					if (prevArea[i + x] && prevArea[i + x][j + y] == '#') {
						seatsFilled++;
					}
				}
			}
			switch (prevArea[i][j]) {
			case 'L': {
				// Empty seat, check if all eight cells are empty
				if (seatsFilled == 0) {
					curArea[i][j] = '#';
				}
				break;
			}
			case '#': {
				// Occupied seat, see if there's four other cells like us
				if (seatsFilled > 4) {
					curArea[i][j] = 'L';
				}
				break;
			}
			}
		}
	}

	return curArea;
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e=> e.split(''));
	let curArea = deepCopy(data);
	let prevArea = [];
	while (JSON.stringify(curArea) != JSON.stringify(prevArea)) {
		prevArea = deepCopy(curArea);
		curArea = doStep(prevArea, curArea);
	}
	curArea = JSON.stringify(curArea).split('').filter(e=>e == '#');
	return curArea.length;
};

/**
 * 
 * @param {string[][]} prevArea 
 * @param {string[][]} curArea 
 */
function doStep2(prevArea, curArea) {
	const maxX = Math.max(curArea.length, curArea[0].length);
	const dirUp = Symbol('up');
	const dirDown = Symbol('down');
	const dirLeft = Symbol('left');
	const dirRight = Symbol('right');
	const dirUpLeft = Symbol('up left');
	const dirUpRight = Symbol('up right');
	const dirDownLeft = Symbol('down left');
	const dirDownRight = Symbol('down right');
	for(let i = 0; i < curArea.length; i++) {
		for (let j = 0; j < curArea[i].length; j++) {
			let seatsFilled = 0;
			let dirChecking = {};
			dirChecking[dirUp] = true;
			dirChecking[dirDown] = true;
			dirChecking[dirLeft] = true;
			dirChecking[dirRight] = true;
			dirChecking[dirUpLeft] = true;
			dirChecking[dirUpRight] = true;
			dirChecking[dirDownLeft] = true;
			dirChecking[dirDownRight] = true;

			for (let x = 1; x < maxX; x++) {
				// Check if we're on the edges
				if (i - x < 0) {
					dirChecking[dirUp] = false;
					dirChecking[dirUpLeft] = false;
					dirChecking[dirUpRight] = false;
				}
				if (j - x < 0) {
					dirChecking[dirLeft] = false;
					dirChecking[dirUpLeft] = false;
					dirChecking[dirDownLeft] = false;
				}
				if (i + x >= curArea.length) {
					dirChecking[dirDown] = false;
					dirChecking[dirDownLeft] = false;
					dirChecking[dirDownRight] = false;
				}
				if (j + x >= curArea[i].length) {
					dirChecking[dirRight] = false;
					dirChecking[dirUpRight] = false;
					dirChecking[dirDownRight] = false;
				}

				// If we're still searching
				if (dirChecking[dirUp]) {
					if (prevArea[i - x][j] == '#') {
						seatsFilled++;
						dirChecking[dirUp] = false;
					}
					if (prevArea[i - x][j] == 'L') {
						dirChecking[dirUp] = false;
					}
				}
				if (dirChecking[dirUpLeft]) {
					if (prevArea[i - x][j - x] == '#') {
						seatsFilled++;
						dirChecking[dirUpLeft] = false;
					}
					if (prevArea[i - x][j - x] == 'L') {
						dirChecking[dirUpLeft] = false;
					}
				}
				if (dirChecking[dirUpRight]) {
					if (prevArea[i - x][j + x] == '#') {
						seatsFilled++;
						dirChecking[dirUpRight] = false;
					}
					if (prevArea[i - x][j + x] == 'L') {
						dirChecking[dirUpRight] = false;
					}
				}
				if (dirChecking[dirDown]) {
					if (prevArea[i + x][j] == '#') {
						seatsFilled++;
						dirChecking[dirDown] = false;
					}
					if (prevArea[i + x][j] == 'L') {
						dirChecking[dirDown] = false;
					}
				}
				if (dirChecking[dirDownLeft]) {
					if (prevArea[i + x][j - x] == '#') {
						seatsFilled++;
						dirChecking[dirDownLeft] = false;
					}
					if (prevArea[i + x][j - x] == 'L') {
						dirChecking[dirDownLeft] = false;
					}
				}
				if (dirChecking[dirDownRight]) {
					if (prevArea[i + x][j + x] == '#') {
						seatsFilled++;
						dirChecking[dirDownRight] = false;
					}
					if (prevArea[i + x][j + x] == 'L') {
						dirChecking[dirDownRight] = false;
					}
				}
				if (dirChecking[dirLeft]) {
					if (prevArea[i][j - x] == '#') {
						seatsFilled++;
						dirChecking[dirLeft] = false;
					}
					if (prevArea[i][j - x] == 'L') {
						dirChecking[dirLeft] = false;
					}
				}
				if (dirChecking[dirRight]) {
					if (prevArea[i][j + x] == '#') {
						seatsFilled++;
						dirChecking[dirRight] = false;
					}
					if (prevArea[i][j + x] == 'L') {
						dirChecking[dirRight] = false;
					}
				}
			}

			switch (prevArea[i][j]) {
			case 'L': {
				// Empty seat, check if all eight cells are empty
				if (seatsFilled == 0) {
					curArea[i][j] = '#';
				}
				break;
			}
			case '#': {
				// Occupied seat, see if there's four other cells like us
				if (seatsFilled > 4) {
					curArea[i][j] = 'L';
				}
				break;
			}
			}
		}
	}

	return curArea;
}

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e=> e.split(''));
	let curArea = deepCopy(data);
	let prevArea = [];
	while (JSON.stringify(curArea) != JSON.stringify(prevArea)) {
		prevArea = deepCopy(curArea);
		curArea = doStep2(prevArea, curArea);
	}
	curArea = JSON.stringify(curArea).split('').filter(e=>e == '#');
	return curArea.length;
};

module.exports = {
	part1,
	part2
};
