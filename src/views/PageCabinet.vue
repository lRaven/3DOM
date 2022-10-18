<template>
	<div class="page-cabinet theme-container">
		<the-header
			:is-cabinet-version="true"
			:is-nav-minimized="isNavMinimized"
			@open-mortgage-calculator="openMortgageCalculator"
			@open-popup="openPopup"
			@maximize-nav="maximizeNav"
			@minimize-nav="minimizeNav"
		></the-header>
		<main class="page-cabinet__wrapper">
			<div
				class="page-cabinet__left-panel"
				:class="{ minimized: isNavMinimized }"
			>
				<the-navigation
					@openPopupKolotok="openPopupKolotok"
					@openPopup="openPopup"
					@maximizeNav="maximizeNav"
					@minimizeNav="minimizeNav"
					:selectedTab="tab"
					:isNavMinimized="isNavMinimized"
				></the-navigation>
				<div class="page-cabinet__hint" v-show="!isNavMinimized">
					<p>
						Есть вопросы <br />
						или предложения?
					</p>
					<v-button
						text="Напишите нам"
						type="button"
						color="gray"
						@click="isPopupOpen = true"
					></v-button>
				</div>
			</div>
			<div class="page-cabinet__main" :class="{ maximized: isNavMinimized }">
				<router-view v-slot="{ Component }">
					<transition name="fade-up-fast" mode="out-in">
						<component :is="Component" @openPopup="openPopup" />
					</transition>
				</router-view>
			</div>
		</main>
		<the-footer />

		<transition mode="out-in">
			<popup-kolotok
				v-if="isPopupKolotokOpen"
				@closePopup="closePopupKolotok"
			></popup-kolotok>
		</transition>

		<transition mode="out-in">
			<v-popup
				v-if="isPopupOpen"
				@closePopup="closePopup"
				title="Вопросы и предложения"
			>
				<template v-slot>
					<form
						class="page-cabinet__questions-suggestions"
						@submit.prevent="send_message"
					>
						<p class="page-cabinet__questions-suggestions-key">ФИО:</p>
						<v-input type="text" v-model="support_form_data.name"></v-input>

						<p class="page-cabinet__questions-suggestions-key">Телефон:</p>
						<v-input
							type="tel"
							v-model="support_form_data.phone_number"
						></v-input>

						<p class="page-cabinet__questions-suggestions-key">E-mail:</p>
						<v-input type="email" v-model="support_form_data.email"></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							Тема обращения:
						</p>
						<v-dropdown
							:options="topic_list"
							showedValue="value"
							placeholder="Выберите тему*"
							:getValue="support_form_data.topic_type"
							v-model="support_form_data.topic_type"
						></v-dropdown>

						<v-textarea
							placeholder="Напишите сообщение..."
							maxlength="1000"
							v-model="support_form_data.message"
						></v-textarea>

						<v-button
							type="submit"
							text="Отправить"
							:disabled="!isSupportFormValid"
						></v-button>
					</form>
				</template>
			</v-popup>
		</transition>

		<transition mode="out-in" name="fade-up">
			<mortgage-calculator
				v-if="isMortgageCalculatorOpen"
				closeIcon="/img/icons/cabinet/close.svg"
				light="light"
				@closeMortgageCalculator="isMortgageCalculatorOpen = false"
			></mortgage-calculator>
		</transition>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import { supportForm } from '@/mixins/support';

	import TheHeader from '@/components/general/TheHeader';

	import TheNavigation from '@/components/cabinet/TheNavigation';
	import PopupKolotok from '@/components/general/PopupKolotok';
	import vInput from '@/components/UI/cabinet/v-input.vue';
	import vTextarea from '@/components/UI/cabinet/v-textarea.vue';
	import vDropdown from '@/components/UI/cabinet/v-dropdown.vue';

	import TheFooter from '@/components/general/TheFooter';

	import mortgageCalculator from '@/components/academ/MortgageCalculator';

	import { useToast } from 'vue-toastification';

	export default {
		name: 'PageCabinet',
		mixins: [supportForm],
		components: {
			TheHeader,

			TheNavigation,
			PopupKolotok,
			vInput,
			vTextarea,
			vDropdown,

			TheFooter,

			mortgageCalculator,
		},
		watch: {
			userAuth() {
				if (this.userAuth === false) this.$router.push({ name: 'Login' });
			},
		},
		data: () => ({
			isPopupKolotokOpen: false,
			isPopupOpen: false,
			isMortgageCalculatorOpen: false,

			isNavMinimized: false,
			isMobileMenuOpen: false,
		}),
		computed: {
			...mapState({
				tab: (state) => state.cabinet.tab,
				userAuth: (state) => state.cabinet.userAuth,
				documentWidth: (state) => state.documentWidth,
			}),
		},
		methods: {
			openPopupKolotok() {
				this.isPopupKolotokOpen = true;
				document.body.classList.add('locked');
			},
			closePopupKolotok() {
				this.isPopupKolotokOpen = false;
				document.body.classList.remove('locked');
			},

			openPopup() {
				this.isPopupOpen = true;
			},
			closePopup() {
				this.isPopupOpen = false;
				document.body.classList.remove('locked');
			},

			openMortgageCalculator() {
				this.isMortgageCalculatorOpen = true;
				document.body.classList.add('locked');
			},
			closeMortgageCalculator() {
				this.isMortgageCalculatorOpen = false;
				document.body.classList.remove('locked');
			},

			minimizeNav() {
				this.isNavMinimized = true;
				document.body.classList.remove('locked');
			},
			maximizeNav() {
				this.isNavMinimized = false;

				if (this.documentWidth <= 767) {
					document.body.classList.add('locked');
				}
			},
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	.theme-container {
		display: grid;
		grid-template-rows: 1fr max-content;
		height: 100%;
		min-height: 100vh;
		background-color: #fff;
	}

	.page-cabinet {
		&__wrapper {
			padding-top: 8.5rem;
			padding-bottom: 5rem;
			display: grid;
			grid-template-columns: 1fr;
			@media (max-width: 767px) {
				padding-top: 6rem;
				padding-bottom: 2rem;
			}
		}

		&__left-panel {
			position: sticky;
			left: 0;
			top: 8.5rem;
			height: max-content;
			width: 34rem;
			z-index: 2;
			transition: all 0.3s ease;
			-ms-overflow-style: none;
			scrollbar-width: none;
			grid-area: 1/1;
			transform: translateY(-8.5rem);
			@media (max-width: 1050px) {
				width: max-content;
			}

			&::-webkit-scrollbar {
				display: none;
			}

			&.minimized {
				width: calc(7rem);
				transition: all 0.3s ease;
			}
		}

		&__hint {
			position: relative;
			margin-top: 5rem;
			padding: 0 0 0rem 2.5rem;
			transition: all 0.3s ease;
			@media (max-width: 1050px) {
				display: none;
			}

			p {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
		}

		&__main {
			padding: 4rem 2rem 2rem 36rem;
			width: 100%;
			grid-area: 1/1;
			transition: all 0.3s ease;
			@media (max-width: 1050px) {
				padding-left: 9rem;
			}
			@media (max-width: 767px) {
				padding: 2rem 1.5rem;
			}

			&.maximized {
				padding-left: 9rem;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}
			}
		}

		&__questions-suggestions {
			display: grid;
			grid-template-columns: 20rem 1fr;
			grid-gap: 2rem;
			align-items: center;
			width: 90rem;
			@media (max-width: 1300px) {
				width: calc(100vw - 35rem);
			}
			@media (max-width: 1023px) {
				grid-template-columns: 1fr;
			}
			@media (max-width: 767px) {
				width: calc(100vw - 6rem);
			}
			@media (max-width: 600px) {
				width: 100%;
			}
			&-key {
				font-size: 1.8rem;
				font-weight: 500;
				color: #979797;
			}
			.v-button {
				grid-column: 2/3;
				width: 100%;
				border-radius: 1rem;
				height: 5.5rem;
				display: flex;
				align-items: center;
				@media (max-width: 1023px) {
					grid-column: inherit;
				}
			}
			.v-textarea {
				grid-column: 2/3;
				height: 24rem;
				@media (max-width: 1023px) {
					grid-column: inherit;
				}
			}
		}
	}
</style>

<style lang="scss">
	.page-cabinet {
		&__main {
			h1 {
				font-size: 3rem;
				font-weight: 600;
				@media (max-width: 540px) {
					font-size: 2.4rem;
				}
			}
		}
	}
</style>
