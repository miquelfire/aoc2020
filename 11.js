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
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n');
	return null;
};

module.exports = {
	part1,
	//part2
};
