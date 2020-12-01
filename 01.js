/**
 * 
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n').map(e => parseInt(e)).sort((a, b) => a - b);
	loop:
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
}

module.exports = {
	part1
};
