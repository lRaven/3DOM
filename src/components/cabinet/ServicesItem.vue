<template>
	<div class="service" :class="color">
		<h2 class="service__title">{{ title }}</h2>
		<p class="service__description">{{ description }}</p>
		<v-button
			text="Подробнее"
			:color="buttonColor"
			@click="this.$emit('buttonAction')"
		></v-button>
	</div>
</template>

<script>
	export default {
		name: "TheService",
		props: {
			color: {
				value: String,
				default: "blue",
			},
			title: {
				value: String,
				default: "title",
			},
			description: {
				value: String,
				default: "description",
			},
			buttonColor: {
				value: String,
				default: "blue",
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.service {
		padding: 3.5rem 7rem 5.2rem 7rem;
		border-radius: 3rem;
		box-shadow: $shadow;
		overflow: hidden;
		+ .service {
			margin-top: 2.3rem;
		}
		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 3rem;
		}
		&__description {
			font-size: 2rem;
			line-height: 2.4rem;
			font-weight: 500;
			margin-bottom: 2.3rem;
			white-space: pre-wrap;
		}
		.v-button {
			min-width: 17rem;
		}
		&.blue {
			background-color: $blue;
			color: $white;
		}
		&.gray {
			background-color: $light-gray;
		}
	}
</style>
