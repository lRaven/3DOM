<template>
	<section class="feedback">
		<div class="feedback__container center">
			<h2>
				Лучше<br />
				один раз<br />
				увидеть!
			</h2>
			<div class="feedback__form">
				<form action="#">
					<p>
						Оставьте контактные данные,<br />
						и мы свяжемся с вами в ближайшее время
					</p>
					<Input :type="'text'" :placeholder="'Имя'"></Input>
					<Input :type="'tel'" :placeholder="'Телефон'"></Input>
					<checkbox
						:text="'Даю согласие на обработку персональных данных'"
					>
					</checkbox>
					<button class="button gold">Записаться на просмотр</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import Input from "./Input.vue";
	import Checkbox from "./Checkbox.vue";

	export default {
		name: "Feedback",
		components: {
			Input,
			Checkbox,
		},
	};
</script>

<style lang="scss" scoped>
	.feedback {
		min-height: calc(100vh - 17rem);
		display: block;
		&__container {
			padding-top: 7rem;
			display: flex;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 17rem);
			position: relative;
		}
		h2 {
			text-transform: uppercase;
			position: absolute;
			top: 7rem;
			left: 0;
			font-size: 4.8rem;
			color: var(--gold);
			font-weight: 300;
		}
		p {
			font-size: 1.8rem;
			line-height: 2.2rem;
			margin-bottom: 3rem;
		}
		&__form {
			color: var(--white);
			width: 41rem;
		}
	}
	.button {
		user-select: none;
		cursor: pointer;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 24rem;
		height: 4.5rem;
		border: 0.1rem solid var(--gold);
		padding-left: 2rem;
		border-radius: 0 2rem 2rem 0;
		font-size: 1.5rem;
		font-weight: 600;

		transition: all 0.3s ease;
		&.gold {
			background-color: var(--gold);
			color: var(--dark-green);
			&:hover {
				background-color: var(--dark-green);
				color: var(--gold);
				transition: all 0.3s ease;
			}
		}
		&.dark {
			background-color: var(--dark-green);
			color: var(--gold);
			&:hover {
				background-color: var(--gold);
				color: var(--dark-green);
				transition: all 0.3s ease;
			}
		}
	}
</style>
