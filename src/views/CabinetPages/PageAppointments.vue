<template>
	<div class="page-appointment">
		<div class="page-appointment__header">
			<h1 class="page-appointment__title">Встречи</h1>
			<div class="page-appointment__notification">
				<div>
					<img src="/img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3 class="page-appointment__notification-desc">
					Для записи на встречу воспользуйтесь формой. У вас нет
					прошедших встреч.
				</h3>
			</div>
		</div>
		<div class="page-appointment__body">
			<appointment-form />
		</div>
	</div>
</template>

<script>
	import AppointmentForm from "@/components/cabinet/AppointmentForm.vue";

	import { mapMutations } from "vuex";
	import { getApartments } from "@/api/academ";

	export default {
		name: "PageAppointments",
		components: { AppointmentForm },
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("appointments");
			getApartments();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-appointment {
		color: $dark;
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}
		&__title {
			margin-bottom: 1.5rem;
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
