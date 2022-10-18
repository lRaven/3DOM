<template>
	<section class="page-appointment">
		<div class="page-appointment__header" v-once>
			<h1 class="page-appointment__title">Встречи</h1>
			<div class="page-appointment__notification">
				<div class="page-appointment__notification-icon-wrapper">
					<img
						src="/img/icons/cabinet/notifications.svg"
						alt="icon"
						class="page-appointment__notification-icon"
					/>
				</div>
				<h3 class="page-appointment__notification-desc">
					Для записи на встречу воспользуйтесь формой. У вас нет прошедших
					встреч.
				</h3>
			</div>
		</div>

		<div class="page-appointment__body">
			<appointment-form />
		</div>
	</section>
</template>

<script>
	import AppointmentForm from '@/components/cabinet/AppointmentForm.vue';

	import { mapMutations } from 'vuex';
	import { getApartments } from '@/api/academ';

	export default {
		name: 'PageAppointments',
		components: { AppointmentForm },
		methods: {
			...mapMutations(['setTab']),
		},
		created() {
			this.setTab('appointments');
			getApartments();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.page-appointment {
		color: $dark;
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
			@media (max-width: 767px) {
				padding: 0;
			}
		}
		&__title {
			margin-bottom: 1.5rem;
		}
		&__notification {
			display: flex;
			align-items: center;
			gap: 2.4rem;
			&-icon {
				width: 50%;
				&-wrapper {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $blue;
					width: 5.2rem;
					min-width: 5.2rem;
					height: 5.2rem;
					border-radius: 50%;
					@media (max-width: 540px) {
						width: 3rem;
						min-width: 3rem;
						height: 3rem;
					}
				}
			}
			&-desc {
				font-size: 2rem;
				font-weight: 600;
				@media (max-width: 767px) {
					font-size: 1.6rem;
				}
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}
		}
	}
</style>
