<template>
	<div class="chat-body">
		<v-loader v-if="!isMessagesLoaded"></v-loader>
		<p
			v-if="messages.length === 0 && isMessagesLoaded"
			class="chat-body__empty"
		>
			Нет сообщений
		</p>
		<transition mode="out-in" name="fade-up-fast">
			<ul
				class="chat-body__messages"
				ref="message_list"
				v-if="messages.length > 0 && isMessagesLoaded"
			>
				<chat-message
					v-for="message in messages"
					:key="message.id"
					:message="message"
				></chat-message>
			</ul>
		</transition>
	</div>
</template>

<script>
	import ChatMessage from "@/components/cabinet/messenger/ChatMessage.vue";

	export default {
		name: "ChatBody",
		components: { ChatMessage },
		props: {
			isMessageSent: {
				value: Boolean,
				default: false,
			},
			isMessagesLoaded: Boolean,
			messages: {
				value: Object,
				required: true,
			},
		},
		watch: {
			isMessageSent() {
				if (this.isMessageSent) {
					setTimeout(() => {
						this.scrollMessageList();
						console.log("Message sent");
					}, 100);
				}
			},
			messages() {
				if (this.messages.length > 0) {
					this.scrollMessageList();
				}
			},
		},
		methods: {
			scrollMessageList() {
				this.$nextTick(() => {
					this.$refs.message_list.scrollTop =
						this.$refs.message_list.scrollHeight;

					this.addSmoothScroll();
				});
			},
			addSmoothScroll() {
				if (!this.$refs.message_list.classList.contains("smooth")) {
					this.$refs.message_list.classList.add("smooth");
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.chat-body {
		padding: 1.5rem;
		display: grid;
		overflow: hidden;
		position: relative;
		&__empty {
			margin: auto;
			font-size: 1.6rem;
			grid-area: 1/1;
		}
		&__messages {
			display: flex;
			flex-direction: column;
			gap: 6rem;
			grid-area: 1/1;
			overflow-y: auto;
			overflow-x: hidden;
			scroll-behavior: initial;
			&.smooth {
				scroll-behavior: smooth;
			}

			&::-webkit-scrollbar {
				width: 0; /* ширина scrollbar */
			}
			scrollbar-width: 0;
		}
	}
</style>
