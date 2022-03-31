<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<div class="apartments">
				<div class="apartments-floor">
					<SectionFloor />
				</div>
				<div class="apartments-sections">
					<div class="apartments-sectionOne">
						<SectionOne
							@showDialog="showDialog"
							@showDialogApartment="showDialogApartment"
						/>
					</div>
					<div class="apartments-sectionTwo">
						<SectionTwo
							@showDialog="showDialog"
							@showDialogApartment="showDialogApartment"
						/>
					</div>
					<div class="apartments-sectionThree">
						<SectionThree
							@showDialog="showDialog"
							@showDialogApartment="showDialogApartment"
						/>
					</div>
				</div>
				<div class="colorsTypeObject">
					<div class="colorsTypeObject-name">Цвет типа объекта</div>
					<div class="colorsTypeObject-Type1">
						<TypeList v-bind:text="'Квартиры'" colors="#D5BFA8" />
					</div>
					<div class="colorsTypeObject-Type2">
						<TypeList v-bind:text="'Коммерция'" colors="#9FA8DA" />
					</div>
					<div class="colorsTypeObject-Type3">
						<TypeList
							v-bind:text="'Кладовки и машиноместа'"
							colors="#757575"
						/>
					</div>
					<div class="colorsTypeObject-Type4">
						<TypeList
							v-bind:text="'Забронированный объект любого типа'"
							colors="#BDBDBD"
						/>
					</div>
					<div class="colorsTypeObject-Type5">
						<TypeList
							v-bind:text="'Переуступка или подрядчик'"
							colors="#CFE8FC"
						/>
					</div>
					<div class="colorsTypeObject-Type6">
						<TypeList v-bind:text="'Акция'" colors="#FFDCE0" />
					</div>
					<div class="colorsTypeObject-Type7">
						<TypeList
							v-bind:text="'Перепланировка или объединение квартир'"
							colors="#00212D"
						/>
					</div>
					<div class="colorsTypeObject-Type8">
						<TypeList
							v-bind:text="'Не подходит под запрос'"
							colors="var(--light-gray)"
						/>
					</div>
				</div>
			</div>
			<transition>
				<section-popup
					v-if="isSectionReview"
					@showDialog="showDialog"
					@closeDialog="closeDialog"
					@showDialogApartment="showDialogApartment"
					:section="section"
					style="z-index: 4"
				></section-popup>
			</transition>
			<transition>
				<apartment-popup
					v-if="isApartmentReview"
					@closeDialogApartment="closeDialogApartment"
					:apartment="apartment"
					style="z-index: 4"
				></apartment-popup>
			</transition>
		</main>
		<div class="footer">
			<the-footer />
		</div>
		<mortgage-calculator
			closeIcon="img/icon/academ/close.svg"
		></mortgage-calculator>
	</div>
</template>

<script>
	import store from "../store";

	import TheHeader from "../components/academ/TheHeader.vue";

	import SectionOne from "../components/academ/ApartmentsPage/SectionOne";
	import SectionTwo from "../components/academ/ApartmentsPage/SectionTwo";
	import SectionThree from "../components/academ/ApartmentsPage/SectionThree";
	import SectionFloor from "../components/academ/ApartmentsPage/SectionFloor";
	import TypeList from "../components/academ/ApartmentsPage/TypeList";
	import sectionPopup from "../components/crm/sectionPopup";
	import apartmentPopup from "../components/crm/apartmentPopup";

	import MortgageCalculator from "../components/academ/MortgageCalculator.vue";

	import TheFooter from "../components/academ/TheFooter";

	export default {
		store,
		components: {
			TheHeader,

			SectionOne,
			SectionTwo,
			SectionThree,
			SectionFloor,
			TypeList,
			sectionPopup,
			apartmentPopup,

			MortgageCalculator,

			TheFooter,
		},
		data() {
			return {
				floor: 4,
				section: null,
				apartment: null,
				isSectionReview: false,
				isApartmentReview: false,
			};
		},

		methods: {
			selectFloor(floor) {
				this.floor = floor;
			},

			async showDialogApartment(id, section) {
				document.querySelector("body").classList.add("locked");
				this.isApartmentReview = true;
				for (let i of store.getters.APARTMENTS) {
					if (i.id === id) {
						this.apartment = i;
						this.section = section;
					}
				}
				this.rooms = this.apartment.type;
				this.number = this.apartment.number;
				this.area = this.apartment.area;
			},
			closeDialogApartment() {
				this.isApartmentReview = false;
			},

			showDialog(section) {
				document.querySelector("body").classList.add("locked");
				this.isSectionReview = true;
				this.section = section;
			},
			closeDialog() {
				this.isSectionReview = false;
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	main {
		display: flex;
		flex-direction: column;
		.footer {
			flex: 0 0 auto;
		}

		.apartments {
			height: 100%;
			flex: 1 0 auto;
			border: 0.1rem solid var(--light-gray);
			min-width: 100%;
			min-height: 20rem;
			overflow-x: hidden;
			display: grid;
			grid-template-columns: 4rem 1fr;
			grid-template-rows: repeat(2, max-content);
			&-floor {
				grid-row: 1;
			}
			&-sections {
				display: grid;
				overflow-x: auto;
				padding-bottom: 1rem;
			}
			&-sectionOne {
				grid-column: 2;
			}
			&-sectionTwo {
				grid-column: 3;
				margin-left: 1rem;
			}
			&-sectionThree {
				grid-column: 4;
				margin-left: 1rem;
			}
			.ApartmentItem {
				grid-row: 2;
			}
		}
		.colorsTypeObject {
			margin-top: 5rem;
			display: grid;
			grid-template-rows: repeat(4, 1fr);
			grid-template-columns: repeat(3, max-content);
			width: 88.5rem;
			height: 12.8rem;
			border: 0.1rem solid var(--dark);
			margin-left: 4.1rem;
			margin-bottom: 5rem;
			&-name {
				display: flex;
				justify-content: center;
				align-items: center;
				font-style: normal;
				font-weight: bold;
				font-size: 1.3rem;
				line-height: 1.4rem;
				color: #000;
				grid-row: 1;
				grid-column: 1 / 5;
			}
			&-Type1 {
				grid-row: 2;
				grid-column: 1;
			}
			&-Type2 {
				grid-row: 3;
				grid-column: 1;
			}
			&-Type3 {
				grid-row: 4;
				grid-column: 1;
			}
			&-Type4 {
				grid-row: 2;
				grid-column: 2;
			}
			&-Type5 {
				grid-row: 3;
				grid-column: 2;
			}
			&-Type6 {
				grid-row: 4;
				grid-column: 2;
			}
			&-Type7 {
				grid-row: 2;
				grid-column: 3;
			}
			&-Type8 {
				grid-row: 3;
				grid-column: 3;
			}
		}
	}
</style>
