<template>
	<div class="date-picker">
		<div class="date-picker__arrow">
			<img src="/img/icon/general/arrow.svg" alt="" />
		</div>
		<datepicker
			format="dd.MM.yyyy"
			icon-color="#007bfc"
			placeholder="Выберите дату*"
			:monday-first="true"
			:disabled-dates="{
				to: new Date(),
			}"
		></datepicker>
	</div>
</template>

<script>
	import Datepicker from "vuejs3-datepicker";

	export default {
		name: "DatePicker",
		components: { Datepicker },
		data: () => ({ date: "" }),
		methods: {
			//* поворот стрелки при открытии календаря
			reverseArrow() {
				const datePicker = document.querySelector(".date-picker");
				const calendars = datePicker.querySelectorAll(
					".vuejs3-datepicker__calendar"
				);
				const arrow = datePicker.querySelector(".date-picker__arrow");

				window.addEventListener("click", () => {
					if (
						calendars[0].getAttribute("style") ===
							"display: none;" &&
						calendars[1].getAttribute("style") ===
							"display: none;" &&
						calendars[2].getAttribute("style") === "display: none;"
					) {
						arrow.classList.remove("open");
					} else arrow.classList.add("open");
				});
			},

			//* функция записи даты в переменную в формате
			saveDate() {
				const cells = document.querySelectorAll(".cell.day");
				cells.forEach((cell) => {
					cell.addEventListener("click", () => {
						if (!cell.classList.contains("disabled")) {
							let value = document
								.querySelector(".vuejs3-datepicker__content")
								.textContent.split("");

							let year;
							year = value.slice(6).join("");
							let month;
							month = value.slice(3, 5).join("");
							let day;
							day = value.slice(0, 2).join("");

							this.date = `${year}-${month}-${day}`;
							this.$emit("update:modelValue", this.date);
						}
					});
				});
			},
		},
		mounted() {
			this.reverseArrow();
			this.saveDate();
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/variables";

	.vuejs3-datepicker {
		border: 0.1rem solid #c4c4c4;
		border-radius: 1rem;
		transition: all 0.1s ease;
		&:hover {
			border-color: $dark;
			transition: all 0.2s ease;
		}
		div {
			&:first-child {
				height: 100%;
			}
		}
		&__calendar {
			margin-top: 0.7rem;
			&-topbar {
				background-color: $blue;
				&-year {
					cursor: pointer;
				}
			}
		}
		.cell {
			border-radius: 2rem;
			font-weight: 500;
			font-size: 1.4rem;
			&.selected {
				background-color: $blue;
				&:hover {
					background-color: $blue;
				}
			}
			&.day {
				border-radius: 50%;
				&-header {
					border-radius: 0;
					border: none;
					border-bottom: 0.1rem solid #c4c4c4;
					margin-bottom: 1rem;
					font-size: 1.4rem;
					color: #979797;
					font-weight: 500;
				}
			}
			&.today {
				background-color: $light-gray;
				color: $dark;
			}
			&.disabled {
				cursor: not-allowed;
			}

			&:not(.blank):not(.disabled).month:hover,
			&:not(.blank):not(.disabled).day:hover,
			&:not(.blank):not(.disabled).year:hover {
				border-color: $blue;
			}
		}

		&__icon {
			display: none;
		}
		&__value {
			width: 100%;
			border: none;
			display: flex;
			align-items: center;
		}
		&__content {
			font-size: 1.8rem;
			font-weight: 500;
		}
		#calendar-div {
			background-color: transparent;
		}
	}
</style>

<style lang="scss" scoped>
	.date-picker {
		position: relative;
		* {
			user-select: none;
		}
		.vuejs3-datepicker {
			width: 100%;
			height: 100%;
		}
		&__arrow {
			position: absolute;
			top: 50%;
			right: 2.5rem;
			transform: translateY(-50%);
			transition: all 0.1s ease;
			&.open {
				transform: rotate(-180deg) translateY(50%);
				transition: all 0.2s ease;
			}
		}
	}
</style>
