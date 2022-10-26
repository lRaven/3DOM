<template>
	<label
		class="file-picker"
		:class="{ active: isActive }"
		@dragenter.prevent="highlightBlock"
		@dragover.prevent="highlightBlock"
		@dragleave.prevent="unHighlightBlock"
		@drop.prevent="
			unHighlightBlock();
			handleDrop($event);
		"
	>
		<input
			type="file"
			class="file-picker__input"
			multiple
			accept="image/*"
			@change="selectFiles($event.target)"
			ref="input"
		/>

		<p class="file-picker__description">
			Выберите или перетащите файл в эту область<br />
			Вы можете прикрепить
			{{ number }} файлов размером до {{ size }} мб каждый
		</p>

		<v-button
			text="+ Прикрепить файл"
			color="bordered"
			@click="$refs.input.click()"
		></v-button>
	</label>
</template>

<script>
	import { ref, watch } from 'vue';

	export default {
		name: 'FilePicker',
		emits: ['update:modelValue'],
		props: {
			number: {
				value: Number,
				default: 10,
			},
			size: {
				value: Number,
				default: 16,
			},
		},
		setup(_, { emit }) {
			const files = ref([]);
			watch(
				files,
				() => {
					emit('update:modelValue', files.value);
				},
				{ deep: true }
			);

			const filesPreview = ref([]);

			const selectFiles = (target) => {
				files.value = [...target.files];
			};
			const handleDrop = (e) => {
				const dt = e.dataTransfer;
				const droppedFiles = dt.files;
				files.value.push(...droppedFiles);
			};

			const isActive = ref(false);

			const highlightBlock = () => (isActive.value = true);
			const unHighlightBlock = () => (isActive.value = false);

			return {
				files,
				filesPreview,
				selectFiles,
				handleDrop,

				isActive,
				highlightBlock,
				unHighlightBlock,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.file-picker {
		user-select: none;
		display: block;
		cursor: pointer;
		border: 0.1rem dashed rgba($gray, 0.4);
		border-radius: 0.5rem;
		padding: 1.2rem 1.2rem 2.8rem 1.2rem;
		transition: all 0.2s ease;
		&:hover {
			border-color: $blue;
			.v-button {
				border-color: $blue;
				color: $blue;
			}
		}
		&.active {
			border-color: $blue;
			.v-button {
				border-color: $blue;
				color: $blue;
			}
		}
		&__description {
			font-size: 1.4rem;
			color: $gray;
			line-height: 1.3;
			margin-bottom: 2rem;
		}

		.v-button {
			box-shadow: none;
		}

		&__input {
			display: none;
		}
	}
</style>
