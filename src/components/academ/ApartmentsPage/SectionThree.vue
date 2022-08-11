<template>
	<div>
		<div class="sectionThree">
			<div class="name" @click="showDialog(this.section)">Секция 3</div>
			<section-columns
				:parameters="column.type"
				v-for="column in apartment_columns"
				:key="column.id"
			></section-columns>
		</div>
		<div class="flat4k">
			<div v-for="apart in flat4k" :key="apart.number">
				<ApartmentItem
					@showDialog="showDialogApartment"
					:apartment="apart"
				/>
			</div>
		</div>
		<div class="flat">
			<div v-for="apart in apartments_in_section" :key="apart.number">
				<ApartmentItem
					@showDialog="showDialogApartment"
					:apartment="apart"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import sectionColumns from "@/components/academ/ApartmentsPage/SectionColumns";
	import ApartmentItem from "@/components/academ/ApartmentsPage/ApartmentItem";
	import { mapState } from "vuex";

	export default {
		components: {
			sectionColumns,
			ApartmentItem,
		},
		data: () => ({
			section: 3,
			apartment_columns: [
				{ id: 1, type: "2-К" },
				{ id: 2, type: "2-К" },
				{ id: 3, type: "1-К.СТ" },
				{ id: 4, type: "1-К" },
				{ id: 5, type: "1-К" },
				{ id: 6, type: "1-К" },
				{ id: 7, type: "2-К" },
				{ id: 8, type: "2-К" },
				{ id: 9, type: "1-К" },
			],
		}),
		computed: {
			...mapState({ apartments: (state) => state.academ.apartments }),

			apartments_in_section() {
				const apartments = [...this.apartments];

				//* получение 3 секции, кроме 4-комнатных квартир
				let sectionFilter = apartments.filter(
					(apart) => apart.section === 3 && apart.number < 241
				);

				//* переворот по оси y
				sectionFilter = sectionFilter.slice().reverse();

				//* переворот по оси x
				let subarray = [];
				while (sectionFilter.length)
					subarray.push(sectionFilter.splice(0, 9).slice().reverse());
				sectionFilter.length = 0;
				for (let i of subarray) {
					for (let j of i) {
						sectionFilter.push(j);
					}
				}

				return sectionFilter;
			},

			flat4k() {
				const apartments = [...this.apartments];
				//* получение 4-комнатных квартир
				return apartments.filter(
					(apart) =>
						apart.section === 3 &&
						(apart.number >= 241) & (apart.number <= 247)
				);
			},
		},
		methods: {
			showDialog() {
				this.$emit("showDialog", 3);
			},
			showDialogApartment(id) {
				this.$emit("showDialogApartment", id);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.flat {
		display: grid;
		grid-template-columns: repeat(9, max-content);
		grid-template-rows: repeat(12, 4rem);
	}
	.flat4k {
		display: grid;
		grid-template-columns: repeat(9, max-content);
	}
	.sectionThree {
		display: grid;
		grid-column: 2;
		grid-template-rows: 4rem 4rem auto;
		grid-template-columns: auto auto auto auto;
		.name {
			border: 0.1rem solid $light-gray;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background: #a3794e;
			font-family: Montserrat;
			font-weight: 900;
			font-size: 1.8rem;
			line-height: 1.8rem;
			grid-row: 1;
			grid-column: 1/10;
			&:hover {
				cursor: pointer;
			}
			&__btn {
				position: absolute;
				top: 1.5rem;
				left: 1rem;
				background: #fff;
				width: 0.9rem;
				height: 0.9rem;
			}
		}
	}
</style>
