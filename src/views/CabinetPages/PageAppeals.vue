<template>
	<div class="page-appeals">
		<h1 class="page-appeals__title">Обращения</h1>

		<v-loader v-show="!isChatsLoaded"></v-loader>

		<div class="page-appeals__main">
			<div
				class="page-appeals__empty"
				v-show="chats.length === 0 && isChatsLoaded"
			>
				<img
					src="/img/cabinet/empty.svg"
					alt="empty"
					class="page-appeals__empty-img"
				/>
				<p class="page-appeals__empty-description">Обращений нет</p>
				<v-button
					text="Написать нам"
					@click="this.$emit('openPopup')"
				></v-button>
			</div>

			<div
				class="page-appeals__list"
				v-show="chats.length > 0 && isChatsLoaded"
			>
				<transition-group mode="out-in" name="fade-up-fast">
					<appeal-card
						v-for="chat in chats"
						:key="chat.id"
						:appeal="chat"
					></appeal-card>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";

	import AppealCard from "@/components/cabinet/appeals/AppealCard.vue";

	export default {
		name: "PageAppeals",
		components: { AppealCard },
		data: () => ({ isChatsLoaded: false }),
		computed: { ...mapState({ chats: (state) => state.messenger.chats }) },
		methods: {
			...mapMutations(["SET_TAB", "CLEAR_CHATS"]),
			...mapActions(["getChats"]),

			async getAppealChats() {
				try {
					const response = await this.getChats();

					if (response.status === 200) {
						this.isChatsLoaded = true;
					}
				} catch (err) {
					this.isChatsLoaded = true;
					throw new Error(err);
				}
			},
		},
		created() {
			this.SET_TAB("appeals");
			this.getAppealChats();
		},
		unmounted() {
			this.CLEAR_CHATS();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-appeals {
		position: relative;
		min-height: calc(100vh - 14.5rem);
		&__title {
			font-size: 3rem;
			font-weight: 500;
			margin-bottom: 4rem;
		}
		&__main {
			display: grid;
		}
		&__empty {
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 6rem;
			display: grid;
			grid-template-columns: 20rem 1fr;
			align-items: center;
			grid-gap: 0 4rem;
			grid-area: 1/1;
			&-img {
				width: 100%;
				grid-area: 1/1/3/1;
			}
			&-description {
				font-size: 3rem;
				font-weight: 600;
			}
			.v-button {
				border-radius: 1rem;
				height: max-content;
				// margin-top: auto;
			}
		}
		&__list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			grid-area: 1/1;
		}
	}
</style>
