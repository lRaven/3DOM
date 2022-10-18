<template>
	<div
		class="v-dropdown"
		v-click-away="closeDropdown"
		:class="options.length === 0 || isDisabled ? 'disabled' : ''"
	>
		<div
			class="v-dropdown__selected"
			@click="
				isDropdownOpen === false
					? (isDropdownOpen = true)
					: (isDropdownOpen = false)
			"
		>
			<p class="v-dropdown__selected-text" :class="{ selected: selectedText }">
				{{ selectedText === null ? placeholder : selectedText }}
			</p>
			<div class="v-dropdown__arrow" :class="{ open: isDropdownOpen }">
				<img src="/img/icons/general/arrow.svg" alt="arrow" />
			</div>
		</div>
		<transition name="fade-up" mode="out-in">
			<ul class="v-dropdown__content" v-show="isDropdownOpen">
				<li
					class="v-dropdown__item"
					v-for="item in options"
					:key="item.id"
					@click="
						selectValue(
							item,
							`${showedValuePrefix ? showedValuePrefix : ''}${
								item[showedValue]
							}`
						)
					"
					:title="`${showedValuePrefix ? showedValuePrefix : ''}${
						item[showedValue]
					}`"
				>
					{{
						`${showedValuePrefix ? showedValuePrefix : ''}${item[showedValue]}`
					}}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	import { directive } from 'vue3-click-away';

	export default {
		name: 'vDropdown',
		props: {
			isDisabled: {
				value: Boolean,
				default: false,
			},
			placeholder: String,
			options: {
				value: Array,
				default: [],
			},

			sendValue: {
				value: [String, Number],
				default: 'id',
			},
			getValue: [String, Number, Object],

			showedValue: {
				value: String,
				default: 'description',
			},
			showedValuePrefix: {
				value: String,
				default: '',
			},
		},
		watch: {
			getValue: {
				handler() {
					if (Boolean(this.getValue) === false) {
						this.selectedEl = null;
						this.selectedText = null;
					} else {
						this.selectedEl = this.getValue;
						this.selectedText = this.getValue[this.showedValue];
					}
				},
				deep: true,
			},
		},
		data: () => ({
			isDropdownOpen: false,
			selectedText: null,
			selectedEl: null,
		}),
		methods: {
			closeDropdown() {
				this.isDropdownOpen = false;
			},

			selectValue(sendValue, text) {
				this.selectedText = text;
				this.selectedEl = { ...sendValue };

				this.$emit('update:modelValue', sendValue);
				this.closeDropdown();
			},
		},
		directives: { ClickAway: directive },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-dropdown {
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
			@media (max-width: 767px) {
				padding: 1rem;
			}
			@media (max-width: 540px) {
				font-size: 1.4rem;
			}
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
			@media (max-width: 540px) {
				padding: 0;
			}
			&.open {
				transform: rotate(180deg);
				transition: all 0.2s ease;
			}
		}
		&__content {
			position: absolute;
			left: 0;
			right: 0;
			top: calc(100% + 1rem);
			height: max-content;
			max-height: 17.4rem;
			width: 100%;
			border-radius: 0.5rem;
			overflow-y: auto;
			background-color: $white;
			box-shadow: $shadow;
			transition: all 0.1s ease;
			z-index: 2;
		}
		&__item {
			cursor: pointer;
			display: block;
			padding: 2rem;
			color: $dark;
			font-size: 1.8rem;
			font-weight: 500;
			transition: all 0.1s ease;
			@media (max-width: 767px) {
				padding: 1rem;
			}
			@media (max-width: 540px) {
				font-size: 1.4rem;
			}
			&:hover {
				transition: all 0.2s ease;
				background-color: #edf5fd;
			}
		}
	}
</style>
