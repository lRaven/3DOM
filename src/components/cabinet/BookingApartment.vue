<template>
	<div
		class="apartment"
		v-for="apartment in apartments"
		:key="apartment.id"
		@click="this.id = apartment.booking_id"
	>
		<div class="apartment__header">
			<div class="apartment__close" @click="remove(apartment.booking_id)">
				<img src="/img/icon/cabinet/close.svg" alt="" />
			</div>
			<div class="apartment__layout">
				<img :src="apartment.image" alt="" />
			</div>
			<div class="apartment__rooms">
				<div v-if="apartment.type === 5">
					<p>Студия</p>
				</div>
				<div v-else>
					<p>{{ apartment.type }}-комнатная</p>
				</div>
				<p>
					Предварительное бронирование истекает
					{{ apartment.expiration_date }}
				</p>
			</div>
			<div class="apartment__area">
				<div><p>Площадь</p></div>
				<p>{{ apartment.area }} м2</p>
			</div>
			<div class="apartment__floor">
				<div><p>Этаж</p></div>
				<p>{{ apartment.floor }}</p>
			</div>
			<div class="apartment__project">
				<div>
					<p>Проект</p>
				</div>
				<p>Академический</p>
			</div>
			<div class="apartment__section">
				<div><p>Секция</p></div>
				<p>{{ apartment.section }}</p>
			</div>
			<v-button
				:text="'Платное бронирование'"
				:type="'button'"
				class="blue"
			></v-button>
			<div class="apartment__price">
				<span>Стоимость:</span>
				<p>4 014 433 руб.</p>
			</div>
		</div>
		<div class="apartment__body">
			<h2 class="apartment__stage">Ход строительства:</h2>
			<div class="apartment__gallery">
				<div class="apartment__photos">
					<div class="apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos1.jpg" alt="" />
					<div class="apartment__date">12.12.2012</div>
				</div>
				<div class="apartment__photos">
					<div class="apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos2.jpg" alt="" />
					<div class="apartment__date">12.12.2012</div>
				</div>
				<div class="apartment__photos">
					<div class="apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos3.jpg" alt="" />
					<div class="apartment__date">12.12.2012</div>
				</div>
				<div class="apartment__photos">
					<div class="apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos4.jpg" alt="" />
					<div class="apartment__date">12.12.2012</div>
				</div>
			</div>
			<v-button
				:text="'Подробнее'"
				:type="'button'"
				class="blue"
			></v-button>
		</div>
	</div>
</template>

<script>
	import vButton from "@/components/UI/general/v-button.vue";
	import { removeReservation } from "@/api/booking";
	import { mapState } from "vuex";

	export default {
		name: "BookingApartment",
		components: { vButton },
		data: () => ({ id: null }),
		computed: {
			...mapState({
				apartments: (state) => state.cabinet.booking,
			}),
		},
		methods: {
			//* отмена бронирования
			remove(id) {
				removeReservation(id);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.apartment {
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
		border-radius: 3rem;

		&__header {
			display: grid;
			grid-template-columns: 19rem repeat(5, max-content);
			grid-template-rows: 10rem 5rem;
			justify-content: space-between;
			grid-column-gap: 3rem;
			grid-row-gap: 5rem;
			position: relative;
			padding: 4rem 7.4rem 4.5rem 7.4rem;
			border-bottom: 1px solid #c4c4c4;
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

		&__info {
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

		&__rooms {
			font-weight: 600;

			p:nth-child(1) {
				font-size: 2.5rem;
			}

			p:nth-child(2) {
				position: relative;
				top: -0.4rem;
				max-width: 18rem;
				color: $blue;
				line-height: 2rem;
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

		&__price {
			grid-area: 2/5/2/7;
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
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

		&__body {
			padding: 3.5rem 6.4rem 6.2rem 6.4rem;
			display: flex;
			flex-direction: column;

			.button {
				align-self: flex-end;
			}
		}

		&__stage {
			font-size: 2.5rem;
			font-weight: 600;
			margin-bottom: 1rem;
		}

		&__gallery {
			display: grid;
			grid-gap: 2rem;
			grid-template-columns: repeat(2, 1fr);
			margin-bottom: 4.5em;
		}

		&__photos {
			position: relative;
			display: flex;
			flex-direction: column;

			img {
				border-radius: 2.5rem;
				overflow: hidden;
			}

			&-sum {
				display: flex;
				gap: 0.5rem;
				align-self: flex-end;
				margin-bottom: 1rem;
				color: #979797;
				font-weight: 600;
				font-size: 1.6rem;
			}
		}

		&__date {
			position: absolute;
			bottom: 0.6rem;
			right: 0.6rem;
			background-color: #20201f;
			color: #dfdfdf;
			font-size: 1.6rem;
			font-weight: 600;
			padding: 1rem 2.2rem;
			border-radius: 2.5rem;
		}
	}

	.button {
		border-radius: 1rem;
		font-weight: 500;
	}
</style>
