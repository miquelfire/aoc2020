'use strict';

/**
 * @param {string} d 
 */
function parseCode(d) {
	return d.split('\n').map(e => {
		e = e.split(' ');
		e[1] = +e[1];
		e[2] = 0;
		return e;
	});
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = parseCode(d);
	let acc = 0;
	let pos = 0;
	while (data[pos][2] == 0 && pos < data.length) {
		data[pos][2] = 1;
		switch (data[pos][0]) {
			case 'jmp':
				pos += data[pos][1];
				break;
			case 'acc':
				acc += data[pos][1];
				// eslint-disable-next-line no-fallthrough
			case 'nop':
				pos++;
				break;
		}
	}
	return acc;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const src = parseCode(d);
	let code = JSON.parse(JSON.stringify(src));
	const state = [0, 0]; // pos, acc
	const runCode = (state, data) => {
		while (state[0] < data.length && data[state[0]][2] == 0) {
			data[state[0]][2] = 1;
			switch (data[state[0]][0]) {
				case 'jmp':
					state[0] += data[state[0]][1];
					break;
				case 'nop':
					state[0]++;
					break;
				case 'acc':
					state[1] += data[state[0]][1];
					state[0]++;
					break;
			}
		}
	};

	// dry run
	runCode(state, code);

	// Got broken code, make a copy and search for the one line we need to change
	let fixPos = 0;
	while (fixPos < src.length) {
		// Reset the state
		state[0] = 0;
		state[1] = 0;
		code = JSON.parse(JSON.stringify(src));
		if (code[fixPos][0] == 'jmp') {
			code[fixPos][0] = 'nop';
			runCode(state, code);
			if (state[0] >= src.length) {
				break;
			}
		}
		else if (code[fixPos][0] == 'nop') {
			code[fixPos][0] = 'jmp';
			runCode(state, code);
			if (state[0] >= src.length) {
				break;
			}
		}
		fixPos++;
	}
	return state[1];
};

module.exports = {
	part1,
	part2
};
