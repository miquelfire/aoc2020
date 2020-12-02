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
	let valid = 0;
	const data = d.split('\n').map(e => e.match(/(\d+)-(\d+) ([a-z]): ([a-z]+)/)).map(e => {
		const pos1 = e[1] - 1;
		const pos2 = e[2] - 1;
		const char = e[3];
		const pass = e[4];
		if ((pass[pos1] == char || pass[pos2] == char) && pass[pos1] != pass[pos2]) valid++;
	});
	
	return valid;
}

module.exports = {
	part1,
	part2
};
