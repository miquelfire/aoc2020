/**
 * 
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e => parseInt(e)).sort((a, b) => a - b);
	return data;
}

const part2 = async d => {
	const data = d.split('\n').map(e => parseInt(e)).sort((a, b) => a - b);
	return data;
}

module.exports = {
	part1,
	//part2
};
