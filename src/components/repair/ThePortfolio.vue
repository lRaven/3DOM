<template>
	<section class="the-portfolio center" v-once>
		<div data-aos="fade-up" class="the-portfolio__card">
			<h2 class="the-portfolio__card-title">Больше наших работ на vk.com</h2>
			<h3 class="the-portfolio__card-subtitle">Свежие работы наших дизайнов</h3>

			<v-button text="Перейти к работам" color="white" direction="reverse">
				<template v-slot:icon>
					<svg
						width="57"
						height="18"
						viewBox="0 0 57 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 8.5H56M56 8.5L47.4062 17M56 8.5L47.4062 1"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</template>
			</v-button>
		</div>
	</section>
</template>

<script>
	export default { name: 'ThePortfolio' };
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-portfolio {
		&__card {
			background: #cee5ff url(/public/img/repair/portfolio-bg.png) right center /
				contain no-repeat;
			border-radius: 3rem;
			padding: 5rem 10rem;
			color: $dark-blue;
			&-title {
				font-size: 3.2rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
			&-subtitle {
				font-size: 2rem;
				margin-bottom: 12rem;
			}
			.v-button {
				padding: 2rem 3rem;
				color: inherit;
				border-radius: 5rem;
				font-weight: 700;
				font-size: 1.8rem;
			}
		}
	}
</style>
