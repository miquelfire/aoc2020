/**
 * @param {string} d 
 */
const part1 = async d => {
	let valid = 0;
	const data = d.split('\n').map(e => e.match(/(\d+)-(\d+) ([a-z]): ([a-z]+)/)).map(e => {
		const min = e[1];
		const max = e[2];
		const char = e[3];
		const pass = e[4].split('').filter(e => e == char);
		if (pass.length >= min && pass.length <= max) valid++;
	});
	
	return valid;
}

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e => e.match(/(\d+)-(\d+) ([a-z]): ([a-z]+)/));
	return data;
}

module.exports = {
	part1,
	//part2
};
