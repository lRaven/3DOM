<template>
	<div class="v-counter">
		<button
			class="v-counter__btn v-counter__minus"
			:class="{ active: value > getMin }"
			:disabled="value <= getMin"
			@click="value--"
		>
			<svg
				width="18"
				height="4"
				viewBox="0 0 18 4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="v-counter__btn-icon"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.25 2C0.25 1.30964 0.809644 0.75 1.5 0.75H16.5C17.1904 0.75 17.75 1.30964 17.75 2C17.75 2.69036 17.1904 3.25 16.5 3.25H1.5C0.809644 3.25 0.25 2.69036 0.25 2Z"
					:fill="value <= getMin ? '#AEB3BF' : '#007bfc'"
					class="v-counter__btn-path"
				/>
			</svg>
		</button>

		<input
			type="number"
			disabled
			class="v-counter__input"
			pattern="[0-9]+"
			v-model="value"
		/>

		<button
			class="v-counter__btn v-counter__plus"
			:class="{ active: value < getMax }"
			:disabled="value >= getMax"
			@click="value++"
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="v-counter__btn-icon"
			>
				<path
					d="M10.25 1.5C10.25 0.809644 9.69036 0.25 9 0.25C8.30964 0.25 7.75 0.809644 7.75 1.5V7.75H1.5C0.809644 7.75 0.25 8.30964 0.25 9C0.25 9.69036 0.809644 10.25 1.5 10.25H7.75V16.5C7.75 17.1904 8.30964 17.75 9 17.75C9.69036 17.75 10.25 17.1904 10.25 16.5V10.25H16.5C17.1904 10.25 17.75 9.69036 17.75 9C17.75 8.30964 17.1904 7.75 16.5 7.75H10.25V1.5Z"
					:fill="value >= getMax ? '#AEB3BF' : '#007bfc'"
					class="v-counter__btn-path"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	import { ref, watch } from 'vue';

	export default {
		name: 'vCounter',
		emits: ['update:modelValue'],
		props: {
			getMin: Number,
			getMax: Number,
			getValue: Number,
		},
		setup(props, { emit }) {
			const value = ref(props.getValue);
			watch(value, () => emit('update:modelValue', value.value));

			return {
				value,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables.scss';

	.v-counter {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		width: fit-content;
		&__input {
			text-align: center;
			width: 3.4rem;
			height: 3.4rem;
			border-radius: 1rem;
			background-color: #dfe1e6;
			font-size: 1.4rem;
			transition: all 0.2s ease;
			color: $gray;
			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				/* display: none; <- Crashes Chrome on hover */
				-webkit-appearance: none;
				margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
			}
			-moz-appearance: textfield;
			&:hover {
				border-color: $dark;
				-moz-appearance: number-input;
			}
			&:focus {
				border-color: $blue;
			}
			&:invalid {
				border-color: $red;
			}
		}
		&__btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 3.4rem;
			height: 3.4rem;
			border-radius: 50%;
			border: 0.1rem solid $middle-gray;
			background-color: transparent;
			transition: all 0.2s ease;
			&-path {
				transition: all 0.2s ease;
			}
			&-icon {
				width: 40%;
				height: 40%;
			}
			&.active {
				cursor: pointer;
				border-color: $blue;
			}
		}
	}
</style>
