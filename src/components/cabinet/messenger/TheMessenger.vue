<template>
	<div class="the-messenger">
		<h4 class="the-messenger__title">{{ chat_data.message }}</h4>
		<chat-body
			:messages="messages"
			:isMessageSent="isMessageSent"
			:isMessagesLoaded="isMessagesLoaded"
		></chat-body>
		<chat-send-message @sendMessage="sendMessage"></chat-send-message>
	</div>
</template>

<script>
	import { getMessages } from "@/api/messenger";
	import { mapState, mapGetters } from "vuex";

	import ChatBody from "@/components/cabinet/messenger/ChatBody.vue";
	import ChatSendMessage from "@/components/cabinet/messenger/ChatSendMessage.vue";

	export default {
		name: "TheMessenger",
		components: { ChatBody, ChatSendMessage },
		watch: {
			isMessageSent() {
				if (this.isMessageSent === true) {
					setTimeout(() => {
						this.isMessageSent = false;
					}, 100);
				}
			},
		},
		props: {
			appeal_id: {
				value: Number,
				required: true,
			},
			chat_data: {
				value: Object,
				required: true,
			},
		},
		computed: {
			...mapState({ user: (state) => state.cabinet.user }),
			...mapGetters(["baseURLWithoutProtocol"]),
		},
		data() {
			return {
				chatSocket: null,
				path: this.$route.path,

				messages: [],
				isMessageSent: false,
				isMessagesLoaded: false,
			};
		},
		methods: {
			async getChatMessages() {
				try {
					const response = await getMessages();

					if (response.status === 200) {
						this.messages = response.data.filter(
							(message) => message.ticket === this.appeal_id
						);
						this.isMessagesLoaded = true;
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			createWebSocket(base_url, chat_id, token) {
				this.chatSocket = new WebSocket(
					`${process.env.VUE_APP_WS_PROTOCOL}://${base_url}/ws/supportticket/${chat_id}/?Authorization=token ${token}`
				);
			},

			getMessage() {
				this.chatSocket.addEventListener("message", (m) => {
					const message = JSON.parse(m.data);

					if (message.sender.username === this.user.username) {
						this.isMessageSent = true;
					}

					this.messages.push(JSON.parse(m.data));
				});
			},
			sendMessage(message) {
				this.chatSocket.send(
					JSON.stringify({
						message: message,
						sender: this.user.id,
						receiver: null,
					})
				);
			},
			stopGetMessage() {
				this.chatSocket.removeEventListener("message", this.getMessage);
			},
		},
		created() {
			this.createWebSocket(
				this.baseURLWithoutProtocol,
				this.appeal_id,
				this.$cookies.get("auth_token")
			);

			this.getMessage();

			this.getChatMessages();
		},
		beforeUnmount() {
			this.stopGetMessage();
			this.chatSocket.close();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-messenger {
		box-shadow: $shadow;
		border-radius: 1rem;
		display: grid;
		grid-template-rows: max-content 1fr max-content;
		overflow: hidden;
		&__title {
			text-align: center;
			padding: 1.5rem;
			font-size: 2rem;
			border-bottom: 0.1rem solid $middle-gray;
		}
	}
</style>
