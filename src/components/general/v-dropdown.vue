<template>
	<div class="v-dropdown" :class="customClass">
		<p class="v-dropdown__description">{{ description }}</p>
		<div class="v-dropdown__selected">
			<p>{{ selected }}</p>
			<div class="v-dropdown__arrow">
				<img src="img/icon/general/arrow.svg" alt="" />
			</div>
		</div>
		<div class="v-dropdown__content">
			<div class="v-dropdown__item" v-for="item in options" :key="item">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vDropdown",
		props: {
			description: String,
			selected: String,
			options: Array,
			customClass: String,
		},
		methods: {
			//* функция выпадающего меню
			dropdown() {
				const dropdowns = document.querySelectorAll(".v-dropdown");

				dropdowns.forEach((dropdown) => {
					const arrow = dropdown.querySelector(".v-dropdown__arrow");
					const options =
						dropdown.querySelectorAll(".v-dropdown__item");
					const dropdownSelected = dropdown.querySelector(
						".v-dropdown__selected"
					);
					const dropdownContent = dropdown.querySelector(
						".v-dropdown__content"
					);

					dropdownSelected.addEventListener("click", () => {
						//*выборать все dropdown'ы и закрыть их
						dropdowns.forEach((dropdown) => {
							const arrow =
								dropdown.querySelector(".v-dropdown__arrow");
							const dropdownSelected = dropdown.querySelector(
								".v-dropdown__selected"
							);
							const dropdownContent = dropdown.querySelector(
								".v-dropdown__content"
							);

							arrow.classList.remove("open");
							dropdownSelected.classList.remove("open");
							dropdownContent.removeAttribute("style");
						});

						//* toggle dropdown текущий
						if (dropdownContent.clientHeight === 0) {
							arrow.classList.add("open");
							dropdownSelected.classList.add("open");
							dropdownContent.setAttribute(
								"style",
								`height: ${dropdownContent.scrollHeight}px`
							);
						} else {
							arrow.classList.remove("open");
							dropdownSelected.classList.remove("open");
							dropdownContent.removeAttribute("style");
						}
					});

					//*скрытие выпадающего списка при клике вне элемента
					window.addEventListener("click", (e) => {
						const target = e.target;
						if (!target.closest(".v-dropdown__selected")) {
							arrow.classList.remove("open");
							dropdownContent.removeAttribute("style");
							dropdownSelected.classList.remove("open");
						}
					});

					//*скрытие dropdown при клике на элемент списка
					options.forEach((option) => {
						option.addEventListener("click", () => {
							arrow.classList.remove("open");
							dropdownSelected.classList.remove("open");
							dropdownContent.classList.remove("open");
							dropdownContent.removeAttribute("style");
						});
					});
				});
			},

			//* запись в selected значения выбранного элемента
			setOption() {
				const dropdowns = document.querySelectorAll(".v-dropdown");
				dropdowns.forEach((dropdown) => {
					const options =
						dropdown.querySelectorAll(".v-dropdown__item");
					const selectedOption = dropdown.querySelector(
						".v-dropdown__selected p"
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
			this.dropdown();
			this.setOption();
		},
	};
</script>

<style lang="scss" scoped>
	.v-dropdown {
		user-select: none;
		position: relative;

		&__description {
			font-size: 1.5rem;
			color: var(--gray);
			font-weight: 600;
			margin-bottom: 1.3rem;
		}
		&__selected {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 2rem;
			padding: 1.6rem 2rem;
			background-color: var(--light-gray);
			color: var(--middle-gray);
			font-size: 1.8rem;
			font-weight: 600;
			transition: all 0.7s ease;

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
			transition: all 0.2s ease;
			&.open {
				transform: rotate(180deg);
				transition: all 0.3s ease;
			}
		}
		&__content {
			position: absolute;
			left: 0;
			width: 100%;
			height: 0;
			border-radius: 0 0 2rem 2rem;
			z-index: 2;
			overflow: hidden;
			transition: all 0.2s ease;
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
		&-thin {
			* {
				font-size: 1.6rem;
			}
			.v-dropdown {
				&__selected {
					padding: 0.85rem 1.2rem;
					font-weight: 500;
				}
				&__description {
					color: #979797;
					font-weight: 400;
				}
				&__item {
					padding: 1rem 1.2rem;
				}
			}
		}
		&-pale {
			.v-dropdown {
				&__description {
					font-size: 1.8rem;
					color: #979797;
				}
			}
		}
	}
</style>
