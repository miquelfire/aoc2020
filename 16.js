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
		const validIndexes = new Array(e.length).fill(0, 0, e.length);
		let ret = true;
		e.forEach((e, i)=>{
			data[0].forEach((f)=>{
				if ((e >= f[1] && e <= f[2]) || (e >= f[3] && e <= f[4])) {
					validIndexes[i]++;
				}
			});
			if (validIndexes[i] == 0) ret = false;
		});
		return ret;
	});
	// We only have valid tickets in our set now
	return null;
};

module.exports = {
	part1,
	part2
};
