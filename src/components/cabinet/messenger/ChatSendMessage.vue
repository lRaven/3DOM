<template>
	<form class="chat-send-message" @submit.prevent="sendMessage">
		<div class="chat-send-message__content">
			<v-textarea
				placeholder="Написать сообщение..."
				v-model="message"
				@keydown.enter.prevent.exact="sendMessage"
				@keydown.ctrl.enter.prevent.exact="new_line"
			></v-textarea>
			<v-button
				type="submit"
				text="Отправить"
				color="bordered"
			></v-button>
		</div>
	</form>
</template>

<script>
	import vTextarea from "@/components/UI/cabinet/v-textarea.vue";

	export default {
		name: "ChatSendMessage",
		components: { vTextarea },
		data: () => ({ message: "" }),
		methods: {
			//* отправить сообщение
			sendMessage() {
				this.message = this.message.trim();

				if (this.message.length > 0) {
					this.$emit("sendMessage", this.message);
					this.message = "";
				}
			},

			//* перенос строки
			new_line(event) {
				const caret = event.target.selectionStart;
				event.target.setRangeText("\n", caret, caret, "end");
				this.message = event.target.value;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.chat-send-message {
		padding: 0 1.5rem 1.5rem;
		@media (max-width: 767px) {
			padding: 0 1.5rem 1.5rem 1.5rem;
		}
		&__content {
			display: flex;
			border: 0.1rem solid rgba(50, 50, 50, 0.1);
			border-radius: 0.6rem;
			gap: 2rem;
			padding-bottom: 1rem;
			@media (max-width: 450px) {
				flex-direction: column;
				padding: 1rem;
			}
		}
		.v-textarea {
			width: 100%;
			border: none;
			font-size: 1.4rem;
		}
		.v-button {
			padding: 1.2rem 2.8rem;
			font-size: 1.4rem;
			height: max-content;
			margin-top: auto;
			margin-right: 1rem;
			border-radius: 1rem;
			@media (max-width: 450px) {
				width: 100%;
			}
		}
	}
</style>
