'use strict';
/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n\n').map(e=>e.split('\n'));
	const rules = Array(data[0].length);
	const rulesToDo = [];
	data[0].forEach(e=>{
		let m;
		if ((m = e.match(/(\d+): "([ab])"/))) {
			rules[m[1]] =m[2];
		} else {
			rulesToDo.push(e);
		}
	});
	while (rulesToDo.length) {
		/** @type {string} */
		const rule = rulesToDo.shift(); // Need to be able to push back on the stack later
		const [ruleNo, r] = rule.split(':').map(e=>e.trim());
		const ruleParts = r.split(' ');
		const skip = ruleParts.every(e=>{
			if (e == '|') {
				return true;
			}
			return rules[e];
		});
		if (!skip) {
			// a Rule hasn't been done yet, just skip for now
			rulesToDo.push(rule);
			continue;
		}
		rules[ruleNo] = '(' + ruleParts.reduce((p,v)=>{
			if (v == '|') {
				return p + v;
			}
			return p + rules[v];
		}, '') + ')';
	}
	const re = new RegExp('^' + rules[0] + '$');
	let sum = 0;
	data[1].forEach(e=>{
		if (re.test(e)) sum++;
	});
	return sum;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n\n').map(e=>e.split('\n'));
	const rules = Array(data[0].length);
	const rulesToDo = [];
	data[0].forEach(e=>{
		let m;
		if ((m = e.match(/(\d+): "([ab])"/))) {
			rules[m[1]] =m[2];
		} else {
			rulesToDo.push(e);
		}
	});
	while (rulesToDo.length) {
		/** @type {string} */
		const rule = rulesToDo.shift(); // Need to be able to push back on the stack later
		const [ruleNo, r] = rule.split(':').map(e=>e.trim());
		const ruleParts = r.split(' ');
		const skip = ruleParts.every(e=>{
			if (e == '|') {
				return true;
			}
			return rules[e];
		});
		if (!skip) {
			// a Rule hasn't been done yet, just skip for now
			rulesToDo.push(rule);
			continue;
		}
		if (ruleNo == '8') {
			rules[8] = '(' + rules[42] + '+)';
			continue;
		}
		if (ruleNo == '11') {
			rules[11] = '(' + rules[42] + rules[31] + '|' + rules[42] + '(' + rules[42] + rules[31] + ')+' + rules[31] + ')';
			continue;
		}
		rules[+ruleNo] = '(' + ruleParts.reduce((p,v)=>{
			if (v == '|') {
				return p + v;
			}
			return p + rules[v];
		}, '') + ')';
	}
	const re = new RegExp('^' + rules[0] + '$');
	let sum = 0;
	data[1].forEach(e=>{
		if (re.test(e)) sum++;
	});
	//320 too low
	return sum;
};

module.exports = {
	part1,
	part2
};
