<template>
	<section class="layout">
		<div class="layout__container center">
			<div class="layout__item">
				<img
					src="img/general/mortgage-bottom.svg"
					alt=""
					class="animate__animated animate__fadeInLeft wow"
				/>
				<div
					class="layout__content animate__animated animate__fadeInRight wow"
				>
					<h2>Всё пойдёт по плану!</h2>
					<p>
						Вы можете выбрать планировку квартиры уже сейчас.
						Отметьте понравившийся план и проведите виртуальное
						путешествие по своей будущей квартире. Мало того, вы
						можете выбрать из нескольких вариантов готовой отделки
						квартиры, как всего комплекса работ, так и отдельных
						элементов, комнат, помещений.
					</p>
					<v-button
						class="blue"
						:type="'button'"
						text="Смотреть"
					></v-button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import VButton from "./v-button.vue";

	export default {
		name: "Layout",
		components: {
			VButton,
		},
	};
</script>

<style lang="scss" scoped>
	.layout {
		padding-top: 1.5rem;
		min-height: calc(100vh - 14rem);
		&__item {
			display: flex;
			gap: 10rem;
			background-color: var(--light-gray);
			border-radius: 2.5rem;
			padding: 1.6rem 3rem;
		}
		&__content {
			position: relative;
			width: 100%;
			padding-bottom: 7rem;
			h2 {
				font-size: var(--text-42);
				font-weight: 600;
				color: var(--dark);
				margin-bottom: 3rem;
			}
			p {
				font-size: var(--text-17);
				font-weight: 600;
				line-height: 2rem;
				color: var(--gray);
				max-width: 53rem;
			}
			.button {
				position: absolute;
				min-width: 15.6rem;
				right: 2.5rem;
				bottom: 0.8rem;
			}
		}
	}
</style>
