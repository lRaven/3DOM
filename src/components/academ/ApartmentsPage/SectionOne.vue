<template>
	<div class="sectionOne">
		<div class="name" @click="showDialog(this.section)">Секция 1</div>
		<SectionColumns :parameters="'2-К'" />
		<SectionColumns :parameters="'1-К'" />
		<SectionColumns :parameters="'1-К'" />
		<SectionColumns :parameters="'2-К'" />
		<div v-for="apart in apartments" :key="apart.number">
			<ApartmentItem
				@showDialog="showDialogApartment"
				:apartment="apart"
			/>
		</div>
	</div>
</template>

<script>
	import SectionColumns from "@/components/academ/ApartmentsPage/SectionColumns";
	import ApartmentItem from "@/components/academ/ApartmentsPage/ApartmentItem";
	import store from "@/store";

	export default {
		components: { SectionColumns, ApartmentItem },
		data() {
			return {
				section: 1,
				isApartmentReview: false,
			};
		},
		computed: {
			apartments: () => {
				const apartments = store.getters.APARTMENTS;

				//* получение секции
				let sectionFilter = apartments.filter(
					(apart) => apart.section === 1
				);

				//* переворот по оси y
				sectionFilter = sectionFilter.slice().reverse();

				//* переворот по оси x
				let subarray = [];
				while (sectionFilter.length)
					subarray.push(sectionFilter.splice(0, 4).slice().reverse());
				sectionFilter.length = 0;
				for (let i of subarray) {
					for (let j of i) {
						sectionFilter.push(j);
					}
				}

				return sectionFilter;
			},
		},
		watch: {
			apartments: function () {},
		},
		methods: {
			showDialog() {
				this.$emit("showDialog", 1);
			},
			showDialogApartment(id) {
				this.$emit("showDialogApartment", id);
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.sectionOne {
		display: grid;
		grid-column: 2;
		grid-template-rows: 40px 40px auto;
		grid-template-columns: auto auto auto auto;
		.flat4k {
			display: grid;
			grid-template-columns: repeat(4, auto);
			grid-template-rows: repeat(2, 40px);
		}
		.name {
			border: 0.1rem solid var(--light-gray);
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			background: #a3794e;
			font-style: normal;
			font-weight: 900;
			font-size: 18px;
			line-height: 18px;
			grid-row: 1;
			grid-column: 1 / 5;
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
