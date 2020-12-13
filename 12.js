'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e=> [e[0], +(e.slice(1))]);
	const pos = [0,0,90];
	const NS = 0;
	const WE = 1;
	const DIR = 2;
	data.forEach(e => {
		//const e = [d[0], +(d.slice(1))];
		switch (e[0]) {
			case 'F': {
				switch (pos[DIR]) {
					case 0:
						pos[NS] -= e[1];
						break;
					case 90:
						pos[WE] += e[1];
						break;
					case 180:
						pos[NS] += e[1];
						break;
					case 270:
						pos[WE] -= e[1];
						break;
				}
				break;
			}
			case 'R': {
				pos[DIR] += e[1];
				if (pos[DIR] > 270) {
					pos[DIR] -= 360;
				}
				break;
			}
			case 'L': {
				pos[DIR] -= e[1];
				if (pos[DIR] < 0) {
					pos[DIR] += 360;
				}
				break;
			}
			case 'N': {
				pos[NS] -= e[1];
				break;
			}
			case 'S': {
				pos[NS] += e[1];
				break;
			}
			case 'W': {
				pos[WE] -= e[1];
				break;
			}
			case 'E': {
				pos[WE] += e[1];
				break;
			}
		}
	});
	return Math.abs(pos[0]) + Math.abs(pos[1]);
	//875 too high
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e => /([NSEWLRF])(\d+)/.exec(e).splice(1));
	return null;
};

module.exports = {
	part1,
	//part2
};
