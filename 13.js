'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.replace(/x/g, '').replace(/,,+/g, ',').split('\n').map((e, i) => {
		if (i == 1) {
			return e.split(',');
		}
		return e;
	});
	const a = [0, data[0]*data[0]];
	data[1].forEach(e => {
		const nextStop = Math.ceil(data[0] / e) * e;
		if (nextStop < a[1]) {
			a[0] = e;
			a[1] = nextStop;
		}
	});
	return a[0] * (a[1] - data[0]);
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
