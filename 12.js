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
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e=> [e[0], +(e.slice(1))]);
	let waypoint = [-1, 10];
	const pos = [0, 0];
	data.forEach(e => {
		switch(e[0]) {
			case 'F': {
				pos[0] += (e[1] * waypoint[0]);
				pos[1] += (e[1] * waypoint[1]);
				break;
			}
			case 'R': {
				switch(e[1]) {
					case 90: {
						waypoint = [waypoint[1], -waypoint[0]];
						break;
					}
					case 180: {
						waypoint = [-waypoint[0], -waypoint[1]];
						break;
					}
					case 270: {
						waypoint = [-waypoint[1], waypoint[0]];
					}
				}
				break;
			}
			case 'L': {
				switch(e[1]) {
					case 270: {
						waypoint = [waypoint[1], -waypoint[0]];
						break;
					}
					case 180: {
						waypoint = [-waypoint[0], -waypoint[1]];
						break;
					}
					case 90: {
						waypoint = [-waypoint[1], waypoint[0]];
					}
				}
				break;
			}
			case 'N': {
				waypoint[0] -= e[1];
				break;
			}
			case 'S': {
				waypoint[0] += e[1];
				break;
			}
			case 'W': {
				waypoint[1] -= e[1];
				break;
			}
			case 'E': {
				waypoint[1] += e[1];
				break;
			}
			default: {
				debugger;
				break;
			}
		}
	});
	return Math.abs(pos[0]) + Math.abs(pos[1]);
};

module.exports = {
	part1,
	part2
};
