'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	/**
	 * 
	 * @param {string} e 
	 */
	const calculate = (e) => {
		const parens = /\(([^()]+)\)/;
		while (parens.test(e)) {
			e = e.replace(parens, (m, e) => {
				return calculate(e);
			});
		}
		// parentheses handled, now do the rest
		const parts = e.split(' ');
		let sum = +(parts.shift());
		while (parts.length) {
			const op = parts.shift();
			const num = +(parts.shift());
			switch (op) {
				case '+':
					sum += num;
					break;
				case '*':
					sum *= num;
					break;
				default:
					return -2;
			}
		}
		return sum;
	};
	const data = d.split('\n').map(calculate);
	return data.reduce((p,v)=>p+v, 0);
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
