<template>
	<section class="the-layout">
		<div class="the-layout__container center">
			<h2 class="the-layout__title">Всё пойдёт по плану!</h2>
			<img
				src="/img/general/layout-img.svg"
				alt=""
				class="the-layout__img animate__animated animate__fadeInLeft wow"
			/>
			<div
				class="the-layout__content animate__animated animate__fadeInRight wow"
			>
				<h2>Всё пойдёт по плану!</h2>
				<h3>Вы можете выбрать планировку квартиры уже сейчас.</h3>
				<p>
					Отметьте понравившийся план и проведите виртуальное
					путешествие по своей будущей квартире. Мало того, вы можете
					выбрать из нескольких вариантов готовой отделки квартиры,
					как всего комплекса работ, так и отдельных элементов,
					комнат, помещений.
				</p>
				<router-link
					class="animate__animated animate__fadeInUp wow"
					style="display: inline-block"
					:to="{
						name: 'Academ',
						params: { section: '#apartments' },
					}"
				>
					<v-button
						class="blue"
						:type="'button'"
						text="Смотреть планировки"
					></v-button>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	import vButton from "./v-button.vue";

	export default {
		name: "TheLayout",
		components: {
			vButton,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-layout {
		padding: 1.5rem;
		&__container {
			display: flex;
			gap: 1.5rem;
			align-items: center;
			justify-content: space-between;
			background-color: $white;
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			border-radius: 3rem;
			overflow: hidden;
			padding: 8rem;
		}
		&__title {
			display: none;
		}
		&__img {
			width: 50%;
		}
		&__content {
			position: relative;

			max-width: 56rem;
			h2 {
				font-size: 4.2rem;
				font-weight: 600;
				color: $dark;
				margin-bottom: 1.5rem;
			}
			h3 {
				font-weight: 600;
				color: $gray;
				font-size: 2.5rem;
				margin-bottom: 4.5rem;
			}
			p {
				font-size: 1.7rem;
				font-weight: 600;
				line-height: 2rem;
				color: $gray;
				max-width: 53rem;
				margin-bottom: 4rem;
			}
		}
	}

	@media (max-width: 1200px) {
		.the-layout {
			&__container {
				padding: 3rem;
			}
		}
	}

	@media (max-width: 1023px) {
		.the-layout {
			&__container {
				flex-direction: column;
			}
			&__title {
				align-self: flex-start;
				display: block;
				font-size: 3rem;
				font-weight: 600;
			}
			&__img {
				width: 100%;
			}

			&__content {
				max-width: 100%;
				h2 {
					display: none;
				}
			}
		}
	}

	@media (max-width: 540px) {
		.the-layout {
			padding: 1rem;
			&__container {
				padding: 2rem;
			}

			&__content {
				h3 {
					font-size: 1.8rem;
					line-height: 2.2rem;
					margin-bottom: 1.6rem;
				}
				p {
					font-size: 1.3rem;
					line-height: 1.5rem;
					margin-bottom: 2.6rem;
				}
				.button {
					width: 100%;
					font-size: 1.6rem;
				}
			}
		}
	}
</style>
