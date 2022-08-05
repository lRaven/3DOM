<template>
	<div class="v-dropdown" v-click-away="closeDropdown">
		<div
			class="v-dropdown__selected"
			@click="
				isDropdownOpened === false ? openDropdown() : closeDropdown()
			"
		>
			<p ref="selected">{{ selected }}</p>
			<div class="v-dropdown__arrow" ref="arrow">
				<img src="img/icon/general/arrow.svg" alt="arrow" />
			</div>
		</div>
		<transition name="fade-up" mode="out-in">
			<div class="v-dropdown__content" v-if="isDropdownOpened">
				<div
					class="v-dropdown__item"
					v-for="item in options"
					:key="item.id"
					@click="
						$emit('update:modelValue', item.id);
						setOption(item);
					"
				>
					{{ item.value || item.number }}
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import { directive } from "vue3-click-away";

	export default {
		name: "vDropdown",
		props: {
			selected: String,
			options: Array,
		},
		data() {
			return {
				isDropdownOpened: false,
				textValue: this.selected,
				value: null,
			};
		},
		methods: {
			openDropdown() {
				this.isDropdownOpened = true;
				this.$refs.arrow.classList.add("open");
			},

			closeDropdown() {
				this.isDropdownOpened = false;
				this.$refs.arrow.classList.remove("open");
			},

			//* запись в selected значения выбранного элемента
			setOption(value) {
				this.$refs.selected.textContent = value.value || value.number;
				this.value = value.id;
				this.closeDropdown();
			},
		},
		directives: { ClickAway: directive },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

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
			&:hover {
				border-color: $dark;
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
			right: 0;
			top: calc(100% + 1rem);
			height: max-content;
			max-height: 17.4rem;
			width: 100%;
			border-radius: 0.5rem;
			overflow-y: auto;
			background-color: $white;
			box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.25);
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
			&:hover {
				transition: all 0.2s ease;
				background-color: #edf5fd;
			}
		}
	}
</style>
