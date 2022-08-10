<template>
	<div class="services">
		<div class="services__header">
			<h1 class="services__title">Услуги</h1>
			<div class="services__notification">
				<div>
					<img src="/img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3 class="services__notification-desc">
					У вас нет подключенных услуг
				</h3>
			</div>
		</div>
		<div class="services__body">
			<services-item
				:bg="'blue'"
				:title="'Trade-in'"
				:description1="`Trade-in — это программа, которая поможет обменять вашу старую`"
				:description2="`квартиру на новую.`"
				:btn="'white'"
			></services-item>
			<services-item
				:bg="'gray'"
				:title="'Страхование'"
				:description1="`Страхование ипотеки — финансовая защита всех участников сделки,`"
				:description2="`позволяющая сделать процесс безопасным, удобным, быстрым.`"
				:btn="'blue'"
			></services-item>
			<services-item
				:title="'Оценка квартиры'"
				:description1="`Определяем стоимость объекта недвижимости или отдельных прав`"
				:description2="`в отношении объекта — права собственности, аренды, пользования.`"
				:btn="'blue'"
			></services-item>
		</div>
	</div>
</template>

<script>
	import ServicesItem from "./ServicesItem.vue";

	export default {
		name: "TheServices",
		components: {
			ServicesItem,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.services {
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
		&__notification {
			display: flex;
			align-items: center;
			gap: 2.4rem;
			div {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $blue;
				width: 5.2rem;
				height: 5.2rem;
				border-radius: 50%;
			}
			&-desc {
				font-size: 2rem;
				font-weight: 600;
			}
		}
	}
</style>
