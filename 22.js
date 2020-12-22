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
	/**
	 * 
	 * @param {number[]} player1 
	 * @param {number[]} player2 
	 */
	const playGame = (player1, player2) => {
		const p1s = player1.slice(0);
		const p2s = player2.slice(0);
		while (player1.length > 0 && player2.length > 0) {
			if (JSON.stringify(player1) == JSON.stringify(p1s) && JSON.stringify(player2) == JSON.stringify(p2s)) {
				return 1;
			}
			const p1tc = player1.shift();
			const p2tc = player2.shift();
			if (p1tc <= player1.length && p2tc <= player2.length) {
				const winner = playGame(player1.slice(0), player2.slice(0));
				if (winner == 1) {
					player1.push(p1tc, p2tc);
				}
				if (winner == 2) {
					player2.push(p2tc, p1tc);
				}
			}
			else {
				if (p1tc > p2tc) {
					player1.push(p1tc, p2tc);
				}
				if (p2tc > p1tc) {
					player2.push(p2tc, p1tc);
				}
			}
		}
		if (player1.length) return 1;
		if (player2.length) return 2;
		throw new Error('How in the world?');
	};
	playGame(player1, player2);
	const winner = (player2.length) ? player2 : player1;
	let sum = 0;
	winner.forEach((e, i) => {
		sum += e * (winner.length - i);
	});
	//8495 too low
	return sum;
};

module.exports = {
	part1,
	part2
};
