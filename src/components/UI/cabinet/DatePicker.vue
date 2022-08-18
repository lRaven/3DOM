<template>
	<div class="date-picker">
		<Datepicker
			inputClassName="date-picker__input"
			calendarClassName="date-picker__calendar"
			calendarCellClassName="date-picker__calendar-cell"
			v-model="date"
			hideInputIcon
			format="dd.MM.yyyy"
			locale="ru"
			:minDate="new Date()"
			:enableTimePicker="false"
			selectText="Выбрать"
			cancelText="Отменить"
			placeholder="Выберите дату*"
			@update:modelValue="
				this.$emit('update:modelValue', this.formattedDate)
			"
		></Datepicker>
	</div>
</template>

<script>
	import Datepicker from "@vuepic/vue-datepicker";
	import "@vuepic/vue-datepicker/dist/main.css";

	export default {
		name: "DatePicker",
		components: { Datepicker },
		watch: {
			getDate() {
				if (Boolean(this.getDate) === false) {
					this.date = null;
				}
			},
		},
		props: {
			getDate: String,
		},
		computed: {
			formattedDate() {
				if (this.date !== null) {
					return this.date.toISOString().split("T")[0];
				} else {
					return "";
				}
			},
		},
		data: () => ({ date: null }),
	};
</script>

<style lang="scss">
	.date-picker {
		&__input {
			font-size: 1.8rem;
			padding: 2rem;
			border-radius: 1rem;
		}
		&__calendar {
			&-cell {
				font-size: 1.6rem;
				border-radius: 50%;
			}
		}

		svg {
			pointer-events: all;
			height: 2rem;
			width: 2rem;
		}
	}

	.dp {
		&__calendar {
			&_header {
				&_item {
					font-size: 1.4rem;
					font-weight: 500;
				}
			}
			&_row {
				gap: 0.5rem;
			}
		}
		&__month {
			&_year {
				&_select {
					font-size: 1.4rem;
				}
			}
		}
		&__selection_preview {
			font-size: 1.4rem;
		}
		&__action {
			font-size: 1.4rem;
		}

		&__overlay {
			&_cell_pad {
				font-size: 1.4rem;
			}
		}
	}
</style>
