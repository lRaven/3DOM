<template>
	<section class="office" id="office">
		<div class="office__left">
			<div class="office__feature">
				<p class="office__feature-word">ቢሮ</p>
				<p class="office__feature-description">
					А вот так пишется «ОФИС»<br />
					на ахмарском языке.
				</p>
			</div>
		</div>
		<div class="office__right">
			<div class="office__title">
				<img
					src="img/icon/academ/semicircle.svg"
					class="office__semicircle"
					alt=""
				/>
				<img
					src="img/icon/academ/office.svg"
					class="office__text"
					alt=""
				/>
			</div>
			<img src="img/academ/office-img.png" class="office__img" alt="" />
			<Btn :text="'Выбрать офис'" class="gold"></Btn>
			<img
				src="img/academ/apartment-img-miniature2.png"
				class="office__plan"
				alt=""
			/>
		</div>
	</section>
</template>

<script>
	import Btn from "./Btn.vue";

	export default {
		name: "Office",
		components: {
			Btn,
		},
	};
</script>

<style lang="scss" scoped>
	.office {
		padding: 0;
		display: grid;
		grid-template-columns: 34% 66%;
		&__left {
			position: relative;
			background: url("/img/academ/office-bg1.png") center / cover
				no-repeat;
		}
		&__feature {
			position: absolute;
			bottom: 3rem;
			right: 2.5rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			&-word {
				font-size: 5rem;
			}
			&-description {
				color: var(--dark-green);
				font-size: var(--text-13);
				font-weight: 600;
			}
		}
		&__right {
			background: url("/img/academ/office-bg2.png") center / cover
				no-repeat;
		}
		&__title {
			position: relative;
			margin-top: 13rem;
			margin-bottom: 7rem;
		}
		&__semicircle {
			position: absolute;
			top: 50%;
			left: 0;
			height: 25rem;
			transform: translateY(-50%) rotate(180deg);
		}
		&__text {
			position: relative;
			left: -10.5rem;
		}
		&__img {
			margin-bottom: 4.5rem;
		}
		.button {
			min-width: 18rem;
			width: min-content;
			margin-bottom: 4.5rem;
		}
		&__plan {
			margin-bottom: 10rem;
		}
	}
</style>
