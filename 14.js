'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e=>e.split(' = '));
	const mask = [0n, 0n];
	const mem = [];
	let sum = 0n;
	data.forEach(e=>{
		if (e[0] == 'mask') {
			mask[0] = BigInt('0b' + e[1].replace(/X/g, '1'));
			mask[1] = BigInt('0b' + e[1].replace(/X/g, '0'));
		}
		else {
			const loc = +(e[0].match(/\d+/)[0]);
			e[1] = BigInt(e[1]);
			e[1] = e[1] | mask[1];
			e[1] = e[1] & mask[0];
			mem[loc] = e[1];
		}
	});
	mem.forEach(e=>{
		sum += e;
	});
	return sum;
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
