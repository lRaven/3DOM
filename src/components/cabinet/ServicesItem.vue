<template>
	<div class="services-item" :class="color">
		<h2 class="services-item__title">{{ title }}</h2>
		<p class="services-item__description">{{ description }}</p>
		<v-button
			text="Подробнее"
			:color="buttonColor"
			@click="this.$emit('buttonAction')"
		></v-button>
	</div>
</template>

<script>
	export default {
		name: "ServicesItem",
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

	.services-item {
		padding: 3.5rem 7rem 5.2rem 7rem;
		border-radius: 3rem;
		box-shadow: $shadow;
		overflow: hidden;
		@media (max-width: 767px) {
			padding: 2rem 1.5rem;
		}
		+ .services-item {
			margin-top: 2.3rem;
		}
		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 3rem;
			white-space: pre-wrap;
			line-height: 1.3;
			@media (max-width: 767px) {
				font-size: 2.4rem;
				margin-bottom: 2rem;
			}
		}
		&__description {
			font-size: 2rem;
			line-height: 2.4rem;
			font-weight: 500;
			margin-bottom: 2.3rem;
			white-space: pre-wrap;
			@media (max-width: 767px) {
				font-size: 1.6rem;
			}
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
