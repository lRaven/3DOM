<template>
	<section class="banner">
		<div class="banner__container center">
			<div class="banner__description">
				<h1 class="banner__title">Trade-in</h1>
				<h2 class="banner__subtitle">
					Trade-in — это программа, которая поможет обменять вашу
					старую квартиру на новую
				</h2>
				<Btn :text="'Оформить заявку'" class="blue"></Btn>
			</div>
			<div class="banner__img"></div>
			<div class="banner__footer">
				<div class="banner__info">
					<h3 class="banner__info-title">Услуга страхования</h3>
					<h4 class="banner__info-subtitle">
						Финансовая защита всех участников сделки
					</h4>
				</div>
				<div class="banner__info">
					<h3 class="banner__info-title">Независимая оценка жилья</h3>
					<h4 class="banner__info-subtitle">
						Финансовая защита всех участников сделки
					</h4>
				</div>
				<div class="banner__info">
					<h3 class="banner__info-title">Собираем документы</h3>
					<h4 class="banner__info-subtitle">
						Финансовая защита всех участников сделки
					</h4>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Btn from "../general/Btn.vue";

	export default {
		name: "Banner",
		components: {
			Btn,
		},
	};
</script>

<style lang="scss" scoped></style>
