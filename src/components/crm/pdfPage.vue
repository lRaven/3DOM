<template>
	<div class="wrapper">
		<div
			class="pdf"
			style="
				width: 21cm;
				height: 29.7cm;
				background-color: #fff;
				padding: 1.4cm 1.8cm 1.3cm 2.2cm;
				margin: auto;
				font-family: sans-serif;
			"
		>
			<div
				class="pdf__header"
				style="
					display: grid;
					grid-template-columns: 5cm 9cm 5cm;
					align-items: center;
					justify-content: space-between;
				"
			>
				<div
					class="pdf__header-side"
					style="
						margin-left: 0.2cm;
						border: 0.1mm solid #000;
						border-left: none;
						border-right: none;
						height: 2cm;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 0;
						margin-right: 0.2cm;
						width: 4.6cm;
					"
				>
					<img
						src="/img/icon/general/logo.svg"
						alt="logo"
						class="pdf__logo"
						style="width: 100%; vertical-align: top"
					/>
				</div>
				<div
					class="pdf__header-middle"
					style="
						text-align: center;
						box-shadow: 0 0 0.2cm rgba(0, 0, 0, 0.25);
						border-radius: 0.1cm;
						padding: 3mm 1mm;
						width: 9cm;
					"
				>
					<h1
						class="pdf__building"
						style="
							font-weight: 600;
							margin: 0 0 0.2cm 0;
							font-size: 0.5cm;
						"
					>
						Клубный дом «АКАДЕМИЧЕСКИЙ»
					</h1>
					<img
						:src="`/img/crm/full-section${apartment.section}.png`"
						alt=""
						class="pdf__full-scheme"
						style="width: 5cm; vertical-align: top"
					/>
					<p
						style="
							font-weight: 400;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						Волгоград, ул. Баррикадная, 1, секция
						{{ apartment.section }}, план 2-13 этажей.
					</p>
				</div>
				<div
					class="pdf__header-side"
					style="
						margin-left: 0.2cm;
						border: 0.1mm solid #000;
						border-left: none;
						border-right: none;
						height: 2cm;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 0 0 0 0.3cm;
						width: 4.6cm;
					"
				>
					<h2
						class="pdf__tel"
						style="
							font-size: 0.375cm;
							font-weight: 700;
							margin: 0 0 0.05cm 0;
						"
					>
						+7 (903) 315-57-37
					</h2>
					<h3
						class="pdf__address"
						style="
							font-size: 0.25cm;
							font-weight: 600;
							margin: 0 0 0.3cm 0;
						"
					>
						г. Волгоград, ул. Мира, 10, оф. 20.
					</h3>
					<p
						class="pdf__manager"
						style="font-size: 0.25cm; line-height: 1.4; margin: 0"
					>
						Ваш менеджер:<br />
						Потанина Елена Витальевна
					</p>
				</div>
			</div>

			<div
				class="pdf__main pdf__block"
				style="
					display: grid;
					grid-template-columns: 52% 1fr;
					box-shadow: 0 0 0.2cm rgba(0, 0, 0, 0.25);
					border-radius: 0.1cm;
					margin-top: 0.8cm;
					padding: 0.7cm 0.4cm;
					height: 12.5cm;
				"
			>
				<div class="pdf__section">
					<img
						:src="`/img/crm/section${apartment.section}-${this.number}.png`"
						alt="section"
						style="
							vertical-align: top;
							width: 100%;
							height: 100%;
							max-height: 12cm;
							object-fit: contain;
						"
					/>
				</div>
				<div
					class="pdf__section-description"
					style="position: relative; padding: 0 0 0.5cm 0.8cm"
				>
					<h2
						class="pdf__title"
						style="
							font-size: 0.375cm;
							border: 0.1mm solid #000;
							font-weight: 400;
							border-left: none;
							border-right: none;
							padding: 0.2cm 0;
							width: fit-content;
							line-height: 1.2;
							margin: 0 0 0.3cm 0;
						"
					>
						Описание дома<br />
						14-этажный монолитный дом.
					</h2>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						Текст.<br />
						Ни для кого не секрет, что главное в стройке — это
						локация проекта. Как говорят некоторые девелоперы, в
						стройке важны три вещи:
					</p>
					<h2 style="font-size: 0.375cm; font-weight: 400; margin: 0">
						<span style="font-weight: 300">location, </span>
						<span style="font-weight: 600">location</span> и еще раз
						<span style="font-weight: 600">location</span>.
					</h2>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0.25cm 0 0 0;
						"
					>
						Но помимо функциональных преимуществ локация может
						оказаться выгодна с точки зрения продвижения проекта.
						Сегодня строительный объект часто рассматривается как
						место производственного процесса. Коммуникации с
						потребителем при таком подходе ограничиваются паспортом
						объекта и знанием сторожами телефона отдела продаж.
					</p>
					<p
						style="
							margin: 0.25cm 0 0 0;
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
						"
					>
						А ведь стройка — это прекрасная возможность представить
						проект целевой аудитории на ранней стадии его реализации
						и сформировать поток желающих купить здесь квартиру. Да,
						именно купить. Имея опыт работы, мы можем с уверенностью
						утверждать: стройка продает! Особенно если у вас
						небольшой проект, в продвижении которого нецелесообразно
						использовать широкомасштабные рекламные кампании.
					</p>
					<p
						style="
							margin: 0.25cm 0 0 0;
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
						"
					>
						Вы когда-нибудь задумывались, сколько людей живет
						поблизости от вашей стройки или каждый день по пути на
						работу проезжает мимо?<br />
						А сколько из них хотят жить в этом районе и стремятся
						посмотреть, что там строится?
					</p>
					<p
						style="
							margin: 0.25cm 0 0 0;
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
						"
					>
						Именно от того, какие маркетинговые инструменты вы
						применяете, и будет во многом зависеть выбор
						покупателей.
					</p>
					<span
						style="
							margin: 0.25cm 0 0 0;
							display: block;
							width: 3.5cm;
							height: 0.1mm;
							background-color: #000;
						"
					></span>
				</div>
			</div>

			<div
				class="pdf__footer pdf__block"
				style="
					margin-top: 0.8cm;
					padding: 0.7cm 0.4cm;
					display: grid;
					grid-template-columns: 1fr 68%;
					grid-gap: 0.5cm;
					box-shadow: 0 0 0.2cm rgba(0, 0, 0, 0.25);
					border-radius: 0.1cm;
					padding: 0.32cm 0.5cm;
				"
			>
				<div class="pdf__footer-text">
					<h2
						class="pdf__title"
						style="
							border: 0.1mm solid #000;
							font-size: 0.375cm;
							border-left: none;
							border-right: none;
							padding: 0.2cm 0;
							width: 100%;
							line-height: 1.2;
							margin: 0 0 0.3cm 0;
						"
					>
						Описание квартиры<br />
						{{ apartment.section }}-я секция,
						{{ apartment.floor }}-й этаж,<br />
						<span
							class="pdf__rooms-type"
							v-if="apartment.type === 5"
						>
							Студия
						</span>
						<span class="pdf__rooms-type" v-else>
							{{ apartment.type }}-комнатная.
						</span>
					</h2>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						Строительный бизнес — это прежде всего доверительный
						бизнес. Давайте признаемся:
					</p>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						в большинстве случаев мы продаем не готовые квартиры. И
						даже вовсе не квартиры.
					</p>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						Мы продаем картинку, обещания, мечту жить лучше. Поэтому
						мы начали не с главного, а с важного — стройки.
					</p>
					<p
						style="
							font-weight: 500;
							font-size: 0.28125cm;
							line-height: 1.3;
							margin: 0;
						"
					>
						Стройка — это облик, который на период строительства
						является гарантом обещаний девелопера. Но рано или
						поздно она заканчивается, и на первое место выходит
						продукт. От его жизнеспособности и соответствия
						обещаниям зависит будущее компании. Итак, продукт
						первичен. Это лакмусовая бумажка
					</p>
					<h2
						class="pdf__price"
						style="
							font-size: 0.375cm;
							font-weight: 700;
							line-height: 1.5;
							border-bottom: 0.1mm solid #000;
							margin: 0;
							padding: 0.2cm 0;
						"
					>
						Стоимость квартиры:<br />
						{{ apartment.cost }} РУБ.
					</h2>
				</div>
				<img
					:src="apartment.image"
					alt="apartment"
					style="
						width: 100%;
						max-height: 9cm;
						object-fit: contain;
						justify-self: center;
						align-self: center;
						vertical-align: top;
					"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	import { getApartmentsOnTheFloor } from "@/api/academ";

	export default {
		name: "pdfPage",
		props: { apartment: Object },
		data: () => ({
			number: 0,
			section: [],
		}),
		computed: {
			...mapState({
				apartmentsOnFloor: (state) => state.crm.apartments_on_floor,
			}),
		},
		methods: {
			//* проверка этажа
			async checkFloor() {
				if (this.apartment.floor !== 14) {
					await getApartmentsOnTheFloor(this.apartment.floor);
					this.getSection();
				}
			},

			//* получение квартир выбраной секции
			getSection() {
				this.apartmentsOnFloor.forEach((apartment) => {
					if (apartment.section === this.apartment.section) {
						this.section.push(apartment);
					}
				});

				this.getOrdinalNumber();
			},

			//* установка порядкового номера квартиры в секции
			getOrdinalNumber() {
				for (let index = 0; index < this.section.length; index++) {
					if (this.apartment.id === this.section[index].id) {
						this.number = index;
					}
				}
			},
		},
		mounted() {
			this.checkFloor();
		},
	};
</script>

<style lang="scss" scoped>
	.wrapper {
		position: fixed;
		left: 0;
		right: 0;
		top: 0%;
		bottom: 0;
		z-index: 6;
	}
</style>
