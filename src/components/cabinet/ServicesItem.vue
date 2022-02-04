<template>
	<div class="service" :class="bg">
		<h2 class="service__title">{{ title }}</h2>
		<p class="service__description">{{ description1 }}</p>
		<p class="service__description">{{ description2 }}</p>
		<v-button :text="'Подробнее'" :class="btn"></v-button>
	</div>
</template>

<script>
	import VButton from "../general/v-button.vue";

	export default {
		name: "Service",
		components: {
			VButton,
		},
		props: {
			bg: String,
			title: String,
			description1: String,
			description2: String,
			btn: String,
		},
	};
</script>

<style lang="scss" scoped>
	.service {
		padding: 3.5rem 7rem 5.2rem 7rem;
		border-radius: 3rem;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		+ .service {
			margin-top: 2.3rem;
		}
		&__title {
			font-size: var(--text-30);
			font-weight: 600;
			margin-bottom: 3rem;
		}
		&__description {
			font-size: var(--text-20);
			line-height: 2.4rem;
			font-weight: 500;
			&:nth-child(3) {
				margin-bottom: 2.3rem;
			}
		}
		.button {
			width: 17rem;
			// background-color: var(--blue);
			// color: var(--white);
		}
		&.blue {
			background-color: var(--blue);
			color: var(--white);
			.button {
				color: var(--blue);
			}
		}
		&.gray {
			background-color: var(--light-gray);
		}
	}
</style>
