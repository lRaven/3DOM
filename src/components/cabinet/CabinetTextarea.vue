<template>
	<textarea name="" class="textarea"></textarea>
</template>

<script>
	export default {
		name: "Textarea",
	};
</script>

<style lang="scss" scoped>
	.textarea {
		border: 0.1rem solid #979797;
		border-radius: 1rem;
		padding: 3rem 1.5rem;
		font-size: 2.2rem;
		min-height: 24rem;
		resize: vertical;
		transition: all 0.2s ease;

		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
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
