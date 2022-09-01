<template>
	<section class="the-rates center">
		<h2 class="the-rates__title">Пакетные предложения</h2>
		<h3 class="the-rates__subtitle">
			В рамках каждого пакета возможны корректировки по добавлению или
			вычету опций!
		</h3>
	</section>
</template>

<script>
	export default {
		name: "TheRates",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-rates {
		padding-top: 4rem;
		padding-bottom: 4rem;
		&__title {
			font-size: 4.2rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&__subtitle {
			margin-bottom: 7rem;
			font-size: 2.5rem;
			font-weight: 500;
			color: $gray;
		}
	}
</style>
