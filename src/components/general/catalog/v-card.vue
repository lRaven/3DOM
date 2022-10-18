<template>
	<div class="v-card" @click="this.$router.push(data.link)">
		<div class="v-card__tags">
			<v-card-tag
				v-for="item in data.tags"
				:key="item.id"
				:text="item.text"
			></v-card-tag>
		</div>
		<div class="v-card__top">
			<img :src="data.image" alt="image" />
		</div>
		<div class="v-card__body">
			<div class="v-card__title">
				<h4 class="v-card__project-description">
					{{ data.subtitle }}
				</h4>
				<img
					src="/img/icons/trade-in/periscope.svg"
					alt=""
					class="v-card__icon"
				/>
				<h3 class="v-card__project">
					{{ data.title }}
				</h3>

				<div class="v-card__min">
					<span>от</span>
					<span>{{ data.min }}</span>
				</div>
			</div>
			<div class="v-card__prices">
				<div class="v-card__price v-card__studios">
					<p>Студии</p>
					<div class="v-card__min">
						<span>от</span>
						<span>{{ data.prices.studios }}</span>
					</div>
				</div>
				<div class="v-card__price v-card__single">
					<p class="v-card__price-pc">1-комн. квартиры</p>
					<p class="v-card__price-mobile">1-комн. кв.</p>
					<div class="v-card__min">
						<span>от</span>
						<span>{{ data.prices.singleRoom }}</span>
					</div>
				</div>
				<div class="v-card__price v-card__two">
					<p class="v-card__price-pc">2-комн. квартиры</p>
					<p class="v-card__price-mobile">2-комн. кв.</p>
					<div class="v-card__min">
						<span>от</span>
						<span>{{ data.prices.twoRoom }}</span>
					</div>
				</div>
				<div class="v-card__price v-card__three">
					<p class="v-card__price-pc">3-комн. квартиры</p>
					<p class="v-card__price-mobile">3-комн. кв.</p>
					<div class="v-card__min">
						<span>от</span>
						<span>{{ data.prices.threeRoom }}</span>
					</div>
				</div>
			</div>
			<div class="v-card__bottom">
				<div class="v-card__date">
					<p>Заселение до 30.08.2022</p>
				</div>
				<div class="v-card__finishing">
					<p>с отделкой</p>
				</div>
				<div class="v-card__address">ул. Калинина, 54, Волгоград</div>
				<div class="v-card__more">
					<router-link :to="data.link">Подробнее</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vCardTag from '@/components/general/catalog/v-card-tag.vue';

	export default {
		name: 'vCard',
		components: { vCardTag },
		props: { data: Object },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-card {
		cursor: pointer;
		position: relative;
		border-radius: 3rem;
		margin-bottom: -5rem;
		height: 100%;
		&__tags {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			gap: 0.7rem;
			position: absolute;
			top: 2.8rem;
			right: 2.8rem;
			max-width: 30rem;
		}
		&__top {
			overflow: hidden;
			max-height: 53rem;
			border-radius: 4rem 4rem 0 0;
			box-shadow: $shadow;
			img {
				border-radius: 3rem 3rem 0 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__body {
			background-color: $white;
			transform: translateY(-5rem);
			border-radius: 3rem;
			z-index: 1;
			box-shadow: $shadow;
		}
		&__title {
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-column-gap: 2rem;
			color: #52555a;
			border-bottom: 0.1rem solid #c4c4c4;
			padding: 3rem 6rem;
			min-height: 13.7rem;
		}
		&__project {
			font-size: 3.6rem;
			font-weight: 600;
			text-transform: uppercase;
			&-description {
				font-size: 2.4rem;
				font-weight: 600;
				margin-bottom: 1rem;
				margin-top: 0.2rem;
			}
		}
		&__icon {
			height: 4rem;
			justify-self: flex-end;
			align-self: flex-start;
		}
		&__min {
			display: flex;
			width: max-content;
			flex-direction: row !important;
			justify-self: flex-end;
			align-self: flex-end;
			span {
				font-size: 1.8rem;
				font-weight: 600;
				+ span {
					margin-left: 0.5rem;
				}
			}
			span:nth-child(1) {
				color: #979797;
			}
			span:nth-child(2) {
				color: $blue;
			}
		}
		&__prices {
			padding: 4rem 6rem;
		}
		&__price {
			display: flex;
			justify-content: space-between;
			&-mobile {
				display: none;
			}
			+ .v-card__price {
				margin-top: 2rem;
			}
			p {
				font-size: 1.8rem;
				color: $gray;
			}
		}
		&__three {
			border-bottom: 0.1rem solid #c4c4c4;
			padding-bottom: 4rem;
		}
		&__bottom {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			grid-gap: 2rem;
			padding: 0 6rem 4rem 6rem;
			justify-content: space-between;
			color: #979797;
			font-size: 1.8rem;
		}
		&__finishing,
		&__more {
			text-align: center;
		}
		&__more a {
			cursor: pointer;
			position: relative;
			color: $blue;
			font-weight: 600;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -0.2rem;
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

	@media (max-width: 650px) {
		.v-card {
			&__top {
				img {
				}
			}
			&__body {
			}
			&__title {
				.v-card__min {
					grid-column: 1/3;
					justify-self: flex-end;
				}
			}
			&__project {
				grid-column: 1/3;
				margin-top: 1rem;
				&-description {
					margin: 0;
					height: fit-content;
					align-self: flex-end;
				}
			}
			&__icon {
				height: 4rem;
				justify-self: flex-end;
				align-self: flex-start;
			}
			&__min {
				span {
					+ span {
					}
				}
				span:nth-child(1) {
				}
				span:nth-child(2) {
				}
			}
			&__prices {
			}
			&__price {
				+ .v-card__price {
				}
				p {
				}
			}
			&__three {
			}
			&__bottom {
			}
			&__date {
				p {
				}
			}
			&__address {
			}
			&__finishing,
			&__more {
			}
			&__more a {
			}
		}
	}

	@media (max-width: 540px) {
		.v-card {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			&__top {
				img {
				}
			}
			&__body {
			}
			&__title {
				padding: 1rem 2rem 2rem 2rem;
				.v-card__min {
				}
			}
			&__project {
				&-description {
				}
			}
			&__icon {
			}
			&__min {
				span {
					+ span {
					}
				}
				span:nth-child(1) {
				}
				span:nth-child(2) {
				}
			}
			&__prices {
				padding: 4rem 2rem 2rem 2rem;
				position: relative;
				margin-bottom: 2rem;
				&::after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 70%;
					height: 0.1rem;
					background-color: #c4c4c4;
				}
			}
			&__price {
				+ .v-card__price {
				}
				p {
				}
			}
			&__three {
				border-bottom: none;
			}
			&__bottom {
				padding: 2rem;
			}
			&__date,
			&__address,
			&__finishing,
			&__more {
				grid-column: 1/3;
			}
			&__finishing,
			&__more {
				text-align: right;
			}
			&__date {
				order: 1;
			}
			&__address {
				order: 2;
			}
			&__finishing {
				order: 4;
			}
			&__more {
				order: 5;
			}
		}
	}

	@media (max-width: 470px) {
		.v-card {
			&__top {
				img {
				}
			}
			&__body {
			}
			&__title {
			}
			&__project {
				font-size: 2.6rem;
				&-description {
					font-size: 1.7rem;
				}
			}
			&__icon {
			}
			&__min {
				span {
					+ span {
					}
				}
				span:nth-child(1) {
				}
				span:nth-child(2) {
				}
			}
			&__prices {
			}
			&__price {
				&-mobile {
					display: block;
				}
				&-pc {
					display: none;
				}

				p {
				}
			}
			&__three {
			}
			&__bottom {
			}
			&__date,
			&__address,
			&__finishing,
			&__more {
			}
			&__finishing,
			&__more {
			}
			&__date {
			}
			&__address {
			}
			&__finishing {
			}
		}
	}
</style>
