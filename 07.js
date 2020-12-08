'use strict';
class bagNode {
	/**
	 * @param {[string, [*]]} bag 
	 */
	constructor(bag) {
		/** @type {string} */
		this.name = bag[0];
		/** @type {[bagNode]} */
		this.parents = [];
		/** @type {[bagNode]} */
		this.children = [];
		/** @type {[*]} */
		this.unprocessedChildren = bag[1]; // Not all children have made their nodes yet when this is called
	}

	/**
	 * @param {Map} bags
	 */
	processChildren(bags) {
		if (this.unprocessedChildren) {
			this.unprocessedChildren.forEach(e=> {
				const bag = bags.get(e[0]);
				bag.parents.push(this);
				this.children.push([e[1], bag]);
			});
		}
	}
}

/**
 * @param {string} d 
 */
const part1 = async d => {
	const bags = new Map();
	const bagsThatHasOurs = new Set();
	const bagsChecked = new Set();
	const bagsToCheck = [];
	let ourBag = null;
	d.split('\n')
		.map(e => e.replace(/(no other bags)?\./g, '').replace(/bags/g, 'bag').split(' contain '))
		.map(e => {
			if (e[1]) {
				const split = /(\d+) (.*)/;
				e[1] = e[1].split(/, /g).map(e=> {
					const match = split.exec(e);
					return [match[2], +match[1]];
				});
			}
			else {
				e[1] = null;
			}
			bags.set(e[0], new bagNode(e));
			if (e[0] == 'shiny gold bag') {
				ourBag = bags.get(e[0]);
			}
			return e;
		});
	bags.forEach(e => e.processChildren(bags));
	ourBag.parents.forEach(e => {
		bagsThatHasOurs.add(e);
		bagsChecked.add(e);
		bagsToCheck.push(e);
	});
	while (bagsToCheck.length) {
		const bag = bagsToCheck.shift();
		bag.parents.forEach(e => {
			if (bagsChecked.has(e)) {
				// We checked this bag already in another path
				return;
			}
			bagsThatHasOurs.add(e);
			bagsChecked.add(e);
			bagsToCheck.push(e);
		});
	}
	return bagsThatHasOurs.size;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const bags = new Map();
	const bagsToCheck = [];
	let bagsInside = 0;
	let ourBag = null;
	d.split('\n')
		.map(e => e.replace(/(no other bags)?\./g, '').replace(/bags/g, 'bag').split(' contain '))
		.map(e => {
			if (e[1]) {
				const split = /(\d+) (.*)/;
				e[1] = e[1].split(/, /g).map(e=> {
					const match = split.exec(e);
					return [match[2], +match[1]];
				});
			}
			else {
				e[1] = null;
			}
			bags.set(e[0], new bagNode(e));
			if (e[0] == 'shiny gold bag') {
				ourBag = bags.get(e[0]);
			}
			return e;
		});
	bags.forEach(e => e.processChildren(bags));
	ourBag.children.forEach(e => {
		bagsInside += e[0];
		for (let i = 0; i < e[0]; i++) {
			bagsToCheck.push(e[1]);
		}
	});
	while (bagsToCheck.length) {
		const bag = bagsToCheck.shift();
		if (bag.children) {
			bag.children.forEach(e => {
				bagsInside += e[0];
				for (let i = 0; i < e[0]; i++) {
					bagsToCheck.push(e[1]);
				}
			});
		}
	}
	return bagsInside;
};

module.exports = {
	part1,
	part2
};
