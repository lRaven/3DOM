<template>
	<swiper
		class="academ-swiper-full"
		:modules="modules"
		:space-between="50"
		:loop="true"
		:pagination="{ clickable: true }"
	>
		<swiper-slide v-for="img in gallery" :key="img.id">
			<div class="swiper-slide-content">
				<p :style="textColor" v-if="price === true">
					{{ img.cost }} руб.
				</p>
				<img :src="img.image" alt="" swiper-full-img />
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
	// import Swiper core and required modules
	import { Pagination } from "swiper";

	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	// Import Swiper styles
	export default {
		name: "AcademSwiperFull",
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
				modules: [Pagination],
			};
		},
	};
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
		height: 45rem;
		object-fit: cover;
	}
	@media (max-width: 540px) {
		img {
			height: 21rem;
		}
	}
</style>

<style lang="scss">
	@import "@/assets/scss/variables";

	.academ-swiper-full {
		.swiper {
			&-slide {
				display: flex;
				justify-content: center;
				align-items: center;
				&-content {
					width: 100%;
				}
			}
			&-button {
				&-prev,
				&-next {
					height: 1rem;
					margin-top: 0;
					padding: 2.5rem 0;
					&::after {
						font-size: 1rem;
						color: $light-gold;
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
					background-color: $light-gold;
					opacity: 1;
					&-active {
						position: relative;
						background-color: $gold;
						&::after {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							width: 1.5rem;
							height: 1.5rem;
							border: 0.1rem solid $gold;
							border-radius: 50%;
						}
					}
				}
			}
			&-full {
				&-img {
					height: 45rem;
					border: 1px solid #fff;
				}
			}
		}
	}
</style>
