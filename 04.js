/**
 * @param {string} d 
 */
const part1 = async d => {
	const data = d.split('\n\n').map(e => e.split(/[ \n]+/)).map(e => e.reduce((p, c) => {
		c = c.split(':');
		p[c[0]] = c[1];
		return p;
	}, {})).filter(e => {
		return (e.byr && e.iyr && e.eyr && e.hgt && e.hcl && e.ecl && e.pid);
	});
	return data.length;
};

/**
 * @param {string} d 
 */
const part2 = async d => {
	const data = d.split('\n\n').map(e => e.split(/[ \n]+/)).map(e => e.reduce((p, c) => {
		c = c.split(':');
		p[c[0]] = c[1];
		return p;
	}, {})).filter(e => {
		return (
			e.byr && e.byr >= 1920 && e.byr <= 2002 &&
			e.iyr && e.iyr >= 2010 && e.iyr <= 2020 &&
			e.eyr && e.eyr >= 2020 && e.eyr <= 2030 &&
			e.hgt && /(?:(?:59|6[0-9]|7[1-6])in|1(?:[5-8][0-9]|9[0-3])cm)/.test(e.hgt) &&
			e.hcl && /#[0-9a-f]{6}/.test(e.hcl) &&
			e.ecl && /amb|blu|brn|gry|grn|hzl|oth/.test(e.ecl) &&
			e.pid && /\d{9}/.test(e.pid)
		);
	});
	return data.length;
};

module.exports = {
	part1,
	part2
};
