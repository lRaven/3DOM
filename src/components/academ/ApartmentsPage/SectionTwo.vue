<template>
	<div class="sectionTwo">
		<div class="name" @click="showDialog(this.section)">Секция 2</div>
		<section-columns
			:parameters="column.type"
			v-for="column in apartment_columns"
			:key="column.id"
		></section-columns>

		<div v-for="apart in apartments_in_section" :key="apart.number">
			<ApartmentItem
				@showDialog="showDialogApartment"
				:apartment="apart"
			/>
		</div>
	</div>
</template>

<script>
	import sectionColumns from "@/components/academ/ApartmentsPage/SectionColumns";
	import ApartmentItem from "@/components/academ/ApartmentsPage/ApartmentItem";
	import { mapState } from "vuex";

	export default {
		components: { sectionColumns, ApartmentItem },
		data: () => ({
			section: 2,
			apartment_columns: [
				{ id: 1, type: "3-К" },
				{ id: 2, type: "1-К" },
				{ id: 3, type: "2-К" },
				{ id: 4, type: "1-К" },
				{ id: 5, type: "2-К" },
				{ id: 6, type: "1-К" },
				{ id: 7, type: "1-К" },
			],
		}),
		computed: {
			...mapState({ apartments: (state) => state.academ.apartments }),

			apartments_in_section() {
				const apartments = [...this.apartments];

				//* получение секции
				let sectionFilter = apartments.filter(
					(apart) => apart.section === 2
				);

				//* переворот по оси y
				sectionFilter = sectionFilter.slice().reverse();

				//* переворот по оси x
				let subarray = [];
				while (sectionFilter.length)
					subarray.push(sectionFilter.splice(0, 7).slice().reverse());
				sectionFilter.length = 0;
				for (let i of subarray) {
					for (let j of i) {
						sectionFilter.push(j);
					}
				}

				return sectionFilter;
			},

			// apartments: () => {
			// 	const apartments = store.getters.APARTMENTS;

			// 	//* получение секции
			// 	let sectionFilter = apartments.filter(
			// 		(apart) => apart.section === 2
			// 	);

			// 	//* переворот по оси y
			// 	sectionFilter = sectionFilter.slice().reverse();

			// 	//* переворот по оси x
			// 	let subarray = [];
			// 	while (sectionFilter.length)
			// 		subarray.push(sectionFilter.splice(0, 7).slice().reverse());
			// 	sectionFilter.length = 0;
			// 	for (let i of subarray) {
			// 		for (let j of i) {
			// 			sectionFilter.push(j);
			// 		}
			// 	}

			// 	return sectionFilter;
			// },
		},
		methods: {
			showDialog() {
				this.$emit("showDialog", 2);
			},
			showDialogApartment(id) {
				this.$emit("showDialogApartment", id);
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.sectionTwo {
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
			font-size: 18px;
			line-height: 18px;
			grid-row: 1;
			grid-column: 1/8;
			&:hover {
				cursor: pointer;
			}
			&__btn {
				position: absolute;
				top: 15px;
				left: 10px;
				background: white;
				width: 9px;
				height: 9px;
			}
		}
	}
</style>
