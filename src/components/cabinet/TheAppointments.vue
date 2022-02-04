<template>
	<div class="appointments">
		<div class="appointments__header">
			<h1 class="appointments__title">Встречи</h1>
			<div class="appointments__notification">
				<div>
					<img src="img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3 class="appointments__notification-desc">
					Для записи на встречу воспользуйтесь формой. У вас нет
					прошедших встреч.
				</h3>
			</div>
		</div>
		<div class="appointments__body">
			<appointment-form />
		</div>
	</div>
</template>

<script>
	import AppointmentForm from "./AppointmentForm.vue";

	export default {
		name: "Appointments",
		components: {
			AppointmentForm,
		},
	};
</script>

<style lang="scss" scoped>
	.appointments {
		color: var(--dark);
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}
		&__title {
			margin-bottom: 1.5rem;
			font-size: var(--text-30);
			font-weight: 600;
		}
		&__notification {
			display: flex;
			align-items: center;
			gap: 2.4rem;
			div {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--blue);
				width: 5.2rem;
				height: 5.2rem;
				border-radius: 50%;
			}
			&-desc {
				font-size: var(--text-20);
				font-weight: 600;
			}
		}
	}
</style>
