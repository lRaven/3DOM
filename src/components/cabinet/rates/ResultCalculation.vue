<template>
	<div class="result-calculation">
		<div class="result-calculation__col">
			<h2 class="result-calculation__title" v-once>Итоговой расчет</h2>
			<p class="result-calculation__price">
				{{ price }}
				рублей
			</p>
			<p class="result-calculation__price-square-meter">
				{{ priceSquareMeter }}
				руб. кв.м.
			</p>
			<p class="result-calculation__disclaimer" v-once>
				Стоимость, рассчитанная на калькуляторе может отличаться от сметы.
				Окончательная стоимость определяется после визуального осмотра и
				уточнения фактических размеров и цен на товары и услуги. Предложение
				носит информационный характер и не является офертой.
			</p>

			<v-button text="Заказать ремонт"></v-button>

			<div class="result-calculation__actions" v-once>
				<div class="result-calculation__action">
					<p class="result-calculation__action-description">Выгрузка в лк</p>
					<button type="button" class="result-calculation__action-button">
						<svg
							width="21"
							height="15"
							viewBox="0 0 21 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="result-calculation__action-icon"
						>
							<path
								d="M9.31645 11.4688C7.95854 11.2932 6.57834 11.4527 5.29618 11.9331C4.01401 12.4135 2.86883 13.2002 1.9606 14.2249C1.83783 14.3785 1.67041 14.4903 1.48147 14.5447C1.29254 14.5992 1.0914 14.5937 0.905705 14.5291C0.723192 14.4502 0.569936 14.316 0.467644 14.1455C0.365352 13.975 0.319083 13.7768 0.33539 13.5787C0.272431 11.9431 0.619468 10.3177 1.34481 8.8504C2.07015 7.38311 3.15089 6.12049 4.48862 5.17734C5.85369 4.19329 7.45255 3.58386 9.12631 3.40967H9.31645V1.16681C9.30797 0.99677 9.34926 0.827947 9.43536 0.68107C9.52146 0.534193 9.64863 0.415657 9.80115 0.339995C9.94791 0.254333 10.117 0.214901 10.2865 0.226768C10.4561 0.238634 10.6181 0.301197 10.7515 0.40647L12.9184 1.91764L19.571 6.58387C19.7195 6.66606 19.8432 6.7866 19.9295 6.93284C20.0157 7.07908 20.0612 7.24568 20.0612 7.41545C20.0612 7.58521 20.0157 7.75193 19.9295 7.89817C19.8432 8.04441 19.7195 8.16483 19.571 8.24702L10.818 14.377C10.6781 14.496 10.5066 14.5718 10.3245 14.5954C10.1423 14.619 9.95728 14.5894 9.79164 14.51C9.62327 14.4197 9.48605 14.2806 9.39789 14.1111C9.30973 13.9415 9.27471 13.7494 9.29743 13.5597C9.32594 12.8659 9.31645 12.1721 9.31645 11.4688ZM11.1127 11.963L17.6322 7.40129L11.1601 2.86801C11.1601 3.29568 11.1601 3.73283 11.1601 4.1605C11.1601 4.41255 11.06 4.65421 10.8818 4.83244C10.7036 5.01067 10.4618 5.11087 10.2097 5.11087C9.94364 5.11087 9.66806 5.11087 9.40195 5.11087C7.75766 5.28161 6.20534 5.95266 4.95452 7.03353C3.7037 8.11441 2.81461 9.55305 2.40725 11.1552C2.40725 11.2027 2.40725 11.2597 2.40725 11.3547L2.62581 11.2028C3.98891 10.2833 5.56733 9.73308 7.20666 9.6061C8.15703 9.53957 9.19294 9.60616 10.1813 9.54914C10.4334 9.54914 10.675 9.64922 10.8533 9.82745C11.0315 10.0057 11.1317 10.2475 11.1317 10.4995L11.1127 11.963Z"
								fill="#007BFC"
							/>
						</svg>
					</button>
				</div>
				<div class="result-calculation__action">
					<p class="result-calculation__action-description">
						Отправить по почте
					</p>
					<button type="button" class="result-calculation__action-button">
						<svg
							width="24"
							height="18"
							viewBox="0 0 24 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="result-calculation__action-icon"
						>
							<path
								d="M0.603413 2.91766L3.90117 5.68316L10.1641 10.9197C10.7074 11.3506 11.3834 11.5795 12.0768 11.5674C12.7701 11.5553 13.4377 11.3029 13.9655 10.8532L23.1747 3.16477L23.4502 2.9462C23.4502 3.24082 23.5168 3.47835 23.5168 3.71594C23.5168 7.26082 23.5168 10.7962 23.5168 14.3411C23.53 14.7503 23.4591 15.1578 23.3086 15.5385C23.158 15.9192 22.931 16.265 22.6415 16.5545C22.352 16.844 22.0063 17.071 21.6256 17.2216C21.2449 17.3721 20.8373 17.443 20.4281 17.4298H3.66358C3.25439 17.443 2.84681 17.3721 2.4661 17.2216C2.08539 17.071 1.73956 16.844 1.45007 16.5545C1.16058 16.265 0.933546 15.9192 0.783 15.5385C0.632453 15.1578 0.561664 14.7503 0.574874 14.3411V3.74448C0.527356 3.49738 0.574902 3.24079 0.603413 2.91766Z"
								fill="#007BFC"
							/>
							<path
								d="M1.91797 1.14051C2.35503 0.857687 2.8611 0.699943 3.38146 0.684353H20.2695C20.898 0.660254 21.5195 0.822245 22.0562 1.15002L21.8377 1.35908L12.5716 9.10461C12.5015 9.17763 12.4174 9.2357 12.3244 9.27538C12.2313 9.31507 12.131 9.33548 12.0298 9.33548C11.9286 9.33548 11.8285 9.31507 11.7354 9.27538C11.6423 9.2357 11.5582 9.17763 11.4881 9.10461L2.08897 1.23553L1.91797 1.14051Z"
								fill="#007BFC"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="result-calculation__social" v-once>
				<p class="result-calculation__social-description">
					Поделиться в соцсетях
				</p>
				<div class="result-calculation__social-list">
					<button
						class="result-calculation__social-link"
						type="button"
						v-for="link in socialNetworks"
						:key="link.id"
					>
						<img
							:src="link.icon"
							alt="social network"
							class="result-calculation__social-link-icon"
						/>
					</button>
				</div>
			</div>
		</div>

		<div class="result-calculation__params">
			<div class="result-calculation__params-row">
				<p class="result-calculation__params-key">Пакет</p>

				<p class="result-calculation__params-value">
					«{{ result.rate ? result.rate.name : 'Rate' }}»
				</p>
			</div>

			<div class="result-calculation__params-row">
				<p class="result-calculation__params-key" v-once>
					Дополнительные услуги
				</p>

				<div
					class="result-calculation__params-value-wrapper"
					v-for="item in result.configurations"
					:key="item.id"
				>
					<p class="result-calculation__params-value">{{ item.description }}</p>
					<p class="result-calculation__params-price">
						{{ item.price }} рублей
					</p>
				</div>
			</div>

			<div class="result-calculation__params-row">
				<p class="result-calculation__params-key">Дополнительные товары</p>

				<div class="result-calculation__params-value-wrapper">
					<p class="result-calculation__params-value">{{ 1 }}</p>
					<p class="result-calculation__params-price">{{ 1 }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue';

	export default {
		name: 'ResultCalculation',
		props: {
			result: {
				value: Object,
				required: true,
			},
		},
		setup(props) {
			//* Since there are no prices, the figure is arbitrary
			const price = computed(() => {
				if (props.result.apartmentParameters.area) {
					return Math.ceil(
						priceSquareMeter * props.result.apartmentParameters.area
					);
				} else return 0;
			});
			const priceSquareMeter = 50000;

			const socialNetworks = [
				{ id: 1, icon: '/img/icons/general/vk.svg', link: '' },
				{ id: 2, icon: '/img/icons/general/ok.svg', link: '' },
				{ id: 3, icon: '/img/icons/general/tg.svg', link: '' },
				{ id: 4, icon: '/img/icons/general/viber.svg', link: '' },
			];

			return {
				price,
				priceSquareMeter,

				socialNetworks,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.result-calculation {
		display: flex;
		justify-content: space-between;
		gap: 5rem;
		&__col {
			&:first-child {
				max-width: 48rem;
			}
		}

		&__title {
			color: #1f1f1f;
			font-weight: 600;
			margin-bottom: 3rem;
		}

		&__price {
			color: $blue;
			font-size: 5rem;
			font-weight: 700;
			margin-bottom: 1rem;
			&-square-meter {
				font-size: 2.4rem;
				margin-bottom: 4rem;
			}
		}

		&__disclaimer {
			font-size: 1.6rem;
			color: $gray;
			margin-bottom: 4rem;
		}

		.v-button {
			max-width: 30rem;
			width: 100%;
			margin-bottom: 3rem;
		}

		&__actions {
			display: flex;
			gap: 6rem;
			align-items: center;
			margin-bottom: 2rem;
		}
		&__action {
			display: flex;
			align-items: center;
			gap: 1rem;
			&-description {
				font-size: 1.2rem;
				color: $gray;
			}
			&-button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3.6rem;
				min-width: 3.6rem;
				height: 3.6rem;
				border-radius: 50%;
				background-color: #eef2f5;
				transition: transform 0.2s ease;
				&:active {
					transform: scale(0.95);
				}
			}
			&-icon {
				width: 2rem;
				height: 2rem;
				object-fit: contain;
			}
		}

		&__social {
			&-description {
				font-size: 1.2rem;
				margin-bottom: 1rem;
				color: $gray;
			}
			&-list {
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			&-link {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3.6rem;
				min-width: 3.6rem;
				height: 3.6rem;
				border-radius: 50%;
				background-color: #eef2f5;
				transition: transform 0.2s ease;
				&:active {
					transform: scale(0.95);
				}
				&-icon {
					width: 2rem;
					height: 2rem;
					object-fit: contain;
				}
			}
		}

		&__params {
			max-width: 45rem;
			width: 100%;
			padding: 2rem 1rem;
			background-color: #f4f7fa;
			height: max-content;
			border-radius: 3rem;
			&-row {
				display: grid;
				grid-template-columns: 12rem 1fr;
				grid-gap: 2rem;
				+ .result-calculation__params-row {
					margin-top: 2rem;
				}
			}

			&-key {
				font-size: 1.2rem;
				color: $gray;
			}
			&-value {
				font-size: 1.6rem;
				font-weight: 500;
				+ .result-calculation__params-price {
					margin-top: 1rem;
				}
				&-wrapper {
					grid-column: 2/3;
				}
			}
			&-price {
				font-size: 1.2rem;
				color: $gray;
			}
		}
	}
</style>
