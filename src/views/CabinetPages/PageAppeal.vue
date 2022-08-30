<template>
	<div class="page-appeal">
		<div class="page-appeal__header">
			<button
				type="button"
				class="page-appeal__back"
				title="Вернуться к списку обращений"
				@click="this.$router.push({ name: 'Appeals' })"
			>
				<svg
					width="18"
					height="12"
					viewBox="0 0 18 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="page-appeal__back-icon"
				>
					<path
						d="M5.10938 0.960938L0.0703125 6L5.10938 11.0391L6.16406 9.9609L2.95312 6.75H18V5.25H2.95312L6.16406 2.03906L5.10938 0.960938Z"
						fill="currentColor"
					/>
				</svg>
			</button>
			<h1 class="page-appeal__title">
				Обращение #{{ appeal_id }} {{ chat_data.name }}
			</h1>
		</div>

		<the-messenger
			:chat_data="chat_data"
			:appeal_id="appeal_id"
		></the-messenger>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";
	import { getChat } from "@/api/messenger";

	import TheMessenger from "@/components/cabinet/messenger/TheMessenger.vue";

	export default {
		name: "PageAppeal",
		components: { TheMessenger },
		computed: {
			appeal_id() {
				return Number(this.$route.params.id);
			},
		},
		data: () => ({ chat_data: {} }),
		methods: {
			...mapMutations(["SET_TAB"]),

			async getChatData() {
				try {
					const response = await getChat(this.appeal_id);

					if (response.status === 200) {
						this.chat_data = response.data;
					}
				} catch (err) {
					this.$router.push({ name: "Appeals" });
					throw new Error(err);
				}
			},
		},
		created() {
			this.SET_TAB("appeals");

			if (this.appeal_id) {
				this.getChatData();
			} else {
				this.$router.push({ name: "Appeals" });
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-appeal {
		display: grid;
		grid-template-rows: max-content 1fr;
		grid-gap: 4rem;
		height: calc(100vh - 13rem);
		&__header {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		&__back {
			background-color: transparent;
			height: 3rem;
			color: $blue;
			&-icon {
				width: 100%;
				height: 100%;
			}
		}

		&__title {
		}
	}
</style>
