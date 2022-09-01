const state = () => ({
	rates: [
		{
			id: 1,
			name: 'White box',
			description: 'для творческих людей, которые хотят избежать грязной работы',
			price: 6500,
			images: [
				{ id: 1, image: '/img/repair/apartment-1.jpg' },
				{ id: 2, image: '/img/repair/apartment-2.jpg' },
				{ id: 3, image: '/img/repair/apartment-3.jpg' },
				{ id: 4, image: '/img/repair/apartment-4.jpg' },
			],
			checklist: [
				{ id: 1, description: 'Предчистовая отделка стен', value: true },
				{ id: 2, description: 'Шпатлевка откосов и подготовка дверных проемов', value: true },
				{ id: 3, description: 'Разводка труб и вывод под сантехнику', value: true },
				{ id: 4, description: 'Электроразводка и устройство электрических точек', value: true },
				{ id: 5, description: 'Устройство вертикального короба в санузле', value: true },
				{ id: 6, description: 'Отделка стен, потолков и пола', value: false },
				{ id: 7, description: 'Установка входной и межкомнатных дверей', value: false },
				{ id: 8, description: 'Установка ванны, унитаза и раковины', value: false },
				{ id: 9, description: 'Устройства фартука из керамической плитки на кухне', value: false },
				{ id: 10, description: 'Дизайн-проект', value: false },
				{ id: 11, description: 'Вынос и вывоз мусора', value: true },
			],
		},
		{
			id: 2,
			name: 'Базовый',
			description: 'для тех, кому нужно быстро запустить квартиру для сдачи в аренду, или быстро и с минимальным бюджетом заехать самим',
			price: 12400,
			images: [
				{ id: 1, image: '/img/repair/apartment-2.jpg' },
				{ id: 2, image: '/img/repair/apartment-3.jpg' },
				{ id: 3, image: '/img/repair/apartment-4.jpg' },
				{ id: 4, image: '/img/repair/apartment-1.jpg' },
			],
			checklist: [
				{ id: 1, description: 'Предчистовая отделка стен', value: true },
				{ id: 2, description: 'Шпатлевка откосов и подготовка дверных проемов', value: true },
				{ id: 3, description: 'Разводка труб и вывод под сантехнику', value: true },
				{ id: 4, description: 'Электроразводка и устройство электрических точек', value: true },
				{ id: 5, description: 'Устройство вертикального короба в санузле', value: true },
				{ id: 6, description: 'Отделка стен, потолков и пола', value: true },
				{ id: 7, description: 'Установка входной и межкомнатных дверей', value: true },
				{ id: 8, description: 'Установка ванны, унитаза и раковины', value: true },
				{ id: 9, description: 'Устройства фартука из керамической плитки на кухне', value: false },
				{ id: 10, description: 'Дизайн-проект', value: false },
				{ id: 11, description: 'Вынос и вывоз мусора', value: true },
			],
		},
		{
			id: 3,
			name: 'Комфорт',
			description: 'для тех, кто любит основательность и индивидуальный подход',
			price: 16500,
			images: [
				{ id: 1, image: '/img/repair/apartment-3.jpg' },
				{ id: 2, image: '/img/repair/apartment-4.jpg' },
				{ id: 3, image: '/img/repair/apartment-1.jpg' },
				{ id: 4, image: '/img/repair/apartment-2.jpg' },
			],
			checklist: [
				{ id: 1, description: 'Предчистовая отделка стен', value: true },
				{ id: 2, description: 'Шпатлевка откосов и подготовка дверных проемов', value: true },
				{ id: 3, description: 'Разводка труб и вывод под сантехнику', value: true },
				{ id: 4, description: 'Электроразводка и устройство электрических точек', value: true },
				{ id: 5, description: 'Устройство вертикального короба в санузле', value: true },
				{ id: 6, description: 'Отделка стен, потолков и пола', value: true },
				{ id: 7, description: 'Установка входной и межкомнатных дверей', value: true },
				{ id: 8, description: 'Установка ванны, унитаза и раковины', value: true },
				{ id: 9, description: 'Устройства фартука из керамической плитки на кухне', value: true },
				{ id: 10, description: 'Дизайн-проект', value: false },
				{ id: 11, description: 'Вынос и вывоз мусора', value: true },
			],
		},
		{
			id: 4,
			name: 'Авторский',
			description: 'для тех, кто стремится к самовыражению и не выбирает стандартные решения',
			price: null,
			images: [
				{ id: 1, image: '/img/repair/apartment-4.jpg' },
				{ id: 2, image: '/img/repair/apartment-1.jpg' },
				{ id: 3, image: '/img/repair/apartment-2.jpg' },
				{ id: 4, image: '/img/repair/apartment-3.jpg' },
			],
			checklist: [
				{ id: 1, description: 'Предчистовая отделка стен', value: true },
				{ id: 2, description: 'Шпатлевка откосов и подготовка дверных проемов', value: true },
				{ id: 3, description: 'Разводка труб и вывод под сантехнику', value: true },
				{ id: 4, description: 'Электроразводка и устройство электрических точек', value: true },
				{ id: 5, description: 'Устройство вертикального короба в санузле', value: true },
				{ id: 6, description: 'Отделка стен, потолков и пола', value: true },
				{ id: 7, description: 'Установка входной и межкомнатных дверей', value: true },
				{ id: 8, description: 'Установка ванны, унитаза и раковины', value: true },
				{ id: 9, description: 'Устройства фартука из керамической плитки на кухне', value: true },
				{ id: 10, description: 'Дизайн-проект', value: true },
				{ id: 11, description: 'Вынос и вывоз мусора', value: true },
			],
		},
	],
})

const getters = {}

const mutations = {
	SET_RATES(state, payload) { state.rates = payload; },
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
