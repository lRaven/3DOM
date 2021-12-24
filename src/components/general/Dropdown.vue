<template>
	<div class="dropdown">
		<p class="dropdown__description">{{ description }}</p>
		<div class="dropdown__selected">
			<p>{{ selected }}</p>
			<div class="dropdown__arrow">
				<img src="img/icon/general/arrow.svg" alt="" />
			</div>
		</div>
		<div class="dropdown__content">
			<div class="dropdown__item">АКАДЕМИЧЕСКИЙ</div>
			<div class="dropdown__item">DOLCE VITA</div>
			<div class="dropdown__item">АНДРЕЕВСКИЙ</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Dropdown",
		props: {
			description: String,
			selected: String,
		},
		methods: {
			reverseArrow() {
				const dropdowns = document.querySelectorAll(".dropdown");

				dropdowns.forEach((dropdown) => {
					const arrow = dropdown.querySelector(".dropdown__arrow");
					const options = dropdown.querySelectorAll(".dropdown__item");
					const dropdownSelected = dropdown.querySelector(".dropdown__selected");
					const dropdownContent = dropdown.querySelector(".dropdown__content");

					arrow.addEventListener("click", () => {
						arrow.classList.toggle("open");
						dropdownSelected.classList.toggle("open");
						dropdownContent.classList.toggle("open");
					});
				
					options.forEach((option) => {
						option.addEventListener("click", () => {
							arrow.classList.remove("open");
							dropdownSelected.classList.remove("open");
							dropdownContent.classList.remove("open");
						});
					});
				});
			},
			setOption() {
				const dropdowns = document.querySelectorAll(".dropdown");
				dropdowns.forEach((dropdown) => {
					const options =
						dropdown.querySelectorAll(".dropdown__item");
					const selectedOption = dropdown.querySelector(
						".dropdown__selected p"
					);
					options.forEach((option) => {
						option.addEventListener("click", () => {
							selectedOption.textContent = option.textContent;
							selectedOption.setAttribute(
								"style",
								"color: var(--dark);"
							);
						});
					});
				});
			},
		},
		mounted() {
			this.reverseArrow();
			this.setOption();
		},
	};
</script>

<style lang="scss" scoped>
	.dropdown {
		position: relative;
		z-index: 2;
		&__description {
			font-size: var(--text-15);
			color: var(--gray);
			font-weight: 600;
			margin-bottom: 1.3rem;
		}
		&__selected {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 2rem;
			padding: 1.6rem 2rem;
			background-color: var(--light-gray);
			color: var(--middle-gray);
			font-size: 1.8rem;
			font-weight: 600;
			transition: all 1.3s ease;
			&.open {
				border-radius: 2rem 2rem 0 0;
				transition: all 0.1s ease;
			}
		}
		&__arrow {
			user-select: none;
			cursor: pointer;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease;
			&.open {
				transform: rotate(180deg);
				transition: all 0.5s ease;
			}
		}
		&__content {
			position: absolute;
			left: 0;
			width: 100%;
			height: 0;
			border-radius: 0 0 2rem 2rem;
			overflow: hidden;
			transition: all 0.3s ease;
			&.open {
				height: 17.4rem;
				transition: all 0.5s ease;
			}
		}
		&__item {
			cursor: pointer;
			display: block;
			padding: 2rem;
			background-color: var(--light-gray);
			color: var(--dark);
			font-size: 1.8rem;
			font-weight: 600;
			transition: all 0.2s ease;
			&:hover {
				transition: all 0.3s ease;
				background-color: var(--middle-gray);
				color: var(--white);
			}
		}
	}
</style>
