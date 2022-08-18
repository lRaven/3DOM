const utcToLocalDate = (utc_date) => {
	if (utc_date.includes('T')) {
		return utc_date.split('T')[0].split('-').reverse().join('.');
	} else {
		return utc_date.split('-').reverse().join('.');
	}
};

export { utcToLocalDate };