import { send_support_message } from "@/api/support";
import { returnErrorMessages } from "@/js/returnErrorMessages";

import { mapState, mapActions } from 'vuex';

export const requestSupportForm = {
	computed: {
		isRequestSupportFormValid() {
			if (
				this.request_support_form_data.name.length > 0 &&
				this.request_support_form_data.phone_number.length > 0 &&
				this.request_support_form_data.privacyPolicy === true
			) { return true; }
			else { return false; }
		},
	},
	data: () => ({
		request_support_form_data: {
			name: '',
			phone_number: '',
			privacyPolicy: false,
		}
	}),
}

export const supportForm = {
	computed: {
		...mapState({
			user_id: (state) => state.cabinet.user.id,
			topic_list: (state) => state.messenger.topics,
		}),

		isSupportFormValid() {
			if (
				this.support_form_data.name.length > 0 &&
				this.support_form_data.phone_number.length > 0 &&
				this.support_form_data.email.length > 0 &&
				this.support_form_data.topic_type !== "" &&
				this.support_form_data.message.length > 0
			) { return true; }
			else { return false; }
		},
	},
	data: () => ({
		support_form_data: {
			name: "",
			phone_number: "",
			email: "",
			topic_type: "",
			message: "",
		},
	}),
	methods: {
		...mapActions(['getChats']),
		//* отправка сообщения в поддержку
		async send_message(event) {
			try {
				const response = await send_support_message({
					name: this.support_form_data.name,
					phone_number: this.support_form_data.phone_number,
					email: this.support_form_data.email,
					topic_type: this.support_form_data.topic_type.id,
					message: this.support_form_data.message,
					user: this.user_id,
				});
				if (response.status === 201) {
					this.toast.success(
						"Спасибо за обращение, с вами скоро свяжутся"
					);
					console.log("support message send");

					this.getChats();

					event.target.reset();
					this.resetForm();

					this.$router.push({ name: 'Appeals' })
				}
				if (response.status === 400) {
					const error_list = returnErrorMessages(response.data);
					error_list.forEach((el) => {
						this.toast.error(el);
					});
				}
			} catch (err) {
				throw new Error(err);
			}
		},

		resetForm() {
			for (const key in this.support_form_data) {
				if (Object.hasOwnProperty.call(this.support_form_data, key)) {
					this.support_form_data[key] = "";
				}
			}
		},
	},
}
