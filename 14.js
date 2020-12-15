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
	const data = d.split('\n').map(e=>e.split(' = '));
	const mem = new Map();
	let mask = '';
	let sum = 0;
	data.forEach(e=>{
		if (e[0] == 'mask') {
			mask = [e[1], (e[1].match(/X/g).length)];
		}
		else {
			let loc = (+(e[0].match(/\d+/)[0])).toString(2).padStart(36, '0').split('');
			for (let i = 0; i < mask[0].length; i++) {
				switch (mask[0][i]) {
					case 'X':
					case '1':
						loc[i] = mask[0][i];
						break;
				}
			}
			for (let i = 0; i < (2 ** mask[1]); i++) {
				let ib = i.toString(2).padStart(mask[1], '0').split('');
				let index = 0;
				const tloc = loc.map((e) => {
					if (e == 'X') {
						return ib[index++];
					}
					else {
						return e;
					}
				}).join('');
				mem.set(tloc, +e[1]);
			}
		}
	});
	mem.forEach(e=>{
		sum += e;
	});
	return sum;
};

module.exports = {
	part1,
	part2
};
