<template>
	<div class="favorites-apartment">
		<div
			class="favorites-apartment__close"
			@click="removeFavorite(apartment.favorite_id, this.sorted)"
		>
			<img src="/img/icon/cabinet/close.svg" alt="" />
		</div>
		<div class="favorites-apartment__layout">
			<img :src="apartment.image" alt="" />
		</div>
		<div class="favorites-apartment__rooms">
			<div>
				<p>
					{{
						apartment.type === 5
							? "Студия"
							: `${apartment.type}-комнатная`
					}}
				</p>
			</div>
			<div class="favorites-apartment__price">
				<span>Стоимость:</span>
				<p>{{ apartment.cost }}</p>
			</div>
		</div>
		<div class="favorites-apartment__area">
			<div><p>Площадь</p></div>
			<p>{{ apartment.area }} м2</p>
		</div>
		<div class="favorites-apartment__floor">
			<div><p>Этаж</p></div>
			<p>{{ apartment.floor }}</p>
		</div>
		<div class="favorites-apartment__project">
			<div>
				<p>Проект</p>
			</div>
			<p>Академический</p>
		</div>
		<div class="favorites-apartment__section">
			<div><p>Секция</p></div>
			<p>{{ apartment.section }}</p>
		</div>
		<v-button
			text="Получить консультацию"
			type="button"
			color="gray"
		></v-button>
		<v-button text="Забронировать" type="button"></v-button>

		<div class="favorites-apartment__link">
			<img src="/img/icon/cabinet/link.svg" alt="" />
		</div>
	</div>
</template>

<script>
	import { removeFavorite } from "@/api/favorite";

	export default {
		name: "FavoritesApartment",
		props: {
			sorted: String,
			apartment: {
				value: Object,
				required: true,
			},
		},
		methods: {
			removeFavorite,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.favorites-apartment {
		display: grid;
		grid-template-columns: 19rem repeat(5, max-content);
		grid-template-rows: 10rem 5rem;
		justify-content: space-between;
		grid-column-gap: 1.5rem;
		position: relative;
		padding: 4rem 7.4rem 4.5rem 7.4rem;
		border-radius: 3rem;
		box-shadow: $shadow;
		+ .favorites-apartment {
			margin-top: 2.3rem;
		}
		.blue {
			grid-area: 2/3/2/5;
			min-width: 20rem;
		}
		&__close {
			cursor: pointer;
			position: absolute;
			right: 1.6rem;
			top: 1.3rem;
			height: 2.7rem;
			img {
				height: 100%;
			}
		}
		&__layout {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			grid-area: 1/1/3/1;
			img {
				width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}
		&__price {
			grid-area: 2/5/2/7;
			display: flex;
			align-items: center !important;
			gap: 1rem;
			span {
				color: #979797;
				font-size: 1.6rem;
				font-weight: 500;
			}
			p {
				color: $blue;
				font-weight: 700;
				font-size: 1.8rem;
			}
		}
		&__rooms {
			font-weight: 600;
			p:nth-child(1) {
				font-size: 2.5rem;
			}
			p:nth-child(2) {
				color: $blue;
			}
		}
		&__rooms,
		&__area,
		&__floor,
		&__project,
		&__section {
			div {
				display: flex;
				align-items: center;
				margin-bottom: 1.5rem;
				height: 3rem;
			}
			*:nth-child(2) {
				font-weight: 600;
			}
			p {
				font-size: 1.6rem;
			}
		}
		&__project {
			margin-right: 4rem;
		}

		&__link {
			cursor: pointer;
			background-color: $blue;
			width: 4rem;
			height: 4rem;
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			align-self: center;
			transition: all 0.3s ease;

			&:hover {
				background-color: $middle-blue;
				box-shadow: $shadow;
				transition: all 0.3s ease;
			}
			img {
				width: 2rem;
				height: 2rem;
			}
		}
	}
	.v-button {
		align-self: center;
		border-radius: 1rem;
		font-weight: 500;
		padding: 1rem 4rem;
	}
</style>
