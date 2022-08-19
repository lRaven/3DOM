<template>
	<div class="page-cabinet theme-container">
		<the-header :isCabinetVersion="true"></the-header>
		<main class="page-cabinet__wrapper">
			<div
				class="page-cabinet__left-panel"
				:class="{ minimized: isNavMinimized }"
			>
				<the-navigation
					@openPopup="openPopupKolotok"
					:selectedTab="tab"
					v-model="isNavMinimized"
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
			<div
				class="page-cabinet__main"
				:class="{ maximized: isNavMinimized }"
			>
				<router-view v-slot="{ Component }">
					<transition name="fade-up-fast" mode="out-in">
						<component :is="Component" />
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
						<p class="page-cabinet__questions-suggestions-key">
							ФИО:
						</p>
						<v-input type="text" v-model="form_data.name"></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							Телефон:
						</p>
						<v-input
							type="tel"
							v-model="form_data.phone_number"
						></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							E-mail:
						</p>
						<v-input
							type="email"
							v-model="form_data.email"
						></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							Тема обращения:
						</p>
						<v-dropdown
							:options="topic_list"
							showedValue="value"
							placeholder="Выберите тему*"
							:getValue="form_data.topic_type"
							v-model="form_data.topic_type"
						></v-dropdown>

						<v-textarea
							placeholder="Напишите сообщение..."
							maxlength="1000"
							v-model="form_data.message"
						></v-textarea>

						<v-button
							type="submit"
							text="Отправить"
							:disabled="!isFormValid"
						></v-button>
					</form>
				</template>
			</v-popup>
		</transition>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import { supportForm } from "@/mixins/support";

	import TheHeader from "@/components/general/TheHeader";

	import TheNavigation from "@/components/cabinet/TheNavigation";
	import PopupKolotok from "@/components/general/PopupKolotok";
	import vInput from "@/components/UI/cabinet/v-input.vue";
	import vTextarea from "@/components/UI/cabinet/v-textarea.vue";
	import vDropdown from "@/components/UI/cabinet/v-dropdown.vue";

	import TheFooter from "@/components/general/TheFooter";

	import { useToast } from "vue-toastification";

	export default {
		name: "PageCabinet",
		mixins: [supportForm],
		components: {
			TheHeader,

			TheNavigation,
			PopupKolotok,
			vInput,
			vTextarea,
			vDropdown,

			TheFooter,
		},
		watch: {
			user_auth() {
				if (this.user_auth === false)
					this.$router.push({ name: "Login" });
			},
		},
		data: () => ({
			isPopupKolotokOpen: false,
			isPopupOpen: false,

			isNavMinimized: false,
		}),
		computed: {
			...mapState({
				tab: (state) => state.cabinet.tab,
				user_auth: (state) => state.cabinet.user_auth,
			}),
		},
		methods: {
			openPopupKolotok() {
				this.isPopupKolotokOpen = true;
				document.body.classList.add("locked");
			},
			closePopupKolotok() {
				this.isPopupKolotokOpen = false;
				document.body.classList.remove("locked");
			},

			closePopup() {
				this.isPopupOpen = false;
				document.body.classList.remove("locked");
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
		grid-template-rows: 1fr 8rem;
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
		}

		&__left-panel {
			position: sticky;
			left: 0;
			top: 8.5rem;
			transform: translateY(-8.5rem);
			overflow-y: auto;
			height: max-content;
			width: 34rem;
			background-color: #fff;
			z-index: 2;
			transition: all 0.3s ease;
			-ms-overflow-style: none;
			scrollbar-width: none;
			grid-area: 1/1;

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
			margin-top: 9rem;
			padding: 0 0 8rem 2.5rem;
			transition: all 0.3s ease;

			p {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
		}

		&__main {
			padding: 6rem 2rem 17rem 36rem;
			width: 100%;
			grid-area: 1/1;
			transition: all 0.3s ease;

			&.maximized {
				padding-left: 9rem;
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
