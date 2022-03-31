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
			<div
				class="dropdown__item"
				v-for="item in options"
				:key="item.id"
				@click="$emit('update:modelValue', item.id)"
			>
				{{ item.text }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dropdown",
		props: {
			description: String,
			selected: String,
			options: Array,
		},
		methods: {
			//* функция выпадающего меню
			dropdown() {
				const dropdowns = document.querySelectorAll(".dropdown");

				dropdowns.forEach((dropdown) => {
					const arrow = dropdown.querySelector(".dropdown__arrow");
					const options =
						dropdown.querySelectorAll(".dropdown__item");
					const dropdownSelected = dropdown.querySelector(
						".dropdown__selected"
					);
					const dropdownContent =
						dropdown.querySelector(".dropdown__content");

					dropdownSelected.addEventListener("click", () => {
						//*выборать все dropdown'ы и закрыть их
						dropdowns.forEach((dropdown) => {
							const arrow =
								dropdown.querySelector(".dropdown__arrow");
							const dropdownSelected = dropdown.querySelector(
								".dropdown__selected"
							);
							const dropdownContent =
								dropdown.querySelector(".dropdown__content");

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
						if (!target.closest(".dropdown__selected")) {
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
			this.dropdown();
			this.setOption();
		},
	};
</script>

<style lang="scss" scoped>
	.dropdown {
		user-select: none;
		position: relative;

		&__description {
			font-size: 1.3rem;
			color: var(--middle-gray);
			font-weight: 600;
			margin-bottom: 1.3rem;
		}
		&__selected {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.5rem;
			height: 5rem;
			background-color: var(--white);
			border: 0.1rem solid var(--middle-gray);
			color: var(--middle-gray);
			font-size: 1.4rem;
			font-weight: 600;
			transition: all 0.2s ease;

			&.open {
			}
		}
		&__arrow {
			user-select: none;
			cursor: pointer;
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
			z-index: 2;
			overflow: hidden;
			transition: all 0.2s ease;
		}
		&__item {
			cursor: pointer;
			display: block;
			padding: 1.5rem;
			background-color: var(--white);
			border: 0.1rem solid var(--middle-gray);
			color: var(--dark);
			font-size: 1.4rem;
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
