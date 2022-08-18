<template>
	<div class="time-picker" v-click-away="closeDropdown">
		<div
			class="time-picker__selected"
			@click="
				isDropdownOpen
					? (isDropdownOpen = false)
					: (isDropdownOpen = true)
			"
		>
			<p
				class="time-picker__selected-text"
				:class="{ selected: selectedOption }"
			>
				{{ selectedOption ? selectedOption : placeholder }}
			</p>
			<div class="time-picker__arrow" :class="{ open: isDropdownOpen }">
				<img src="/img/icon/general/arrow.svg" alt="" />
			</div>
		</div>
		<transition mode="out-in" name="fade-up">
			<ul class="time-picker__content" v-show="isDropdownOpen">
				<li
					class="time-picker__item"
					:class="{ selected: selectedOption === item }"
					v-for="item in options"
					:key="item"
					@click="selectValue(item)"
				>
					{{ item }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	import { directive } from "vue3-click-away";

	export default {
		name: "TimePicker",
		props: {
			placeholder: String,
			options: Array,
			getValue: String,
		},
		watch: {
			getValue() {
				if (Boolean(this.getValue) === false) {
					this.selectedOption = null;
				}
			},
		},
		data: () => ({ isDropdownOpen: false, selectedOption: null }),
		methods: {
			selectValue(el) {
				this.selectedOption = el;
				this.$emit("update:modelValue", this.selectedOption);

				this.closeDropdown();
			},
			closeDropdown() {
				this.isDropdownOpen = false;
			},
		},
		directives: { ClickAway: directive },
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
				border-color: $dark;
				transition: all 0.2s ease;
			}
			&.open {
				transition: all 0.2s ease;
			}
			&-text {
				&.selected {
					color: $dark;
				}
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
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 1rem;
			padding: 3rem;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 0;
			width: 100%;
			top: calc(100% + 1rem);
			border-radius: 0.5rem;
			overflow: hidden;
			background-color: $white;
			box-shadow: $shadow;
			transition: all 0.2s ease;
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
