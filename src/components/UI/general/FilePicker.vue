<template>
	<label
		class="file-picker"
		:class="{ active: isActive }"
		@dragover.prevent
		@dragenter.prevent="highlightBlock"
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
		/>

		<p class="file-picker__description">
			Выберите или перетащите файл в эту область<br />
			Вы можете прикрепить
			{{ number }} файлов размером до {{ size }} мб каждый
		</p>

		<div class="file-picker__selected-files" v-show="files.length > 0">
			<div class="file-picker__selected-files-description">
				Загруженные файлы:
			</div>
			<div class="file-picker__selected-files-list">
				<p
					class="file-picker__file-name"
					v-for="(item, index) in filesPreview"
					:key="item.id"
				>
					{{ item }}{{ index < filesPreview.length - 1 ? ',' : '' }}
				</p>
			</div>
		</div>

		<v-button text="+ Прикрепить файл" color="bordered"></v-button>
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
			const collectFilesPreview = (files) => {
				filesPreview.value = files.reduce((acc, cur) => {
					acc.push(cur.name);
					return acc;
				}, []);
			};

			const selectFiles = (target) => {
				files.value = [...target.files];

				collectFilesPreview([...target.files]);
			};

			const handleDrop = (e) => {
				const dt = e.dataTransfer;
				const droppedFiles = dt.files;
				files.value.push(...droppedFiles);

				collectFilesPreview([...droppedFiles]);
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
		* {
			pointer-events: none;
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

		&__selected-files {
			margin-bottom: 2rem;
			&-description {
				font-size: 1.6rem;
				font-weight: 500;
				color: $gray;
				margin-bottom: 0.5rem;
			}
			&-list {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}
		}
	}
</style>
