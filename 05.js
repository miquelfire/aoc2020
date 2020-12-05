/**
 * @param {string} row
 * @param {number} searchRange
 * @param {string} sep
 */
const binSearch = (data, searchRange, sep) => {
	let search = [...Array(searchRange).keys()];
	const items = data.split('');
	items.forEach(item => {
		const half = Math.ceil(search.length / 2);
		switch (item) {
			case sep[0]: {
				search = search.splice(0, half);
				break;
			}
			case sep[1]: {
				search = search.splice(half);
				break;
			}
		}
	});
	return search[0];
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const seats = [];
	d.split('\n').map(e => {
		const row = binSearch(e.substring(0, 7), 128, 'FB');
		const col = binSearch(e.substring(7), 8, 'LR');
		seats.push(row * 8 + col);
	});
	return Math.max(...seats);
}

/**
 * @param {string} d 
 */
const part2 = async d => {
	const seats = [];
	d.split('\n').map(e => {
		const row = binSearch(e.substring(0, 7), 128, 'FB');
		const col = binSearch(e.substring(7), 8, 'LR');
		seats.push(row * 8 + col);
	});
	seats.sort();
	let seat = 0;
	for (let i = 1; i < seats.length; i++) {
		if ((seats[i] - seats[i - 1]) == 2) {
			return seats[i] - 1;
		}
	}
	return 0;
}

module.exports = {
	part1,
	part2
};
