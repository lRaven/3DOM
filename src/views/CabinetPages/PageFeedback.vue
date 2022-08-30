<template>
	<div class="page-feedback">
		<div class="page-feedback-form">
			<div class="page-feedback-form__header">
				<h1 class="page-feedback-form__title">Обратная связь</h1>
			</div>
			<div class="page-feedback-form__body">
				<form @submit.prevent="send_message">
					<p class="page-feedback-form__description">ФИО:</p>
					<v-input
						type="text"
						v-model="support_form_data.name"
					></v-input>

					<p class="page-feedback-form__description">
						Номер телефона:
					</p>

					<v-input
						type="tel"
						v-model="support_form_data.phone_number"
					></v-input>

					<p class="page-feedback-form__description">Email:</p>
					<v-input
						type="email"
						v-model="support_form_data.email"
					></v-input>

					<p class="page-feedback-form__description">
						Тема обращения:
					</p>
					<v-dropdown
						showedValue="value"
						placeholder="Выберите тему*"
						:options="topic_list"
						v-model="support_form_data.topic_type"
						:getValue="support_form_data.topic_type"
					></v-dropdown>

					<v-textarea
						placeholder="Напишите сообщение..."
						maxlength="1000"
						v-model="support_form_data.message"
					></v-textarea>

					<v-button
						text="Отправить"
						type="submit"
						ref="submit"
						:disabled="!isSupportFormValid"
					></v-button>

					<p class="page-feedback-form__bottom">
						Нажимая кнопку «Отправить», вы подтверждаете своё
						согласие <br />
						на обработку <a>персональных данных</a>.
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";
	import { supportForm } from "@/mixins/support";

	import vInput from "@/components/UI/cabinet/v-input";
	import vDropdown from "@/components/UI/cabinet/v-dropdown";
	import vTextarea from "@/components/UI/cabinet/v-textarea";

	import { useToast } from "vue-toastification";

	export default {
		name: "PageFeedback",
		mixins: [supportForm],
		components: {
			vInput,
			vDropdown,
			vTextarea,
		},
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("feedback");
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-feedback-form {
		border-radius: 3rem;
		box-shadow: $shadow;
		&__header {
			padding: 5.5rem 7.4rem;
			border-bottom: 1px solid #c4c4c4;
		}

		&__body {
			padding: 4rem 6.5rem 10.5rem 7.4rem;
			form {
				display: grid;
				grid-template-columns: 20rem 1fr;
				grid-gap: 2rem;
			}
		}
		&__description {
			display: flex;
			align-items: center;
			color: #979797;
			font-size: 1.8rem;
			font-weight: 500;
		}
		.v-input {
			grid-column: 2/3;
			&:invalid {
				border-color: $red;
			}
		}
		.v-dropdown {
			grid-column: 2/3;
			font-size: 1.8rem;
		}
		.v-textarea {
			grid-column: 2/3;
			height: 24rem;
		}
		&__bottom {
			grid-column: 2/3;
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.2rem;
			color: #979797;
			a {
				cursor: pointer;
				color: $blue;
			}
		}
	}
	.v-button {
		border-radius: 1rem;
		width: 100%;
		grid-column: 2/3;
		height: 5.5rem;
		display: flex;
		align-items: center;
	}
</style>
