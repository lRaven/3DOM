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
				v-if="isPopupVisible"
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
					<form class="page-cabinet__questions-suggestions">
						<p class="page-cabinet__questions-suggestions-key">
							ФИО:
						</p>
						<v-input type="text"></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							Телефон:
						</p>
						<v-input type="tel"></v-input>

						<p class="page-cabinet__questions-suggestions-key">
							some desc:
						</p>
						<v-textarea></v-textarea>

						<v-button text="hui"></v-button>
					</form>
				</template>
			</v-popup>
		</transition>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	import TheHeader from "@/components/general/TheHeader";

	import TheNavigation from "@/components/cabinet/TheNavigation";
	import PopupKolotok from "@/components/general/PopupKolotok";
	import vInput from "@/components/UI/cabinet/v-input.vue";
	import vTextarea from "@/components/UI/cabinet/v-textarea.vue";

	import TheFooter from "@/components/general/TheFooter";

	export default {
		name: "PageCabinet",
		components: {
			TheHeader,

			TheNavigation,
			PopupKolotok,
			vInput,
			vTextarea,

			TheFooter,
		},
		watch: {
			user_auth() {
				if (this.user_auth === false)
					this.$router.push({ name: "Login" });
			},
		},
		data: () => ({
			isPopupVisible: false,
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
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
			closePopupKolotok() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},

			closePopup() {
				this.isPopupOpen = false;
				document.body.classList.remove("locked");
			},
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
			grid-template-columns: max-content 1fr;
			grid-gap: 2rem 1.5rem;
			width: 70rem;
			&-key {
				font-size: 1.6rem;
			}
			.v-button {
				grid-column: 2/3;
				width: 100%;
			}
		}
	}
</style>
