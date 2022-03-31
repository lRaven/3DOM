<template>
	<swiper
		class="v-swiper"
		:modules="modules"
		:pagination="{ clickable: true }"
		:style="{
			'--swiper-pagination-color': '#fefefe',
		}"
		:speed="1500"
		:loop="true"
		:autoplay="{
			delay: 5000,
			disableOnInteraction: false,
		}"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
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
	import store from "../../store";

	//* import Swiper core and required modules
	import { Autoplay, Pagination, Scrollbar } from "swiper";

	//* import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

	//* import Swiper styles
	import "swiper/swiper.scss";
	import "swiper/modules/navigation/navigation.scss";
	import "swiper/modules/pagination/pagination.scss";
	import "swiper/modules/scrollbar/scrollbar.scss";

	// Import Swiper styles
	export default {
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
			const onSwiper = (swiper) => {
				console.log(swiper);
			};
			const onSlideChange = () => {
				console.log("slide change");
			};
			return {
				onSwiper,
				onSlideChange,
				pagination: {
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},
				modules: [Autoplay, Pagination, Scrollbar],
			};
		},
		methods: {},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.swiper {
		&-slide {
			&-content {
				height: 100%;
			}
		}
		&-pagination {
			&-bullet {
				opacity: 1;
				&-active {
					&::after {
					}
				}
			}
		}
	}
</style>

<style lang="scss">
	.v-swiper {
		.swiper-pagination {
			bottom: 5rem;
			&-bullet {
				width: 2.2rem;
				height: 2.2rem;
				background: var(--white);
				&-active {
					position: relative;
					&::after {
						content: "";
						position: absolute;
						top: 50%;
						left: 50%;
						width: 1.6rem;
						height: 1.6rem;
						border: 1px solid var(--white);
						border-radius: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		.v-swiper {
			.swiper-pagination {
				bottom: 1rem;
				&-bullet {
					width: 0.8rem;
					height: 0.8rem;
					&-active {
						position: relative;
						&::after {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							width: 1.6rem;
							height: 1.6rem;
							border: 1px solid var(--white);
							border-radius: 50%;
							transform: translate(-50%, -50%);
						}
					}
				}
			}
		}
	}
</style>
