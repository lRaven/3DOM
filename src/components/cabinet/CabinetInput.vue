<template>
	<input
		:type="type"
		:placeholder="placeholder"
		class="input"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "Input",
		props: {
			type: String,
			placeholder: String,
		},
		// emits: ["update:modelValue"],
	};
</script>

<style lang="scss" scoped>
	.input {
		height: 6.1rem;
		border: 0.1rem solid #979797;
		border-radius: 1rem;
		padding: 1.5rem 3rem;
		font-size: var(--text-22);
		transition: all 0.2s ease;
		&:invalid {
			border-color: #f4364c;
			&:hover,
			&:focus {
				border-color: #f4364c;
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
