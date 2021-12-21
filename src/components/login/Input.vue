<template>
	<label class="input__container">
		<p class="input__text">{{ text }}</p>
		<input
			:type="type"
			:placeholder="placeholder"
			class="input"
			:name="name"
		/>
	</label>
</template>

<script>
	export default {
		name: "Input",
		props: {
			text: String,
			type: String,
			placeholder: String,
			name: String,
		},
	};
</script>

<style lang="scss" scoped>
	.input {
		&__container {
			font-size: var(--text-18);
		}
		&__text {
			color: #979797;
			font-weight: 500;
			margin-bottom: 1.3rem;
		}
		border-radius: 1rem;
		border: 0.1rem solid #c4c4c4;
		padding: 2rem 4rem;
		width: 100%;
		font-weight: 500;
		color: var(--dark);
		&::placeholder {
			font-weight: 500;
		}
	}
</style>
