/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e => parseInt(e)).sort((a, b) => a - b);
	for (let i = 0, li = data.length; i < li; i++) {
		for (let j = i + 1; j < li; j++) {
			const t = data[i] + data[j];
			if (t > 2020) {
				break;
			}
			if (t == 2020) {
				return data[i] * data[j];
			}
		}
	}
	return null;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n').map(e => parseInt(e)).sort((a, b) => a - b);
	for (let i = 0, li = data.length; i < li; i++) {
		for (let j = i + 1; j < li; j++) {
			for (let k = j + 1; k < li; k ++) {
				const t = data[i] + data[j] + data[k];
				if (t > 2020) {
					break;
				}
				if (t == 2020) {
					return data[i] * data[j] * data[k];
				}
			}
		}
	}
	return null;
};

module.exports = {
	part1,
	part2
};
