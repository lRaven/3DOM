<template>
	<div class="v-input input-wrapper" :class="customClass">
		<p class="input__description">{{ text }}</p>
		<input
			:type="type"
			:maxlength="maxlength"
			:min="min"
			:max="max"
			:placeholder="placeholder"
			class="input"
		/>
	</div>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			type: String,
			text: String,

			maxlength: Number,
			min: Number,
			max: Number,
			placeholder: String,

			customClass: String,
		},
	};
</script>

<style lang="scss" scoped>
	.input {
		background-color: var(--light-gray);
		padding: 2rem;
		border-radius: 2rem;
		font-size: 1.8rem;
		width: 100%;
		font-weight: 500;
		&:invalid {
			outline: 0.1rem solid var(--red);
			transition: all 0.2s ease;
		}
		&__description {
			margin-bottom: 1.3rem;
			font-size: 1.6rem;
			color: #979797;
		}
	}
	.thin {
		.input {
			padding: 1.15rem;
		}
	}
</style>
