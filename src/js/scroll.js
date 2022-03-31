function scroll(id) {
	//*скролл до секции
	const section = document.querySelector(id).offsetTop;
	const header =
		document.querySelector("#header").clientHeight;

	window.scrollTo(0, section - header, {
		behavior: "smooth",
	});
}

export { scroll }