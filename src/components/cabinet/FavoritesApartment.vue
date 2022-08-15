<template>
	<div
		class="favorite"
		v-for="favorite in favorites"
		:key="favorite.favorite_id"
	>
		<div
			class="favorite__close"
			@click="remove(favorite.favorite_id, this.sorted)"
		>
			<img src="/img/icon/cabinet/close.svg" alt="" />
		</div>
		<div class="favorite__layout">
			<img :src="favorite.image" alt="" />
		</div>
		<div class="favorite__rooms">
			<div v-if="favorite.type === 5">
				<p>Студия</p>
			</div>
			<div v-else>
				<p>{{ favorite.type }}-комнатная</p>
			</div>
			<div class="favorite__price">
				<span>Стоимость:</span>
				<p>{{ favorite.cost }}</p>
			</div>
		</div>
		<div class="favorite__area">
			<div><p>Площадь</p></div>
			<p>{{ favorite.area }} м2</p>
		</div>
		<div class="favorite__floor">
			<div><p>Этаж</p></div>
			<p>{{ favorite.floor }}</p>
		</div>
		<div class="favorite__project">
			<div>
				<p>Проект</p>
			</div>
			<p>Академический</p>
		</div>
		<div class="favorite__section">
			<div><p>Секция</p></div>
			<p>{{ favorite.section }}</p>
		</div>
		<v-button
			text="Получить консультацию"
			type="button"
			color="gray"
		></v-button>
		<v-button text="Забронировать" type="button"></v-button>

		<div class="favorite__link">
			<img src="/img/icon/cabinet/link.svg" alt="" />
		</div>
	</div>
</template>

<script>
	import { removeFavorite } from "@/api/favorite";
	import { mapState } from "vuex";

	import vButton from "@/components/UI/general/v-button.vue";

	export default {
		name: "TheFavorite",
		components: { vButton },
		props: { sorted: String },
		computed: {
			...mapState({
				favorites: (state) => state.cabinet.favorites,
			}),
		},
		methods: {
			remove(id, sort) {
				removeFavorite(id, sort);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.favorite {
		display: grid;
		grid-template-columns: 19rem repeat(5, max-content);
		grid-template-rows: 10rem 5rem;
		justify-content: space-between;
		grid-column-gap: 1.5rem;
		position: relative;
		padding: 4rem 7.4rem 4.5rem 7.4rem;
		border-radius: 3rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
		+ .favorite {
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
		&__area {
		}
		&__floor {
		}
		&__project {
			margin-right: 4rem;
		}
		&__section {
		}

		&__link {
			cursor: pointer;
			background-color: $blue;
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			align-self: center;
			transition: all 0.3s ease;

			&:hover {
				background-color: $middle-blue;
				box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
				transition: all 0.3s ease;
			}
		}
	}
	.v-button {
		align-self: center;
		border-radius: 1rem;
		font-weight: 500;
		height: 4.5rem;
		padding: 1rem 4rem;
	}
</style>
