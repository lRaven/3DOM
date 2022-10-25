<template>
	<section class="page-feedback">
		<div class="page-feedback-form">
			<div class="page-feedback-form__header" v-once>
				<h1 class="page-feedback-form__title">Обратная связь</h1>
			</div>
			<div class="page-feedback-form__body">
				<form @submit.prevent="send_message">
					<p class="page-feedback-form__description" v-once>ФИО:</p>
					<v-input type="text" v-model="support_form_data.name"></v-input>

					<p class="page-feedback-form__description" v-once>Номер телефона:</p>

					<v-input
						type="tel"
						v-model="support_form_data.phone_number"
					></v-input>

					<p class="page-feedback-form__description" v-once>Email:</p>
					<v-input type="email" v-model="support_form_data.email"></v-input>

					<p class="page-feedback-form__description" v-once>Тема обращения:</p>
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

					<p class="page-feedback-form__bottom" v-once>
						Нажимая кнопку «Отправить», вы подтверждаете своё согласие <br />
						на обработку <a>персональных данных</a>.
					</p>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapMutations } from 'vuex';
	import { supportForm } from '@/mixins/support';

	import vDropdown from '@/components/UI/cabinet/v-dropdown';
	import vTextarea from '@/components/UI/cabinet/v-textarea';

	import { useToast } from 'vue-toastification';

	export default {
		name: 'PageFeedback',
		mixins: [supportForm],
		components: {
			vDropdown,
			vTextarea,
		},
		methods: {
			...mapMutations(['setTab']),
		},
		created() {
			this.setTab('feedback');
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.page-feedback {
		&-form {
			border-radius: 3rem;
			box-shadow: $shadow;
			&__header {
				padding: 5.5rem 7.4rem;
				border-bottom: 1px solid #c4c4c4;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}
			}

			&__body {
				padding: 4rem 6.5rem 10.5rem 7.4rem;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}

				form {
					display: grid;
					grid-template-columns: 20rem 1fr;
					grid-gap: 2rem;
					@media (max-width: 540px) {
						grid-template-columns: 1fr;
					}
				}
			}
			&__description {
				display: flex;
				align-items: center;
				color: #979797;
				font-size: 1.8rem;
				font-weight: 500;
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}
			.v-input {
				grid-column: 2/3;
				@media (max-width: 540px) {
					grid-column: inherit;
				}
				&:invalid {
					border-color: $red;
				}
			}
			.v-dropdown {
				grid-column: 2/3;
				font-size: 1.8rem;
				@media (max-width: 540px) {
					grid-column: inherit;
				}
			}
			.v-textarea {
				grid-column: 2/3;
				height: 24rem;
				@media (max-width: 540px) {
					grid-column: inherit;
					height: 15rem;
				}
			}
			.v-button {
				border-radius: 1rem;
				width: 100%;
				grid-column: 2/3;
				height: 5.5rem;
				display: flex;
				align-items: center;
				@media (max-width: 540px) {
					grid-column: inherit;
					height: inherit;
				}
			}
			&__bottom {
				grid-column: 2/3;
				font-size: 1.8rem;
				font-weight: 500;
				line-height: 2.2rem;
				color: #979797;
				@media (max-width: 540px) {
					grid-column: inherit;
					font-size: 1.2rem;
					line-height: 1.2;
				}

				a {
					cursor: pointer;
					color: $blue;
				}
			}
		}
	}
</style>
