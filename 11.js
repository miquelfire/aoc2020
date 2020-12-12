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
	for(let i = 0; i < curArea.length; i++) {
		for (let j = 0; j < curArea[i].length; j++) {
			let seatsFilled = 0;
			
			// Looking down
			for (let x = i + 1; x < curArea.length; x++) {
				if (prevArea[x][j] == '#') {
					seatsFilled++;
					break;
				}
				if (prevArea[x][j] == 'L') {
					break;
				}
			}

			// Looking up
			for (let x = i - 1; x > -1; x--) {
				if (prevArea[x][j] == '#') {
					seatsFilled++;
					break;
				}
				if (prevArea[x][j] == 'L') {
					break;
				}
			}

			// Looking right
			for (let x = j + 1; x < curArea[i].length; x++) {
				if (prevArea[i][x] == '#') {
					seatsFilled++;
					break;
				}
				if (prevArea[i][x] == 'L') {
					break;
				}
			}

			// Looking left
			for (let x = j - 1; x > -1; x--) {
				if (prevArea[i][x] == '#') {
					seatsFilled++;
					break;
				}
				if (prevArea[i][x] == 'L') {
					break;
				}
			}

			// Looking down right
			// Looking down left
			// Looking up right
			// Looking up left

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
