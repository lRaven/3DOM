<template>
	<section class="pantry" id="pantry">
		<div class="pantry__container center">
			<div class="pantry__body">
				<div class="pantry__content">
					<h2>кладовочка!</h2>
					<p>Как говорится, запас карман не тянет.</p>

					<p>
						Но, согласитесь, держать в квартире комплект зимней
						резины, байдарку, велосипед, детскую коляску, масляную
						батарею для дачи, и самое главное: галерею закруток на
						зиму от любимой тёщи — такое себе удовольствие.
					</p>

					<p>
						Кладовые помещения — лучший выход из положения.
						Прохладно, сухо, темно. Храните вещи здесь, а не в
						квартире.
					</p>

					<p>Самое оно.</p>
				</div>
				<div class="pantry__images">
					<figure class="pantry__img">
						<img src="img/academ/advantage-img1.png" alt="" />
					</figure>
					<figure>
						<img
							src="img/academ/apartment-img-miniature.png"
							alt=""
						/>
					</figure>
				</div>
			</div>
			<Btn :text="'Выбрать помещение'" class="dark"></Btn>
		</div>
	</section>
</template>

<script>
	import Btn from "./Btn.vue";

	export default {
		name: "Pantry",
		components: {
			Btn,
		},
	};
</script>

<style lang="scss" scoped>
	.pantry {
		display: block;
		padding-bottom: 5rem;
		&__body {
			display: grid;
			grid-template-columns: 38rem 1fr;
			align-items: center;
			gap: 5rem;
		}
		&__content {
			height: fit-content;
			h2 {
				text-transform: uppercase;
				font-size: 4.8rem;
				color: var(--gold);
				font-weight: 300;
				margin-bottom: 3rem;
			}
			p {
				color: var(--white);
				line-height: 2.2rem;
				font-size: 1.8rem;
			}
			p + p {
				margin-top: 3rem;
			}
		}
		&__images {
			width: 81.1rem;
			justify-self: flex-end;
		}
		&__img {
			margin-bottom: 2rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
