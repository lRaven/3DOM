<template>
	<div class="time-picker">
		<div class="time-picker__selected">
			<p>{{ selected }}</p>
			<div class="time-picker__arrow">
				<img src="/img/icon/general/arrow.svg" alt="" />
			</div>
		</div>
		<div class="time-picker__content">
			<div class="time-picker__item" v-for="item in options" :key="item">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TimePicker",
		props: {
			selected: String,
			options: Array,
		},
		methods: {
			//* функция выпадающего меню
			dropdown() {
				const dropdowns = document.querySelectorAll(".time-picker");

				dropdowns.forEach((dropdown) => {
					const arrow = dropdown.querySelector(".time-picker__arrow");
					const options =
						dropdown.querySelectorAll(".time-picker__item");
					const dropdownSelected = dropdown.querySelector(
						".time-picker__selected"
					);
					const dropdownContent = dropdown.querySelector(
						".time-picker__content"
					);
					const height = dropdownContent.scrollHeight + 60;

					//*скрытие или показ выпадающего списка при клике на блок со стрелкой
					dropdownSelected.addEventListener("click", () => {
						if (dropdownContent.clientHeight === 0) {
							arrow.classList.add("open");
							dropdownContent.classList.add("open");
							dropdownContent.setAttribute(
								"style",
								`height: ${height}px`
							);
						} else {
							arrow.classList.remove("open");
							dropdownContent.classList.remove("open");
							dropdownContent.removeAttribute("style");
						}

						//*скрытие выпадающего списка при клике вне элемента
						window.addEventListener("click", (e) => {
							const target = e.target;
							if (!target.closest(".time-picker__selected")) {
								arrow.classList.remove("open");
								dropdownContent.classList.remove("open");
								dropdownContent.removeAttribute("style");
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

			//* выбор значения элемента и запись его в поле
			setOption() {
				const dropdowns = document.querySelectorAll(".time-picker");
				dropdowns.forEach((dropdown) => {
					const options =
						dropdown.querySelectorAll(".time-picker__item");
					const selectedOption = dropdown.querySelector(
						".time-picker__selected p"
					);
					options.forEach((option) => {
						option.addEventListener("click", () => {
							options.forEach((option) => {
								option.classList.remove("selected");
							});

							option.classList.add("selected");
							selectedOption.textContent = option.textContent;
							selectedOption.setAttribute(
								"style",
								"color: #4b4b4b"
							);
						});
					});
				});
			},

			saveTime() {
				const timeItems =
					document.querySelectorAll(".time-picker__item");
				timeItems.forEach((timeItem) => {
					timeItem.addEventListener("click", () => {
						this.$emit("update:modelValue", timeItem.textContent);
					});
				});
			},
		},
		mounted() {
			this.dropdown();
			this.setOption();
			this.saveTime();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.time-picker {
		user-select: none;
		position: relative;
		&__description {
			font-size: 1.5rem;
			color: $gray;
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
			background-color: $white;
			border: 0.1rem solid #c4c4c4;
			color: #979797;
			font-size: 1.8rem;
			font-weight: 500;
			transition: all 0.1s ease;
			&:hover {
				border-color:$dark;
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
			display: grid;
			grid-template-columns: repeat(3, 9rem);
			grid-gap: 1rem;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 0;
			height: 0;
			width: 100%;
			border-radius: 0.5rem;
			overflow: hidden;
			background-color: $white;
			box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.25);
			transition: all 0.1s ease;

			&.open {
				padding: 3rem 0;
				transform: translateY(1rem);
				transition: all 0.2s ease;
				z-index: 3;
			}
		}
		&__item {
			cursor: pointer;
			display: block;
			text-align: center;
			padding: 1rem 2rem;
			border-radius: 2rem;
			max-width: 12rem;
			color: $dark;
			font-size: 1.8rem;
			font-weight: 500;
			transition: all 0.1s ease;
			&:hover {
				transition: all 0.2s ease;
				background-color: #edf5fd;
			}
			&.selected {
				color: $white;
				background-color: $blue;
			}
		}
	}
</style>
