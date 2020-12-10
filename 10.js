'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = ('0\n' + d).split('\n').map(e => +e).sort((a, b) => a - b);
	let diff1 = 0;
	let diff3 = 1;
	for (let i = 1; i < data.length; i++) {
		switch(data[i] - data[i - 1]) {
		case 1:
			diff1++;
			break;
		case 3:
			diff3++;
			break;
		}
	}
	return diff1 * diff3;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = ('0\n' + d).split('\n').map(e => +e).sort((a, b) => a - b);
	return null;
};

module.exports = {
	part1,
	//part2
};
