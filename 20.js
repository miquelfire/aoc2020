'use strict';

class tile {
	/** @param {string} t */
	constructor(t) {
		const data = t.split('\n');
		// Convert into data structure to allow us to do work with it.
		this.id = +data.shift().substring(5, 9);

		this.normal = [];
		this.mirrored = [];
		this.matched = [];
		this.normal.push(data[0]);
		this.normal.push(data[data.length - 1]);
		this.mirrored.push(data[0].split('').reverse().join(''));
		this.mirrored.push(data[data.length - 1].split('').reverse().join(''));
		let e = '';
		let w = '';
		for (let i = 0; i < data.length; i++) {
			e += data[i][data.length - 1];
			w += data[i][0];
		}
		this.normal.push(e);
		this.normal.push(w);
		this.mirrored.push(e.split('').reverse().join(''));
		this.mirrored.push(w.split('').reverse().join(''));
	}
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n\n');
	const tiles = [];
	data.forEach(e=>{
		tiles.push(new tile(e));
	});
	return null;
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
