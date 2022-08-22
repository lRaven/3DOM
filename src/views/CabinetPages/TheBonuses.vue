<template>
	<div class="the-bonuses">
		<div class="the-bonuses__header">
			<h1 class="the-bonuses__title">Бонусы</h1>

			<div class="the-bonuses__tabs">
				<label ref="tab_all" @click="this.tab = 'tab_all'">
					<input
						type="radio"
						name="tabs"
						class="radio__real"
						checked
					/>
					<span class="radio__fake"> Бонусные программы </span>
				</label>
				<label ref="tab_personal" @click="this.tab = 'tab_personal'">
					<input type="radio" name="tabs" class="radio__real" />
					<span class="radio__fake"> Персональные бонусы </span>
				</label>

				<hr
					class="the-bonuses__line"
					:style="`width: ${tabLineWidth}px; transform: translateX(${tabLinePosition}px)`"
				/>
			</div>
		</div>
		<div class="the-bonuses__body" v-if="tab === 'tab_all'">
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow"
				title="«Госпрограмма 2020»: ипотека со ставкой 0,1%"
				:description="`Программа позволяет приобрести недвижимость, не перегружая\nличный бюджет на выплату процентов!`"
				buttonColor="white"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__2"
				:title="`Подключить интернет\nв один клик\nДОМ.РУ`"
				description=""
				color="gray"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__3"
				description=""
				:title="`«Скидка\nдо 110 000 рублей\nдля онлайн-покупателей`"
				buttonColor="white"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__4"
				title="«Госпрограмма 2020»: ипотека со ставкой 0,1%"
				:description="`Программа позволяет приобрести недвижимость, не перегружая\nличный бюджет на выплату процентов!`"
				color="white"
				@buttonAction="openPopup"
			></services-item>
		</div>
		<div class="the-bonuses__body" v-if="tab === 'tab_personal'">
			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow"
				title="«Госпрограмма 2020»: ипотека со ставкой 0,1%"
				:description="`Программа позволяет приобрести недвижимость, не перегружая\nличный бюджет на выплату процентов!`"
				buttonColor="white"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__2"
				:title="`Подключить интернет\nв один клик\nДОМ.РУ`"
				description=""
				color="gray"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__3"
				description=""
				:title="`«Скидка\nдо 110 000 рублей\nдля онлайн-покупателей`"
				buttonColor="white"
				@buttonAction="openPopup"
			></services-item>

			<services-item
				class="animate__animated animate__fadeInUpBig animate__fast wow the-bonuses__4"
				title="«Госпрограмма 2020»: ипотека со ставкой 0,1%"
				:description="`Программа позволяет приобрести недвижимость, не перегружая\nличный бюджет на выплату процентов!`"
				color="white"
				@buttonAction="openPopup"
			></services-item>
		</div>

		<transition mode="out-in">
			<v-popup
				v-if="isPopupVisible"
				@closePopup="closePopup"
				title="3DOM консультация"
			>
				<form
					@submit.prevent=""
					class="the-bonuses__consultation-request"
				>
					<p class="the-bonuses__consultation-request-description">
						Отправьте заявку<br />
						для получения консультации
					</p>
					<academ-input
						placeholder="Имя"
						type="text"
						dark="dark"
						v-model="request_support_form_data.name"
					></academ-input>
					<academ-input
						placeholder="Телефон"
						type="tel"
						dark="dark"
						v-model="request_support_form_data.phone_number"
					></academ-input>
					<v-checkbox
						v-model="request_support_form_data.privacyPolicy"
						text="Даю согласие на обработку персональных данных"
						dark="dark"
					></v-checkbox>
					<v-button
						text="Отправить заявку"
						type="submit"
						:disabled="!isRequestSupportFormValid"
					></v-button>
				</form>
			</v-popup>
		</transition>
	</div>
</template>

<script>
	import ServicesItem from "@/components/cabinet/ServicesItem.vue";

	import AcademInput from "@/components/academ/academ-input.vue";
	import vCheckbox from "@/components/academ/v-checkbox.vue";

	import { mapState, mapMutations } from "vuex";
	import { requestSupportForm } from "@/mixins/support";

	export default {
		name: "TheBonuses",
		mixins: [requestSupportForm],
		components: {
			ServicesItem,
			AcademInput,
			vCheckbox,
		},
		watch: {
			tab() {
				this.getTabLineWidth();
			},
			user: {
				handler() {
					this.getTabLineWidth();
				},
				deep: true,
			},
		},
		computed: {
			...mapState({
				user: (state) => state.cabinet.user,
			}),
			tabLinePosition() {
				if (this.tab === "tab_all") return 0;
				else return this.$refs.tab_all.clientWidth + 50;
			},
		},
		data: () => ({
			tab: "tab_all",
			isPopupVisible: false,

			tabLineWidth: 0,
		}),
		methods: {
			...mapMutations(["SET_TAB"]),

			getTabLineWidth() {
				this.tabLineWidth = this.$refs[this.tab].clientWidth;
			},

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
			},
		},
		created() {
			this.SET_TAB("bonuses");
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-bonuses {
		color: $dark;
		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}
		&__title {
			margin-bottom: 1.5rem;
			font-size: 3rem;
			font-weight: 600;
		}
		&__tabs {
			position: relative;
			display: flex;
			gap: 5rem;
			border-bottom: 0.1rem solid #c4c4c4;
			font-size: 2rem;
			font-weight: 600;
			color: #979797;

			label {
				cursor: pointer;
				padding: 2rem 0;
			}
			.radio {
				&__real {
					display: none;
					&:checked {
						+ .radio__fake {
							color: $blue;
							transition: all 0.3s ease;
						}
					}
				}
				&__fake {
					user-select: none;
				}
			}
		}
		&__line {
			position: absolute;
			left: 0;
			bottom: -0.1rem;
			height: 0.2rem;
			background-color: $blue;
			transition: all 0.3s ease;
		}
		&__body {
			display: grid;
			grid-column-gap: 2.3rem;
			grid-template-columns: repeat(2, 1fr);
			div {
				&:first-child {
					grid-area: 1/1/1/3;
				}
				&:last-child {
					grid-area: 3/1/3/3;
				}
			}
		}
		&__2 {
			animation-delay: 200ms;
		}
		&__3 {
			animation-delay: 400ms;
		}
		&__4 {
			animation-delay: 600ms;
		}

		&__consultation-request {
			display: flex;
			flex-direction: column;
			&-description {
				font-size: 1.8rem;
				margin-bottom: 6rem;
				line-height: 1.3;
			}
			.v-checkbox {
				margin: 2rem 0 4rem 0;
			}
			.v-button {
				margin: auto;
				padding: 1.8rem 5rem;
			}
		}
	}
</style>
