<template>
	<div class="page-appeals">
		<h1 class="page-appeals__title" v-once>Обращения</h1>

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
					v-once
				/>
				<p class="page-appeals__empty-description" v-once>
					Обращений нет
				</p>
				<v-button
					text="Написать нам"
					@click="this.$emit('openPopup')"
					v-once
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
						:messages="messages"
					></appeal-card>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";
	import { getMessages, getChats } from "@/api/messenger";

	import AppealCard from "@/components/cabinet/appeals/AppealCard.vue";

	export default {
		name: "PageAppeals",
		components: { AppealCard },
		data: () => ({
			isChatsLoaded: false,
			chats: [],
			messages: [],
		}),

		methods: {
			...mapMutations(["setTab"]),

			async getAppealChats() {
				try {
					const response = await getChats();

					if (response.status === 200) {
						this.isChatsLoaded = true;
						this.chats = response.data;
					}
				} catch (err) {
					this.isChatsLoaded = true;
					throw new Error(err);
				}
			},
			async getChatMessages() {
				try {
					const response = await getMessages();

					if (response.status === 200) {
						this.messages = response.data;
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		created() {
			this.setTab("appeals");
			this.getAppealChats();
			this.getChatMessages();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-appeals {
		position: relative;
		min-height: calc(100vh - 13rem);
		&__title {
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
