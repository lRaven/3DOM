<template>
	<section class="the-price">
		<div class="the-price__container center">
			<div class="the-price__calculate">
				<h2 class="the-price__title" v-once>Узнайте цену квартиры</h2>
				<h3 class="the-price__subtitle" v-once>
					Укажите данные квартиры<br />
					и узнайте цену
				</h3>
				<div class="the-price__rooms">
					<p v-once>Количество комнат</p>
					<TextRadio
						v-for="room in rooms"
						:key="room.id"
						:description="room.description"
						radioGroup="rooms"
					></TextRadio>
				</div>
				<div class="the-price__area">
					<p class="the-price__area-description">Площадь</p>
					<v-input :isGray="true" type="number" placeholder="м²"></v-input>
				</div>

				<v-dropdown
					:description="'Выберите один из наших проектов:'"
					:selected="'Выберите из списка'"
					:options="['АКАДЕМИЧЕСКИЙ']"
				></v-dropdown>

				<div class="the-price__slider">
					<p class="the-price__slider-description">
						Укажите примерную стоимость, млн руб
					</p>
					<v-slider
						:params="{
							isMinVisible: true,
							min: 2.2,
							max: 100,
							value: 22.2,
							step: 0.2,
						}"
					></v-slider>
				</div>
				<v-button
					text="Узнать цену"
					@click="this.$emit('openPopup')"
				></v-button>
			</div>
			<img src="/img/trade-in/price-img.svg" alt="" v-once />
		</div>
	</section>
</template>

<script>
	export default {
		name: 'ThePrice',
		setup() {
			const rooms = [
				{ id: 1, description: '1' },
				{ id: 2, description: '2' },
				{ id: 3, description: '3' },
				{ id: 4, description: '4' },
				{ id: 5, description: '5+' },
			];

			return {
				rooms,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-price {
		background: linear-gradient(
			180deg,
			$white 0%,
			rgba(237, 245, 253, 1) 8%,
			rgba(237, 245, 253, 1) 92%,
			rgba(255, 255, 255, 1) 100%
		);
		&__container {
			display: flex;
			gap: 2rem;
			align-items: center;
			justify-content: space-between;
		}
		&__rooms {
			font-size: 1.8rem;
			display: grid;
			grid-template-columns: repeat(5, max-content);
			grid-gap: 1rem;
			justify-content: space-between;
			p {
				grid-column: 1/6;
			}
		}
		&__calculate {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, max-content) max-content;
			grid-column-gap: 2.7rem;
			background-color: $white;
			border-radius: 3rem;
			padding: 8rem 6rem 10rem 6rem;
			width: max-content;
			color: #979797;
			.v-dropdown {
				grid-column: 1/3;
				margin-top: 5rem;
			}
			.v-button {
				margin-top: 5rem;
				padding: 2rem 8rem;
				border-radius: 3rem;
				font-size: 1.8rem;
			}
		}
		&__title {
			grid-column: 1/3;
			color: #52555a;
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&__subtitle {
			grid-column: 1/3;
			font-size: 2.5rem;
			font-weight: 500;
			margin-bottom: 5rem;
		}
		&__area {
			&-description {
				margin-bottom: 1.3rem;
				font-size: 1.8rem;
			}
		}
		&__slider {
			grid-column: 1/3;
			margin-top: 5rem;
			&-description {
				font-size: 1.5rem;
				color: $gray;
				font-weight: 600;
				margin-bottom: 1.3rem;
			}
		}
	}
</style>

<style lang="scss">
	.the-price {
		&__calculate {
			.v-radio__fake {
				padding: 0;
				height: 4.5rem;
				width: 4.5rem;
				border-radius: 50%;
			}
		}
		&__rooms {
			.text-radio {
				&__fake {
					padding: 0;
					border-radius: 50%;
					height: 5rem;
					width: 5rem;
				}
			}
		}
	}
</style>
