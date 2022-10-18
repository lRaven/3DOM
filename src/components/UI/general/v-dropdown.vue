<template>
	<div
		class="v-dropdown"
		@click="
			isDropdownOpen === true
				? (isDropdownOpen = false)
				: (isDropdownOpen = true)
		"
		v-click-away="closeDropdown"
	>
		<p class="v-dropdown__description">{{ description }}</p>
		<div class="v-dropdown__selected" :class="{ open: isDropdownOpen }">
			<p
				class="v-dropdown__selected-value"
				:class="{ selected: this.new_option !== null }"
			>
				{{ new_option === null ? selected : new_option }}
			</p>
			<div class="v-dropdown__arrow" :class="{ open: isDropdownOpen }">
				<img src="/img/icons/general/arrow.svg" alt="" />
			</div>
		</div>
		<div class="v-dropdown__content" :style="`height: ${contentHeight}rem`">
			<div
				class="v-dropdown__item"
				v-for="item in options"
				:key="item"
				@click="setOption(item)"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
	import { directive } from 'vue3-click-away';

	export default {
		name: 'vDropdown',
		props: {
			description: String,
			selected: String,
			options: Array,
		},
		computed: {
			contentHeight() {
				if (this.isDropdownOpen) {
					if (this.optionsLength >= 4) {
						return 14.4;
					} else {
						return 3.6 * this.optionsLength;
					}
				} else {
					return 0;
				}
			},
			optionsLength() {
				return this.options.length;
			},
		},
		data: () => ({
			isDropdownOpen: false,
			new_option: null,
		}),
		methods: {
			closeDropdown() {
				this.isDropdownOpen = false;
			},

			//* запись в selected значения выбранного элемента
			setOption(value) {
				this.new_option = value;
				this.$emit('update:modeValue', value);
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
			font-weight: 600;
			margin-bottom: 1.3rem;
		}
		&__selected {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 2rem;
			padding: 1.5rem 2rem;
			background-color: $light-gray;
			color: $middle-gray;
			font-size: 1.6rem;
			font-weight: 600;
			transition: all 0.7s ease;
			&-value {
				&.selected {
					color: $gray;
				}
			}

			&.open {
				border-radius: 2rem 2rem 0 0;
				transition: all 0.1s ease;
			}
		}
		&__arrow {
			user-select: none;
			cursor: pointer;
			padding: 0 1rem;
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
			overflow-y: auto;
			overflow-x: hidden;
			transition: all 0.2s ease;
			&.open {
				height: 14.4rem;
			}
		}
		&__item {
			cursor: pointer;
			display: block;
			padding: 1rem 2rem;
			background-color: $light-gray;
			color: $dark;
			font-size: 1.6rem;
			font-weight: 600;
			transition: all 0.2s ease;
			&:hover {
				transition: all 0.3s ease;
				background-color: $middle-gray;
				color: $white;
			}
		}
	}
</style>
