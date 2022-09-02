<template>
	<div class="steps-card">
		<div class="steps-card__list">
			<h2 data-aos="fade-up" class="steps-card__title">
				{{ title }}
			</h2>
			<div
				data-aos="fade-up"
				class="steps-card__list-item"
				v-for="item in checklist"
				:key="item.id"
			>
				<span class="steps-card__step">{{ item.id }}</span>
				<p class="steps-card__description">
					{{ item.description }}
				</p>
			</div>
		</div>

		<div data-aos="fade-left" class="steps-card__col">
			<img
				src="/img/trade-in/steps-img.svg"
				alt=""
				class="steps-card__img"
			/>
			<v-button
				:text="buttonText"
				type="button"
				@click="this.$router.push({ name: 'TradeIn' })"
			></v-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "StepsCard",
		props: {
			title: String,
			checklist: Array,
			buttonText: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.steps-card {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		margin-bottom: 6rem;
		background-color: $white;
		box-shadow: $shadow;
		border-radius: 3rem;
		padding: 6rem;
		@media (max-width: 1023px) {
			margin-bottom: 0;
			padding: 3rem;
			display: flex;
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 2.5rem;
		}
		@media (max-width: 767px) {
			align-items: center;
		}
		@media (max-width: 540px) {
			padding: 0.5rem 2rem 1.7rem 1.7rem;
		}

		&__list {
			&-item {
				display: flex;
				align-items: center;
				gap: 4rem;
				+ .steps-card__list-item {
					margin-top: 2rem;
				}
			}
		}
		&__col {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;
			.v-button {
				padding: 1.4rem 5rem;

				@media (max-width: 1023px) {
					display: none;
				}
			}
		}
		&__img {
			width: 100%;
		}
		&__title {
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 5rem;
			@media (max-width: 767px) {
				text-align: center;
			}
			@media (max-width: 540px) {
				font-size: 2.4rem;
				margin-bottom: 2rem;
			}
		}
		&__step {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 3.5rem;
			font-weight: 500;
			color: $blue;
			width: 5.5rem;
			min-width: 5.5rem;
			height: 5.5rem;
			border-radius: 50%;
			background-color: $light-gray;
			@media (max-width: 540px) {
				font-size: 3rem;
				width: 4.8rem;
				height: 4.8rem;
				min-width: 4.8rem;
			}
		}
		&__description {
			font-size: 1.8rem;
			@media (max-width: 540px) {
				font-size: 1.4rem;
				line-height: 1.7rem;
			}
		}
	}
</style>
