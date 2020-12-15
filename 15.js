'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split(',');
	let last = 0;
	const mem = new Map();
	data.forEach((e, i)=>{
		last = +e;
		mem.set(last, [i+1, i+1, 0]);
	});
	for (let turn = data.length; turn < 2020; turn++) {
		const e = mem.get(last);
		if (e && e[0] != turn) {
			last = e[2] - e[1];

			if (!mem.has(last)) {
				mem.set(last, [turn + 1, turn + 1, 0]);
			}
			else {
				const e = mem.get(last);
				if (e[2] != 0) {
					e[1] = e[2];
				}
				e[2] = turn + 1;
			}
		}
		else {
			last = 0;
			if (!mem.has(last)) {
				mem.set(last, [turn+1, turn+1, 0]);
			}
			else {
				const e = mem.get(last);
				if (e[2] != 0) {
					e[1] = e[2];
				}
				e[2] = turn + 1;
				mem.set(last, e);
			}
		}
	}
	return last;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split(',');
	let last = 0;
	const mem = new Map();
	data.forEach((e, i)=>{
		last = +e;
		mem.set(last, [i+1, i+1, 0]);
	});
	for (let turn = data.length; turn < 30000000; turn++) {
		const e = mem.get(last);
		if (e && e[0] != turn) {
			last = e[2] - e[1];

			if (!mem.has(last)) {
				mem.set(last, [turn + 1, turn + 1, 0]);
			}
			else {
				const e = mem.get(last);
				if (e[2] != 0) {
					e[1] = e[2];
				}
				e[2] = turn + 1;
			}
		}
		else {
			last = 0;
			if (!mem.has(last)) {
				mem.set(last, [turn+1, turn+1, 0]);
			}
			else {
				const e = mem.get(last);
				if (e[2] != 0) {
					e[1] = e[2];
				}
				e[2] = turn + 1;
				mem.set(last, e);
			}
		}
	}
	return last;
};

module.exports = {
	part1,
	part2
};
