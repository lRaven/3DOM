<template>
	<div
		class="v-call animate__animated animate__bounceInUp"
		@click="openPopup()"
	>
		<img
			src="/img/icon/general/call-circle.svg"
			class="v-call__img"
			alt=""
		/>
	</div>
	<transition>
		<v-popup
			v-if="isPopupVisible"
			@closePopup="closePopup"
			title="3DOM консультация"
		>
			<p class="v-popup__description">
				Отправьте заявку<br />
				для получения консультации
			</p>
			<academ-input
				placeholder="Имя"
				type="text"
				dark="dark"
				v-model="name"
			></academ-input>
			<academ-input
				placeholder="Телефон"
				type="tel"
				dark="dark"
				v-model="tel"
			></academ-input>
			<v-checkbox
				v-model="privacyPolicy"
				text="Даю согласие на обработку персональных данных"
				dark="dark"
			></v-checkbox>
			<v-button text="Отправить заявку" type="button"></v-button>
		</v-popup>
	</transition>
</template>

<script>
	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";

	export default {
		name: "vCall",
		data() {
			return {
				isPopupVisible: false,

				name: "",
				tel: "",
				privacyPolicy: false,
			};
		},
		components: { AcademInput, vCheckbox },
		methods: {
			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-call {
		cursor: pointer;
		user-select: none;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 1rem 0.3rem $white;
		position: fixed;
		bottom: 5rem;
		right: 5rem;
		width: 6rem;
		height: 6rem;
		z-index: 2;
		&__img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		.v-popup {
			&__description {
				font-size: 1.8rem;
				margin-bottom: 2rem;
			}
			.v-checkbox {
				margin: 2rem 0;
			}
			.v-button {
				width: 100%;
			}
		}
	}
	@media (max-width: 1050px) {
		.v-call {
			display: none;
		}
	}
</style>

<style lang="scss">
	.v-call {
		+ .v-popup-wrapper {
			.v-popup {
				&__description {
					font-size: 1.8rem;
					margin-bottom: 2rem;
				}
				.v-checkbox {
					margin: 2rem 0;
				}
				.v-button {
					width: 100%;
				}
			}
		}
	}
</style>
