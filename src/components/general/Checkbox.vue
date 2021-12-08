<template>
	<label class="checkbox" v-for="date in dates" :key="date.id">
		<input type="checkbox" class="checkbox__real" name="date" />
		<span class="checkbox__fake">{{ date.text }}</span>
	</label>
</template>

<script>
	export default {
		name: "Checkbox",
		data() {
			return {
				dates: [
					{
						id: "1",
						text: `Заселён`,
					},
					{
						id: "2",
						text: "2022",
					},
					{
						id: "3",
						text: "2023",
					},
					{
						id: "4",
						text: "2024",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.checkbox {
		&__real {
			display: none;
			&:checked + .checkbox__fake {
				background-color: var(--middle-gray);
				color: var(--white);
				transition: all 0.3s ease;
			}
		}
		&__fake {
			cursor: pointer;
			user-select: none;
			display: block;
			text-align: center;
			width: 9.5rem;
			border-radius: 2rem;
			padding: 2.2rem 1.3rem;
			color: var(--gray);
			font-size: var(--text-16);
			font-weight: 600;
			background-color: var(--light-gray);
			transition: all 0.2s ease;
			&:hover {
				background-color: var(--middle-gray);
				color: var(--white);
				transition: all 0.3s ease;
			}
		}
	}
</style>
