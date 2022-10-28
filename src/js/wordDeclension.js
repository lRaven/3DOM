function wordDeclension(number, words) {
	const number_100 = Math.abs(number) % 100;
	const number_10 = Math.abs(number) % 10;

	if (number_100 > 10 && number_100 < 20) { return words[2]; }
	if (number_10 > 1 && number_10 < 5) { return words[1]; }
	if (number_10 === 1) { return words[0]; }
	return words[2];
}

export { wordDeclension }