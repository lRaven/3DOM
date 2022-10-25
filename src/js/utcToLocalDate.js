const utcToLocalDate = (utcDate) => {
	if (utcDate.includes('T')) {
		return utcDate.split('T')[0].split('-').reverse().join('.');
	} else {
		return utcDate.split('-').reverse().join('.');
	}
};

export { utcToLocalDate };