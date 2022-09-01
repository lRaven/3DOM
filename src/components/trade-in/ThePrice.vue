<template>
	<section class="the-price">
		<div class="the-price__container center">
			<div class="the-price__calculate">
				<h2 class="the-price__title">Узнайте цену квартиры</h2>
				<h3 class="the-price__subtitle">
					Укажите данные квартиры<br />
					и узнайте цену
				</h3>
				<div class="the-price__rooms">
					<p>Количество комнат</p>
					<v-radio
						:items="[
							{ id: 1, text: '1' },
							{ id: 2, text: '2' },
							{ id: 3, text: '3' },
							{ id: 4, text: '4' },
							{ id: 5, text: '5+' },
						]"
						:name="'rooms'"
					></v-radio>
				</div>
				<v-input
					:text="'Площадь'"
					:type="'number'"
					:min="30"
					:placeholder="'м²'"
				></v-input>
				<v-dropdown
					:description="'Выберите один из наших проектов:'"
					:selected="'Выберите из списка'"
					:options="['АКАДЕМИЧЕСКИЙ']"
				></v-dropdown>
				<v-slider
					title="Укажите примерную стоимость, млн руб"
					:min="2.2"
					:max="100"
					:value="22.2"
					:step="0.2"
					class="min-max"
					:customClass="'pale'"
					:minMax="true"
				></v-slider>
				<v-button
					text="Узнать цену"
					@click="this.$emit('openPopup')"
				></v-button>
			</div>
			<img src="/img/trade-in/price-img.svg" alt="" />
		</div>
	</section>
</template>

<script>
	import vInput from "@/components/UI/general/v-input.vue";

	export default {
		name: "ThePrice",
		components: { vInput },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-price {
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(237, 245, 253, 1) 8%,
			rgba(237, 245, 253, 1) 92%,
			rgba(255, 255, 255, 1) 100%
		);
		padding: 5rem 1.5rem;
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
			justify-content: space-between;
			p {
				grid-column: 1/6;
				margin-bottom: 1rem;
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
			.v-dropdown,
			.min-max {
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
	}
</style>
