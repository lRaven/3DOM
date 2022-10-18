<template>
	<div class="v-card-min">
		<div class="v-card-min__top">
			<img :src="data.image" alt="image" />
		</div>
		<div class="v-card-min__body">
			<div class="v-card-min__title">
				<h4 class="v-card-min__rooms">{{ data.rooms }}-к квартира</h4>
				<img
					src="/img/icons/trade-in/periscope.svg"
					alt=""
					class="v-card-min__icon"
				/>
			</div>
			<div class="v-card-min__params">
				<p class="v-card-min__params-key">Район</p>
				<p class="v-card-min__params-value">{{ data.district }}</p>

				<p class="v-card-min__params-key">Адрес</p>
				<p class="v-card-min__params-value">{{ data.address }}</p>

				<p class="v-card-min__params-key">Площадь</p>
				<p class="v-card-min__params-value">{{ data.area }}&nbsp;м²</p>

				<p class="v-card-min__params-key">Стоимость</p>
				<p class="v-card-min__params-value">
					{{ data.price }}&nbsp;млн.&nbsp;₽
				</p>
			</div>
			<div class="v-card-min__bottom">
				<router-link :to="data.link" class="v-card-min__link">
					Подробнее
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vCardMin',
		props: { data: Object },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-card-min {
		cursor: pointer;
		border-radius: 3rem;
		margin-bottom: -5rem;
		height: 100%;

		&__top {
			overflow: hidden;
			height: 25rem;
			border-radius: 3rem 3rem 0 0;
			box-shadow: $shadow;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__title {
			display: grid;
			grid-template-columns: max-content 1fr;
			align-items: center;
			grid-column-gap: 2rem;
			color: #52555a;
			border-bottom: 0.1rem solid #c4c4c4;
			padding: 2rem;
		}
		&__rooms {
			font-size: 1.6rem;
			font-weight: 600;
		}
		&__icon {
			height: 2rem;
			justify-self: flex-end;
		}

		&__body {
			display: grid;
			grid-template-rows: max-content 1fr max-content;
			background-color: $white;
			transform: translateY(-5rem);
			border-radius: 3rem;
			z-index: 1;
			box-shadow: $shadow;
			min-height: 26rem;
		}

		&__params {
			padding: 2rem;
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-gap: 1rem 2rem;
			border-bottom: 0.1rem solid #c4c4c4;
			&-key {
				font-size: 1.2rem;
			}
			&-value {
				font-size: 1.4rem;
				font-weight: 500;
			}
		}

		&__bottom {
			display: flex;
			justify-content: flex-end;
			padding: 2rem;
			color: #979797;
		}
		&__link {
			display: flex;
			align-items: center;
			cursor: pointer;
			position: relative;
			color: $blue;
			font-weight: 600;
			font-size: 1.4rem;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -0.4rem;
				width: 0;
				height: 0.2rem;
				background-color: $blue;
				transition: width 0.2s ease;
			}
			&:hover {
				&::after {
					width: 100%;
					transition: width 0.3s ease;
				}
			}
		}
	}
</style>
