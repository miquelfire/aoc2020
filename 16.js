'use strict';

/**
 * @param {string[]} fields 
 */
function processFields(fields) {
	const regex = /([^:]+): (\d+)-(\d+) or (\d+)-(\d+)/;
	const processed = [];

	fields.forEach(e=>{
		const match = regex.exec(e);
		processed.push([
			match[1],
			+match[2],
			+match[3],
			+match[4],
			+match[5],
			[],
		]);
	});

	return processed;
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n\n').map(e=>e.split('\n'));
	data[0] = processFields(data[0]);
	data[2].shift(); // Don't need the header
	// convert tickets to number values
	data[1] = data[1][1].split(',').map(e=>+e);
	data[2] = data[2].map(e=>e.split(',').map(e=>+e));
	const ret = data[2].reduce((p, e)=>{
		const validIndexes = new Set();
		e.forEach((e, i)=>{
			data[0].forEach((f)=>{
				if ((e >= f[1] && e <= f[2]) || (e >= f[3] && e <= f[4])) {
					validIndexes.add(i);
				}
			});
		});
		validIndexes.forEach(i=>{
			e[i] = 0;
		});
		return p + e.reduce((p, v) => p + v);
	}, 0);
	return ret;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n\n').map(e=>e.split('\n'));
	data[0] = processFields(data[0]);
	data[2].shift(); // Don't need the header
	// convert tickets to number values
	data[1] = data[1][1].split(',').map(e=>+e);
	data[2] = data[2].map(e=>e.split(',').map(e=>+e)).filter((e)=>{
		const f = e.slice(0);
		const validIndexes = new Set();
		f.forEach((e, i)=>{
			data[0].forEach((f)=>{
				if ((e >= f[1] && e <= f[2]) || (e >= f[3] && e <= f[4])) {
					validIndexes.add(i);
				}
			});
		});
		validIndexes.forEach(i=>{
			f[i] = 0;
		});
		return !f.reduce((p, v) => p + v, 0);
	});
	// Add our ticket to the list
	data[2].push(data[1]);
	// We only have valid tickets in our set now
	// Go through and add possible list of items
	data[0].forEach((e, i) => {
		for (let x = 0; x < data[0].length; x++) {
			data[0][i][5].push(x);
		}
	});
	for (let i = 0; i < data[0].length; i++) {
		let col = -1;
		while (data[0][i][5].length > 0) {
			const x = data[0][i][5].pop();
			let valid = true;
			for (let y = 0; valid && y < data[2].length; y++) {
				if (!(
					(data[2][y][x] >= data[0][i][1] && data[2][y][x] <= data[0][i][2]) ||
					(data[2][y][x] >= data[0][i][3] && data[2][y][x] <= data[0][i][4])
				)) {
					// invalid, just toss it
					valid = false;
					break;
				}
			}
			if (valid) {
				col = x;
			}
		}
		data[0][i][5] = col;
	}
	// Columns found! Time to get the answer for Part 2
	let sum = 1;
	for (let i = 0; i < data[0].length; i++) {
		if (/^departure/.test(data[0][i][0])) {
			sum *= data[1][data[0][i][5]];
		}
	}
	// 213044139619 too low
	// 6611856250609 too high
	return sum;
};

module.exports = {
	part1,
	part2
};
