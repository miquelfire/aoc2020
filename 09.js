'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e => +e);
	const preamble = 25;
	const previousNumbers = data.slice(0, preamble);
	let pos = preamble;
	while (pos < data.length) {
		let valid = false;
		const sum = data[pos];
		pos++;
		for (let i = 0; i < previousNumbers.length - 1; i++) {
			for (let j = i + 1; j < previousNumbers.length; j++) {
				if (previousNumbers[i] + previousNumbers[j] == sum) {
					valid = true;
				}
			}
		}
		if (!valid) {
			return sum;
		}
		previousNumbers.push(sum);
		previousNumbers.shift();
	}
	return null;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e => +e);
	const preamble = 25;
	const previousNumbers = data.slice(0, preamble);
	let pos = preamble;
	let invalid = 0;
	while (pos < data.length) {
		let valid = false;
		const sum = data[pos];
		for (let i = 0; i < previousNumbers.length - 1; i++) {
			for (let j = i + 1; j < previousNumbers.length; j++) {
				if (previousNumbers[i] + previousNumbers[j] == sum) {
					valid = true;
				}
			}
		}
		if (!valid) {
			invalid = sum;
			break;
		}
		pos++;
		previousNumbers.push(sum);
		previousNumbers.shift();
	}

	// Find range for set that equals invalid value
	let start = 0;
	let end = 1;
	let sum = data[start];
	while (sum != invalid && end < pos) {
		sum += data[end++];
		if (sum > invalid) {
			start++;
			end = start + 1;
			sum = data[start];
		}
	}

	// Find min/max values
	sum = data.slice(start, end).reduce((p,c) => {
		p[0] = Math.min(p[0], c);
		p[1] = Math.max(p[1], c);
		return p;
	}, [invalid,0]).reduce((p,c)=> p + c, 0);
	return sum;
};

module.exports = {
	part1,
	part2
};
