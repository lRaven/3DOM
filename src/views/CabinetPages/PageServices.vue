<template>
	<div class="page-services">
		<div class="page-services__header">
			<h1 class="page-services__title">Услуги</h1>
			<div class="page-services__notification">
				<div class="page-services__notification-icon-wrapper">
					<img
						src="/img/icon/cabinet/notifications.svg"
						alt="icon"
						class="page-services__notification-icon"
					/>
				</div>
				<h3 class="page-services__notification-desc">
					У вас нет подключенных услуг
				</h3>
			</div>
		</div>
		<div class="page-services__body">
			<services-item
				title="Trade-in"
				:description="`Trade-in — это программа, которая поможет обменять вашу\nстарую квартиру на новую.`"
				buttonColor="white"
				@buttonAction="openPopup"
			></services-item>
			<services-item
				color="gray"
				title="Страхование"
				:description="`Страхование ипотеки — финансовая защита всех участников сделки,\nпозволяющая сделать процесс безопасным, удобным, быстрым.`"
				@buttonAction="openPopup"
			></services-item>
			<services-item
				color="white"
				title="Оценка квартиры"
				:description="`Определяем стоимость объекта недвижимости или отдельных прав\nв отношении объекта — права собственности, аренды, пользования.`"
				@buttonAction="openPopup"
			></services-item>
		</div>

		<transition mode="out-in">
			<v-popup
				v-if="isPopupVisible"
				@closePopup="closePopup"
				title="3DOM консультация"
			>
				<form
					@submit.prevent=""
					class="page-services__consultation-request"
				>
					<p class="page-services__consultation-request-description">
						Отправьте заявку<br />
						для получения консультации
					</p>
					<academ-input
						placeholder="Имя"
						type="text"
						dark="dark"
						v-model="request_support_form_data.name"
					></academ-input>
					<academ-input
						placeholder="Телефон"
						type="tel"
						dark="dark"
						v-model="request_support_form_data.phone_number"
					></academ-input>
					<v-checkbox
						v-model="request_support_form_data.privacyPolicy"
						text="Даю согласие на обработку персональных данных"
						dark="dark"
					></v-checkbox>
					<v-button
						text="Отправить заявку"
						type="submit"
						:disabled="!isRequestSupportFormValid"
					></v-button>
				</form>
			</v-popup>
		</transition>
	</div>
</template>

<script>
	import ServicesItem from "@/components/cabinet/ServicesItem.vue";
	import AcademInput from "@/components/academ/academ-input.vue";
	import vCheckbox from "@/components/academ/v-checkbox.vue";

	import { mapMutations } from "vuex";

	import { requestSupportForm } from "@/mixins/support";

	export default {
		name: "TheServices",
		mixins: [requestSupportForm],
		components: { ServicesItem, AcademInput, vCheckbox },
		data: () => ({ isPopupVisible: false }),
		methods: {
			...mapMutations(["SET_TAB"]),

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
			},
		},
		created() {
			this.SET_TAB("services");
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-services {
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
					@media (max-width: 767px) {
						height: 3rem;
						width: 3rem;
						min-width: 3rem;
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

		&__consultation-request {
			display: flex;
			flex-direction: column;
			&-description {
				font-size: 1.8rem;
				margin-bottom: 6rem;
				line-height: 1.3;
			}
			.v-checkbox {
				margin: 2rem 0 4rem 0;
			}
			.v-button {
				margin: auto;
				padding: 1.8rem 5rem;
			}
		}
	}
</style>
