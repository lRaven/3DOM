<template>
	<section class="gallery">
		<div class="gallery__container center">
			<div class="gallery__photos">
				<figure>
					<img src="img/academ/apartment-photo1.png" alt="" />
				</figure>
				<figure>
					<img src="img/academ/apartment-photo2.png" alt="" />
				</figure>
			</div>
			<p>уровень комфорта</p>

			<div class="gallery__footer">
				<Btn
					:text="`Заявка на отделку
					высшего уровня`"
					class="dark"
				></Btn>
				<div>
					<p>определяет</p>
					<p>уровень жизни</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Btn from "./Btn.vue";

	export default {
		name: "Gallery",
		components: {
			Btn,
		},
	};
</script>

<style lang="scss" scoped>
	.gallery {
		padding-bottom: 5rem;
		padding-top: 2rem;
		&__container {
			width: 100%;
		}
		&__photos {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
			margin-bottom: 4rem;
			height: 45rem;
			figure{
				max-height: 100%;
				img{
					object-fit:cover;
					height: 45rem;
					width: 100%;
				}
			}
		}
		&__footer {
			display: flex;
			align-items: flex-end;
			gap: 21rem;
			p {
				margin-top: 1rem;
			}
			&:nth-child(3) {
				color: var(--white);
				font-weight: 300;
			}
		}
		p {
			text-transform: uppercase;
			font-size: 7.2rem;
			&:nth-child(2) {
				color: var(--gold);
				font-weight: 600;
			}
		}
	}
</style>
