function deepCopy(e) {
	return JSON.parse(JSON.stringify(e));
}

module.exports = {
	deepCopy
};
