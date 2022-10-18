<template>
	<div class="project-select">
		<h2 class="project-select__title" v-once>Параметры квартиры</h2>

		<div class="project-select__row">
			<p class="project-select__row-title" v-once>Выберите тип жилья</p>
			<div class="project-select__row-list">
				<v-checkbox v-for="item in estates" :key="item.id"></v-checkbox>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProjectSelect',
		setup() {
			const estates = [
				{ id: 1, description: 'Новостройка' },
				{ id: 2, description: 'Вторичное жилье' },
			];

			return { estates };
		},
	};
</script>

<style lang="scss" scoped>
	.project-select {
		&__title {
		}

		&__row {
			&-title {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 1.5rem;
			}
			&-list {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;
			}
		}
	}
</style>
