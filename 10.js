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
	const permutations = [1, 1, 1, 2, 4, 7, 13, 24];
	let seqLen = 0;
	let combo = 1;
	data.forEach((e, i) => {
		seqLen++;
		const next = data[i + 1] || e + 3;
		if (next) {
			if ((next - e) == 3) {
				combo *= permutations[seqLen];
				seqLen = 0;
			}
		}
	});
	return combo;
};

module.exports = {
	part1,
	part2
};
