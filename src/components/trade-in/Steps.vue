<template>
	<section class="steps">
		<div class="steps__container center">
			<div class="steps__list">
				<h2 class="steps__title">Trade-in — это просто</h2>
				<div class="steps__list-item">
					<span class="steps__step">1</span>
					<p class="steps__desciption">
						Независимая оценка вашей квартиры.
					</p>
				</div>
				<div class="steps__list-item">
					<span class="steps__step">2</span>
					<p class="steps__desciption">
						Продаем ваше вторичное жильё.
					</p>
				</div>
				<div class="steps__list-item">
					<span class="steps__step">3</span>
					<p class="steps__desciption">
						Собираем документы и проводим сделку.
					</p>
				</div>
				<div class="steps__list-item">
					<span class="steps__step">4</span>
					<p class="steps__desciption">
						Деньги с продажи старой квартиры в счёт опаты новой.
					</p>
				</div>
				<div class="steps__list-item">
					<span class="steps__step">5</span>
					<p class="steps__desciption">
						Забрать ключи и въехать в новую квартиру.
					</p>
				</div>
			</div>
			<div class="steps__img"></div>
			<div class="steps__stages">
				<div class="steps__stage"></div>
				<div class="steps__stage"></div>
				<div class="steps__stage"></div>
				<div class="steps__stage"></div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Steps",
	};
</script>

<style lang="scss" scoped>
	.steps {
		display: flex;
		align-items: center;
		&__container {
			color: var(--dark);
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 9rem;
		}
		&__list {
			&-item {
				display: flex;
				align-items: center;
				gap: 4rem;
				+ .steps__list-item {
					margin-top: 2rem;
				}
			}
		}
		&__title {
			font-size: var(--text-40);
			font-weight: 600;
			margin-bottom: 5rem;
		}
		&__step {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: var(--text-35);
			font-weight: 500;
			color: var(--blue);
			width: 5.5rem;
			height: 5.5rem;
			border-radius: 50%;
			background-color: var(--light-gray);
		}
		&__desciption {
			font-size: var(--text-18);
		}
		&__img {
			background-color: #edf5fd;
			min-height: 41rem;
		}
		&__stages {
			display: flex;
			justify-content: space-between;
			gap: 2.4rem;
			grid-area: 2/1/2/3;
		}
		&__stage {
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			background-color: var(--white);
			border-radius: 3rem;
			min-height: 27rem;
			width: 100%;
		}
	}
</style>
