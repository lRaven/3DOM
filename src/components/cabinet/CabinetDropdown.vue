<template>
	<div class="dropdown">
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
				{{ item.value }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Dropdown",
		props: {
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

					//*скрытие или показ выпадающего списка при клике на блок со стрелкой
					dropdownSelected.addEventListener("click", () => {
						if (dropdownContent.clientHeight === 0) {
							arrow.classList.add("open");
							dropdownContent.classList.add("open");
						} else {
							arrow.classList.remove("open");
							dropdownContent.classList.remove("open");
						}

						//*скрытие выпадающего списка при клике вне элемента
						window.addEventListener("click", (e) => {
							const target = e.target;
							if (!target.closest(".dropdown__selected")) {
								arrow.classList.remove("open");
								dropdownContent.classList.remove("open");
							}
						});
					});

					//*скрытие выпадающего списка при клике на элемент из этого списка
					options.forEach((option) => {
						option.addEventListener("click", () => {
							arrow.classList.remove("open");
							dropdownSelected.classList.remove("open");
							dropdownContent.classList.remove("open");
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
			font-size: 1.5rem;
			color: var(--gray);
			font-weight: 500;
			margin-bottom: 1.3rem;
		}
		&__selected {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 1rem;
			padding: 1.6rem 2rem;
			background-color: var(--white);
			border: 0.1rem solid #c4c4c4;
			color: #979797;
			font-size: 1.8rem;
			font-weight: 500;
			transition: all 0.1s ease;
			&:hover {
				border-color: var(--dark);
				transition: all 0.2s ease;
			}
			&.open {
				transition: all 0.2s ease;
			}
		}
		&__arrow {
			user-select: none;
			cursor: pointer;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.1s ease;
			&.open {
				transform: rotate(180deg);
				transition: all 0.2s ease;
			}
		}
		&__content {
			position: absolute;
			left: 0;
			height: 0;
			width: 100%;
			border-radius: 0.5rem;
			overflow: hidden;
			background-color: var(--white);
			box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.25);
			transition: all 0.1s ease;

			&.open {
				height: 17.4rem;
				overflow-y: auto;
				transform: translateY(1rem);
				transition: all 0.2s ease;
				z-index: 2;
			}
		}
		&__item {
			cursor: pointer;
			display: block;
			padding: 2rem;
			color: var(--dark);
			font-size: 1.8rem;
			font-weight: 500;
			transition: all 0.1s ease;
			&:hover {
				transition: all 0.2s ease;
				background-color: #edf5fd;
			}
		}
	}
</style>
