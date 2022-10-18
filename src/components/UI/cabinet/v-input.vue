<template>
	<div class="v-input">
		<input
			class="v-input__input"
			:class="{
				transparent: isTransparent,
				password: type === 'password',
			}"
			:disabled="disabled"
			:type="input_type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>

		<label
			class="v-input__eye"
			:class="{ disabled: disabled }"
			v-if="type === 'password'"
		>
			<input
				type="checkbox"
				class="v-input__eye-checkbox"
				v-model="isPasswordVisible"
			/>
			<img
				class="v-input__eye-icon"
				:src="`/img/icons/cabinet/eye-${
					isPasswordVisible ? 'open' : 'closed'
				}.svg`"
				:alt="`eye-${isPasswordVisible ? 'open' : 'closed'}`"
			/>
		</label>
	</div>
</template>

<script>
	export default {
		name: 'vInput',
		props: {
			isTransparent: {
				value: Boolean,
				default: false,
			},
			disabled: {
				value: Boolean,
				default: false,
			},
			modelValue: String,
			type: String,
			placeholder: String,
		},
		watch: {
			isPasswordVisible() {
				this.isPasswordVisible
					? (this.input_type = 'text')
					: (this.input_type = 'password');
			},
		},
		data() {
			return {
				input_type: this.type,
				isPasswordVisible: false,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-input {
		position: relative;
		&__input {
			border: 0.1rem solid $middle-gray;
			border-radius: 1rem;
			padding: 2rem;
			font-size: 1.8rem;
			transition: all 0.2s ease;
			width: 100%;
			@media (max-width: 767px) {
				padding: 1rem;
			}
			@media (max-width: 540px) {
				font-size: 1.4rem;
			}

			&.transparent {
				border-color: transparent;
				background-color: transparent;
				padding: 0 2rem;
				&:hover {
					border-color: transparent;
				}
			}
			&.password {
				padding-right: 5rem;
			}
			&:invalid {
				border-color: $red;
				&:hover,
				&:focus {
					border-color: $red;
				}
			}
			&:hover {
				border-color: $dark;
				transition: all 0.3s ease;
			}
			&:focus {
				border-color: $dark;
				transition: all 0.3s ease;
			}
		}

		&__eye {
			cursor: pointer;
			position: absolute;
			right: 2rem;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 2.5rem;
			width: 2.5rem;
			&.disabled {
				cursor: default;
				pointer-events: none;
			}
			&-checkbox {
				display: none;
			}
			&-icon {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
</style>
