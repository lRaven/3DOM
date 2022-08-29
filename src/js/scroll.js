function scroll(id) {
	const target = document.querySelector(id);
	if (target) {
		const targetPosition = target.offsetTop;
		const header =
			document.querySelector("#header").clientHeight;

		window.scrollTo(0, targetPosition - header, { behavior: "smooth" });
	}
}

export { scroll }