<template>
	<div class="page-cabinet theme-container">
		<the-header :isCabinetVersion="true"></the-header>
		<main class="page-cabinet__wrapper">
			<aside
				class="page-cabinet__aside"
				:class="{ minimized: isNavMinimized }"
			>
				<the-navigation
					@openPopup="openPopup"
					:selectedTab="tab"
					v-model="isNavMinimized"
				></the-navigation>
				<div class="page-cabinet__hint" v-if="!isNavMinimized">
					<p>
						Есть вопросы <br />
						или предложения?
					</p>
					<v-button
						:text="'Напишите нам'"
						:type="'button'"
						class="gray"
					></v-button>
				</div>
			</aside>
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
		<transition>
			<popup-kolotok
				v-if="isPopupVisible"
				@closePopup="closePopup"
			></popup-kolotok>
		</transition>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	import TheHeader from "@/components/general/TheHeader";

	import TheNavigation from "@/components/cabinet/TheNavigation";
	import vButton from "@/components/UI/general/v-button";
	import PopupKolotok from "@/components/general/PopupKolotok";

	import TheFooter from "@/components/general/TheFooter";

	export default {
		name: "PageCabinet",
		components: {
			TheHeader,

			TheNavigation,
			vButton,

			PopupKolotok,

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
			isNavMinimized: false,
		}),
		computed: {
			...mapState({
				tab: (state) => state.cabinet.tab,
				user_auth: (state) => state.cabinet.user_auth,
			}),
		},

		methods: {
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
			closePopup() {
				this.isPopupVisible = false;
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

		&__aside {
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
	}
</style>
