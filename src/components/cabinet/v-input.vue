<template>
	<input
		:type="type"
		:placeholder="placeholder"
		class="v-input"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			type: String,
			placeholder: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-input {
		height: 6.1rem;
		border: 0.1rem solid #979797;
		border-radius: 1rem;
		padding: 1.5rem 3rem;
		font-size: 2.2rem;
		transition: all 0.2s ease;

		&:invalid {
			border-color: var(--red);
			&:hover,
			&:focus {
				border-color: var(--red);
			}
		}
		&:hover {
			border-color: var(--dark);
			transition: all 0.3s ease;
		}
		&:focus {
			border-color: var(--dark);
			transition: all 0.3s ease;
		}
	}
</style>
