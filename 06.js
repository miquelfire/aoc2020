/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n\n').map(e => e.replace(/\n/g, '')).map(e => [...new Set(e.split('').sort())]).reduce((p, v) => p + v.length, 0);
	return data;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	let count = 0;
	d.split('\n\n').map(e => e.split('\n')).map(e => e.map(e => e.split('').sort())).forEach(group => {
		const answers = new Map();
		const groupSize = group.length;
		group.forEach(person => {
			person.forEach(ans => {
				answers.set(ans, (answers.get(ans) || 0) + 1);
			});
		});
		answers.forEach((v) => {
			if (v == groupSize) {
				count++;
			}
		});
	});
	return count;
};

module.exports = {
	part1,
	part2
};
