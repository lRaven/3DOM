<template>
	<swiper
		class="v-swiper"
		:class="size"
		:modules="modules"
		:navigation="isHasNavigation ? true : false"
		:pagination="isHasPagination ? { clickable: true } : false"
		:style="{ '--swiper-pagination-color': '#fefefe' }"
		:speed="1000"
		:loop="true"
		:autoplay="
			isAutoplay ? { delay: 5000, disableOnInteraction: false } : false
		"
	>
		<swiper-slide
			v-for="img in gallery"
			:key="img.id"
			class="v-swiper__slide"
		>
			<div class="v-swiper__slide-content swiper-slide-content">
				<img :src="img.image" alt="image" class="v-swiper__slide-img" />
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
	//* import Swiper core and required modules
	import { Autoplay, Pagination, Navigation } from "swiper";

	//* import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	//* import Swiper styles
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";

	export default {
		name: "vSwiper",

		props: {
			gallery: Object,
			size: {
				value: String,
				default: "small",
			},
			isHasNavigation: {
				value: Boolean,
				default: true,
			},
			isHasPagination: {
				value: Boolean,
				default: true,
			},
			isAutoplay: {
				value: Boolean,
				default: false,
			},
		},
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
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
				modules: [Autoplay, Pagination, Navigation],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.v-swiper {
		&__slide {
			&-content {
				height: 100%;
			}
			&-img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>

<style lang="scss">
	@import "@/assets/scss/variables";

	.v-swiper {
		&.small {
			.swiper {
				&-pagination {
					bottom: 1rem;
					&-bullet {
						width: 0.9rem;
						height: 0.9rem;
						margin: 0 0.5rem !important;
						&-active {
							&::after {
								display: none;
							}
						}
					}
				}
				&-button {
					&-prev,
					&-next {
						&::after {
							font-size: 1.6rem;
						}
					}

					&-prev {
						left: 0;
					}
					&-next {
						right: 0;
					}
				}
			}
		}
		.swiper {
			&-pagination {
				bottom: 5rem;
				@media (max-width: 767px) {
					bottom: 1rem;
				}
				&-bullet {
					width: 2.2rem;
					height: 2.2rem;
					background: $white;
					margin: 0 1rem !important;
					@media (max-width: 767px) {
						width: 0.8rem;
						height: 0.8rem;
					}
					&-active {
						position: relative;
						@media (max-width: 767px) {
							position: relative;
						}
						&::after {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							width: 1.6rem;
							height: 1.6rem;
							border: 0.1rem solid $white;
							border-radius: 50%;
							transform: translate(-50%, -50%);
							@media (max-width: 767px) {
								content: "";
								position: absolute;
								top: 50%;
								left: 50%;
								width: 1.6rem;
								height: 1.6rem;
								border: 0.1rem solid $white;
								border-radius: 50%;
								transform: translate(-50%, -50%);
							}
						}
					}
				}
			}
			&-button {
				&-prev,
				&-next {
					color: $gray;
				}
			}
		}
	}
</style>
