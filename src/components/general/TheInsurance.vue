<template>
	<section class="the-insurance" id="insurance">
		<div class="the-insurance__container center">
			<div class="the-insurance__header" v-once>
				<h2 data-aos="fade-up" class="the-insurance__title">
					Страхование недвижимости
				</h2>
				<h3 data-aos="fade-up" class="the-insurance__subtitle">
					При оформлении ипотеки страхование недвижимости является
					требованием закона.
				</h3>
			</div>

			<div class="the-insurance__body">
				<form data-aos="fade-right" class="the-insurance__form">
					<h4 class="the-insurance__form-title" v-once>
						Оформить страхование
					</h4>
					<p class="the-insurance__form-text" v-once>
						Приведенные расчёты актуальны<br />
						при полученом праве собственности.
					</p>
					<v-dropdown
						:description="'Тип страхования'"
						:selected="'Выберите из списка'"
						:options="['1', '2', '3', '4']"
					></v-dropdown>
					<v-dropdown
						:description="'Банк кредитора'"
						:selected="'Выберите из списка'"
						:options="['1', '2', '3', '4']"
					></v-dropdown>
					<v-dropdown
						:description="'Выберите пол'"
						:selected="'Женский'"
						:options="['Мужской', 'Женский']"
					></v-dropdown>
					<v-input
						:type="'number'"
						:maxlength="3"
						:max="100"
						:min="18"
						:text="'Укажите возраст'"
					></v-input>
					<v-button
						text="Оформить"
						type="button"
						@click="this.$emit('openPopup')"
					></v-button>
				</form>
				<p
					data-aos="fade-up"
					class="the-insurance__subtitle-mobile"
					v-once
				>
					При оформлении ипотеки страхование недвижимости является
					требованием закона.
				</p>
				<img
					data-aos="fade-left"
					src="/img/general/insurance-img.png"
					alt=""
					class="the-insurance__img"
					v-once
				/>
			</div>
		</div>
	</section>
</template>

<script>
	import vInput from "@/components/UI/general/v-input.vue";

	export default {
		name: "TheInsurance",
		components: { vInput },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-insurance {
		color: $dark;
		&__container {
		}
		&__header {
			margin-bottom: 5rem;
		}
		&__title {
			font-size: 5rem;
			font-weight: 600;
			margin-bottom: 1.5rem;
		}
		&__subtitle {
			font-size: 2.5rem;
			font-weight: 500;
			max-width: 78rem;
			line-height: 1.2;
			&-mobile {
				display: none;
			}
		}
		&__body {
			display: grid;
			grid-template-columns: 45rem 1fr;
			gap: 2.5rem;
		}
		&__form {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 1.7rem;
			grid-row-gap: 1rem;
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 5rem 4rem 4rem 4rem;
			min-width: 45rem;
			&-title {
				grid-column: 1/3;
				font-size: 2.5rem;
				font-weight: 600;
				color: #52555a;
				margin-bottom: 2rem;
			}
			&-text {
				grid-column: 1/3;
				color: #52555a;
				font-size: 1.6rem;
				line-height: 1.4;
				margin-bottom: 2rem;
			}
			.v-dropdown {
				grid-column: 1/3;
				&:nth-child(5) {
					grid-column: 1/2;
				}
			}

			.blue {
				width: 16rem;
			}
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 3rem;
			box-shadow: $shadow;
		}
	}

	@media (max-width: 1023px) {
		.the-insurance {
			&__container {
			}
			&__header {
				margin-bottom: 0.7rem;
			}
			&__title {
			}
			&__subtitle {
				display: none;
				&-mobile {
					display: block;
					font-size: 1.8rem;
					line-height: 2.2rem;
					color: $gray;
				}
			}
			&__body {
				display: flex;
				flex-direction: column-reverse;
			}
		}
	}

	@media (max-width: 540px) {
		.the-insurance {
			padding: 1rem;
			&__title {
				font-size: 3rem;
			}
			&__form {
				padding: 1.8rem 1.5rem 3rem 1.5rem;
				grid-template-columns: 1fr;
				&-title {
					text-align: center;
				}
			}
			.v-button {
				justify-self: center;
				grid-column: 1/3;
			}
		}
	}

	@media (max-width: 490px) {
		.the-insurance {
			&__form {
				min-width: inherit;
			}
			.v-dropdown {
				&:nth-child(n) {
					grid-column: 1/3;
				}
				&:nth-child(5) {
					width: 18rem;
				}
			}
			.input-wrapper {
				width: 18rem;
			}
			.v-button {
				font-size: 1.6rem;
			}
		}
	}
</style>
