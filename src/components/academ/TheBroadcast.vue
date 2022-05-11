<template>
	<section class="broadcast" id="broadcast">
		<div class="broadcast__container center">
			<h2>строй-видео</h2>

			<iframe
				width="800"
				height="600"
				src="https://www.youtube.com/embed/5qap5aO4i9A"
				frameborder="0"
				allowfullscreen
			></iframe>

			<p>
				посмотреть,<br />
				как другие работают –<br />
				это бесценно…
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBroadcast",
	};
</script>

<style lang="scss" scoped>
	.broadcast {
		background: url(/public/img/academ/broadcast__img.png) center right /
			auto 100% no-repeat;
		&__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: var(--gold);
			text-transform: uppercase;
			h2 {
				padding-left: 7rem;

				font-weight: 300;
				font-size: 4.8rem;
				margin-bottom: 7rem;
			}
			p {
				padding-left: 7rem;
				text-align: right;
				font-size: 2.4rem;
				width: 50rem;
				line-height: 3rem;
			}
			iframe {
				margin-bottom: 5rem;
			}
		}
	}

	@media (max-width: 1023px) {
		.broadcast {
			display: none;
		}
	}
</style>
