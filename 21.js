'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e=>{
		const reg = /(.*) \(contains ([^)]+)\)/;
		const match = reg.exec(e);
		return [match[1].split(' '), match[2].split(', ')];
	});
	const alleg = new Map();
	data.forEach(e=>{
		e[0].sort();
		e[1].forEach(f=>{
			if (alleg.has(f)) {
				const q = alleg.get(f);
				q.push(e[0]);
				alleg.set(f, q);
			}
			else {
				alleg.set(f, [e[0]]);
			}
		});
	});
	alleg.forEach((v, k)=>{
		if (v.length == 1) {
			alleg.set(k, v[0]);
			return;
		}
		const common = new Set();
		for (let i = 0; i < v.length; i++) {
			for (let j = 0; j < v.length; j++) {
				if (i == j) {
					continue;
				}
				if (v[i] == [j]) {}
			}
		}
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
