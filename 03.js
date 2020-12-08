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
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n');
	const modi = data[0].length;
	const slopes = [
		[1, 1],
		[3, 1],
		[5, 1],
		[7, 1],
		[1, 2]
	];
	const trees = [];
	slopes.forEach(slope => {
		let treeCount = 0;
		let x = 0;
		for (let y = 0; y < data.length; y += slope[1]) {
			if (data[y][x] == '#') {
				treeCount++;
			}
			x = (x + slope[0]) % modi;
		}
		trees.push(treeCount);
	});
	let treeCount = 1;
	trees.forEach(c => {
		treeCount *= c;
	});
	return treeCount;
};

module.exports = {
	part1,
	part2
};
