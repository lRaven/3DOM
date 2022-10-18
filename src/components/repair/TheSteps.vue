<template>
	<section class="the-steps center">
		<steps-card
			title="Этапы работ"
			:checklist="checklist"
			buttonText="Получить консультацию"
		></steps-card>
	</section>
</template>

<script>
	import StepsCard from '@/components/trade-in/StepsCard.vue';

	export default {
		name: 'TheSteps',
		components: { StepsCard },
		setup() {
			const checklist = [
				{ id: 1, description: 'Бесплатная консультация' },
				{ id: 2, description: 'Снятие замеров на объекте' },
				{
					id: 3,
					description:
						'Определение пакетного предложения и дополнительных опций',
				},
				{
					id: 4,
					description: 'Согласование условий и сроков проведения работ',
				},
				{ id: 5, description: 'Заключение договора' },
				{ id: 6, description: 'Оплата' },
				{ id: 7, description: 'Сдача-приемка квартиры' },
			];

			return { checklist };
		},
	};
</script>
