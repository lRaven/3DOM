<template>
	<div class="rate-card" :class="{ active: selectedRate === rate.id }">
		<v-button
			:text="selectedRate === rate.id ? 'Выбрано' : 'Выбрать'"
			:color="selectedRate === rate.id ? 'blue' : 'white'"
			direction="reverse"
			@click="$emit('select-rate', rate.id)"
		>
			<template #icon>
				<svg
					width="21"
					height="20"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					v-show="selectedRate === rate.id"
				>
					<path
						d="M10.5 0C4.96214 0 0.5 4.46214 0.5 10C0.5 15.5378 4.96214 20 10.5 20C16.0378 20 20.5 15.5378 20.5 10C20.5 8.92431 20.3558 7.85156 19.9712 6.85097L18.7211 8.07692C18.8744 8.69292 18.9615 9.30892 18.9615 10C18.9615 14.6935 15.1935 18.4615 10.5 18.4615C5.80649 18.4615 2.03846 14.6935 2.03846 10C2.03846 5.30649 5.80649 1.53846 10.5 1.53846C12.8077 1.53846 14.881 2.45793 16.3413 3.91827L17.4231 2.83653C15.6532 1.06671 13.1923 0 10.5 0ZM19.1778 3.29327L10.5 11.9712L7.20673 8.67785L6.10096 9.78369L9.94708 13.6298L10.5 14.1587L11.0529 13.6298L20.2837 4.39904L19.1778 3.29327Z"
						fill="#FEFEFE"
					/>
				</svg>
			</template>
		</v-button>
		<h3 class="rate-card__title" v-once>Пакет</h3>

		<p class="rate-card__name" v-once>«{{ rate.name }}»</p>

		<p class="rate-card__description" v-once>
			{{ rate.description }}
		</p>

		<template v-if="rate.price">
			<p class="rate-card__price" v-once>
				Стоимость за кв.м. от<br />
				<span class="rate-card__price-sum"> {{ rate.price }} руб.</span>
			</p>
			<p class="rate-card__period" v-once>Срок от {{ rate.period }} дней</p>
		</template>

		<p class="rate-card__price-individual" v-else>
			Стоимость и сроки работ
			<strong>рассчитывается индивидуально</strong>
			и зависит от выбранных материалов и сложности работ
		</p>

		<ul class="rate-card__list">
			<li class="rate-card__list-item" v-for="item in checklist" :key="item.id">
				{{ item.description }}
			</li>
		</ul>
	</div>
</template>

<script>
	import { computed } from 'vue';

	export default {
		name: 'RateCard',
		props: {
			rate: {
				value: Object,
				required: true,
			},
			selectedRate: Number,
		},
		emits: ['select-rate'],
		setup(props) {
			const checklist = computed(() => {
				return props.rate.checklist.filter((el) => el.value === true);
			});

			return { checklist };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.rate-card {
		padding: 2rem 1rem 3rem 1rem;
		background-color: $light-blue;
		border-radius: 3rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.2s ease;
		text-align: center;
		height: max-content;
		&:hover {
			background-color: #cfe6ff;
		}
		&.active {
			background-color: #cfe6ff;
		}
		.v-button {
			margin-bottom: 1rem;
		}

		&__title {
			font-size: 1.8rem;
			font-weight: 500;
			margin-bottom: 0.5rem;
		}

		&__name {
			font-size: 3.2rem;
			font-weight: 500;
			margin-bottom: 2rem;
		}

		&__description {
			font-size: 1.2rem;
			margin-bottom: 1rem;
			min-height: 4rem;
		}

		&__price {
			color: rgba($dark, 0.5);
			font-size: 1.2rem;
			font-weight: 500;
			&-sum {
				color: #1f1f1f;
				font-size: 3.2rem;
				font-weight: 700;
				margin: 0.5rem 0;
				display: inline-block;
			}
			&-individual {
				margin: 1.4rem 0;
				font-size: 1.2rem;
			}
		}
		&__period {
		}

		&__list {
			margin-top: 2rem;
			&-item {
				position: relative;
				text-align: left;
				font-size: 1.2rem;
				padding-left: 1rem;
				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 0.5rem;
					height: 0.2rem;
					width: 0.2rem;
					background-color: #1f1f1f;
					border-radius: 50%;
				}
				+ .rate-card__list-item {
					margin-top: 1rem;
				}
			}
		}
	}
</style>
