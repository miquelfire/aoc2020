/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').slice(1);
	let treeCount = 0;
	const move = 3;
	let pos = 3;
	const modi = data[0].length;
	data.forEach(r => {
		if (r[pos] == '#') {
			treeCount++;
		}
		pos = (pos + move) % modi;
	});
	return treeCount;
}

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n');
	return null;
}

module.exports = {
	part1,
	//part2
};
