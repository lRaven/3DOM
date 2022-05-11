<template>
	<swiper
		class="academ-swiper"
		:modules="modules"
		:space-between="50"
		navigation
		:loop="true"
		:pagination="{ clickable: true }"
	>
		<swiper-slide v-for="img in gallery" :key="img.id">
			<div class="swiper-slide-content">
				<p :style="textColor" v-if="price === true">
					{{ img.cost }} руб.
				</p>
				<img :src="img.image" alt="" class="swiper-img" />
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
	import store from "@/store";

	// import Swiper core and required modules
	import { Navigation, Pagination } from "swiper";

	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	// Import Swiper styles
	export default {
		name: "AcademSwiper",
		store,
		props: {
			price: Boolean,
			gallery: Object,
			textColor: String,
		},
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
				modules: [Navigation, Pagination],
			};
		},
	};
</script>

<style lang="scss" scoped>
	img {
		width: 50%;
		max-height: 70%;
		object-fit: contain;
	}
	p {
		text-align: center;
		font-size: 1.8rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	@media (max-width: 767px) {
		p {
			font-size: 4rem;
		}
	}

	@media (max-width: 540px) {
		img {
			width: 70%;
		}
		p {
			font-size: 1.8rem;
		}
	}
</style>

<style lang="scss">
	.academ-swiper {
		.swiper {
			&-slide {
				display: flex;
				justify-content: center;
				align-items: center;
				&-content {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
			&-img {
			}
			&-button {
				&-prev,
				&-next {
					height: 1rem;
					margin-top: 0;
					padding: 2.5rem 0;
					&::after {
						font-size: 1rem;
						color: var(--light-gold);
						font-weight: 700;
					}
				}
				&-prev {
					left: -1rem;
				}
				&-next {
					right: -1rem;
				}
			}
			&-pagination {
				margin: 0.1rem;
				&-bullet {
					background-color: var(--light-gold);
					opacity: 1;
					&-active {
						position: relative;
						background-color: var(--gold);
						&::after {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							width: 1.5rem;
							height: 1.5rem;
							border: 0.1rem solid var(--gold);
							border-radius: 50%;
						}
					}
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.academ-swiper {
			.swiper {
				&-slide {
					&-content {
						p {
							font-size: 4rem;
						}
						img {
							height: 80rem;
							padding-bottom: 5rem;
							width: inherit;
						}
					}
				}
				&-button {
					&-next,
					&-prev {
						&::after {
							font-size: 4rem !important;
						}
					}
					&-next {
						right: 0 !important;
					}
					&-prev {
						left: 0 !important;
					}
				}
				&-pagination-bullet {
					width: 1.7rem;
					height: 1.7rem;
					&-active {
						&::after {
							width: 2.6rem !important;
							height: 2.6rem !important;
						}
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		.academ-swiper {
			.swiper {
				&-slide {
					&-content {
						p {
							font-size: 2.2rem;
						}
						img {
							height: 38rem;
						}
					}
				}
				&-button {
					&-prev,
					&-next {
						&::after {
							font-size: 2rem !important;
						}
					}
				}
				&-pagination-bullet {
					width: 0.8rem;
					height: 0.8rem;
					&-active {
						&::after {
							width: 1.6rem !important;
							height: 1.6rem !important;
						}
					}
				}
			}
		}
	}
</style>
