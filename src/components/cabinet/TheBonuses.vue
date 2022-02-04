<template>
	<div class="bonuses">
		<div class="bonuses__header">
			<h1 class="bonuses__title">Бонусы</h1>

			<div class="bonuses__tabs">
				<label
					@click="
						this.tab = 1;
						moveLine(1);
					"
				>
					<input
						type="radio"
						name="tabs"
						class="radio__real"
						checked
					/>
					<span class="radio__fake"> Спецпредложения </span>
				</label>
				<label
					@click="
						this.tab = 2;
						moveLine(2);
					"
				>
					<input type="radio" name="tabs" class="radio__real" />
					<span class="radio__fake"> Персональные бонусы </span>
				</label>
				<span class="bonuses__line"></span>
			</div>
		</div>
		<div class="bonuses__body" v-if="tab === 1">
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow"
				:bg="'blue'"
				:title="'«Госпрограмма 2020»: ипотека со ставкой 0,1%'"
				:description1="`Программа позволяет приобрести недвижимость, не перегружая`"
				:description2="`личный бюджет на выплату процентов!`"
				:btn="'white'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__2"
				:bg="'gray'"
				:title="'«Скидка до 110 000 рублей для онлайн-покупателей'"
				:btn="'blue'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__3"
				:bg="'blue'"
				:title="'«Скидка до 110 000 рублей для онлайн-покупателей'"
				:btn="'white'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__4"
				:title="'«Госпрограмма 2020»: ипотека со ставкой 0,1%'"
				:description1="`Программа позволяет приобрести недвижимость, не перегружая`"
				:description2="`личный бюджет на выплату процентов!`"
				:btn="'blue'"
			></services-item>
		</div>
		<div class="bonuses__body" v-if="tab === 2">
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow"
				:bg="'blue'"
				:title="'«Госпрограмма 2020»: ипотека со ставкой 0,1%'"
				:description1="`Программа позволяет приобрести недвижимость, не перегружая`"
				:description2="`личный бюджет на выплату процентов!`"
				:btn="'white'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__2"
				:bg="'gray'"
				:title="'«Скидка до 110 000 рублей для онлайн-покупателей'"
				:btn="'blue'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__3"
				:bg="'blue'"
				:title="'«Скидка до 110 000 рублей для онлайн-покупателей'"
				:btn="'white'"
			></services-item>
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow bonuses__4"
				:title="'«Госпрограмма 2020»: ипотека со ставкой 0,1%'"
				:description1="`Программа позволяет приобрести недвижимость, не перегружая`"
				:description2="`личный бюджет на выплату процентов!`"
				:btn="'blue'"
			></services-item>
		</div>
	</div>
</template>

<script>
	import ServicesItem from "./ServicesItem.vue";

	export default {
		name: "Bonuses",
		components: {
			ServicesItem,
		},
		data() {
			return {
				tab: 1,
			};
		},
		methods: {
			moveLine(way) {
				const line = document.querySelector(".bonuses__line");
				switch (way) {
					case 1: {
						line.classList.remove("moved");
						break;
					}
					case 2: {
						line.classList.add("moved");
						break;
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.bonuses {
		color: var(--dark);
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}
		&__title {
			margin-bottom: 1.5rem;
			font-size: var(--text-30);
			font-weight: 600;
		}
		&__tabs {
			position: relative;
			display: flex;
			gap: 5rem;
			border-bottom: 0.1rem solid #c4c4c4;
			font-size: var(--text-20);
			font-weight: 600;
			color: #979797;

			label {
				cursor: pointer;
				padding: 2rem 0;
			}
			.radio {
				&__real {
					display: none;
					&:checked {
						+ .radio__fake {
							color: var(--blue);
							transition: all 0.3s ease;
						}
					}
				}
				&__fake {
					user-select: none;
				}
			}
		}
		&__line {
			position: absolute;
			left: 0;
			bottom: -0.1rem;
			height: 0.2rem;
			width: 23rem;
			background-color: var(--blue);
			transition: all 0.3s ease;
			&.moved {
				left: 24.3rem;
				width: 27rem;
			}
		}
		&__body {
			display: grid;
			grid-column-gap: 2.3rem;
			grid-template-columns: repeat(2, 1fr);
			div {
				&:first-child {
					grid-area: 1/1/1/3;
				}
				&:last-child {
					grid-area: 3/1/3/3;
				}
			}
		}
		&__2 {
			animation-delay: 200ms;
		}
		&__3 {
			animation-delay: 400ms;
		}
		&__4 {
			animation-delay: 600ms;
		}
	}
</style>
