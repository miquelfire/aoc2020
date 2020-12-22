'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const [player1, player2] = d.split('\n\n').map(e=>e.split('\n').map(e=>+e));
	player1.shift();
	player2.shift();
	while (player1.length > 0 && player2.length > 0) {
		const p1tc = player1.shift();
		const p2tc = player2.shift();
		if (p1tc > p2tc) {
			player1.push(p1tc, p2tc);
		}
		if (p2tc > p1tc) {
			player2.push(p2tc, p1tc);
		}
	}
	const winner = (player2.length) ? player2 : player1;
	let sum = 0;
	winner.forEach((e, i) => {
		sum += e * (winner.length - i);
	});
	return sum;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const [player1, player2] = d.split('\n\n').map(e=>e.split('\n').map(e=>+e));
	player1.shift();
	player2.shift();
	return null;
};

module.exports = {
	part1,
	part2
};
