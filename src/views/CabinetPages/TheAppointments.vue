<template>
	<div class="the-appointments">
		<div class="the-appointments__header">
			<h1 class="the-appointments__title">Встречи</h1>
			<div class="the-appointments__notification">
				<div>
					<img src="/img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3 class="the-appointments__notification-desc">
					Для записи на встречу воспользуйтесь формой. У вас нет
					прошедших встреч.
				</h3>
			</div>
		</div>
		<div class="the-appointments__body">
			<appointment-form />
		</div>
	</div>
</template>

<script>
	import AppointmentForm from "@/components/cabinet/AppointmentForm.vue";

	export default {
		name: "TheAppointments",
		components: { AppointmentForm },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-appointments {
		color: $dark;
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}
		&__title {
			margin-bottom: 1.5rem;
			font-size: 3rem;
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
				background-color: $blue;
				width: 5.2rem;
				height: 5.2rem;
				border-radius: 50%;
			}
			&-desc {
				font-size: 2rem;
				font-weight: 600;
			}
		}
	}
</style>
