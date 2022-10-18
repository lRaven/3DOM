<template>
	<div class="the-navigation" :class="{ minimized: isNavMinimized }">
		<button
			v-show="(documentWidth <= 1050) & (documentWidth > 767)"
			type="button"
			class="the-navigation__close"
			:class="{ minimized: isNavMinimized }"
			@click="
				isNavMinimized === true
					? this.$emit('maximize-nav')
					: this.$emit('minimize-nav')
			"
		>
			<img
				src="/img/icons/general/arrow.svg"
				alt="icon"
				class="the-navigation__close-icon"
				v-once
			/>
		</button>

		<h1 class="the-navigation__title" v-show="!isNavMinimized">
			Личный кабинет
		</h1>

		<ul class="the-navigation__list">
			<li
				data-aos="fade-up"
				v-for="tab in tabs"
				:key="tab.id"
				class="the-navigation__item"
				:title="tab.description"
				@click="navActions(tab.link)"
			>
				<div
					class="the-navigation__icon-wrapper"
					:class="{ minimized: isNavMinimized }"
				>
					<img
						:src="selectedTab === tab.tab ? tab.iconSelected : tab.icon"
						class="the-navigation__icon"
						alt="icon"
					/>
				</div>
				<p
					v-if="!isNavMinimized"
					:class="`the-navigation__description${
						selectedTab === tab.tab ? '-bold' : ''
					}`"
				>
					{{ tab.description }}
				</p>
			</li>
		</ul>

		<button
			v-show="documentWidth > 1050"
			type="button"
			class="the-navigation__close-full"
			:class="{ minimized: isNavMinimized }"
			@click="
				isNavMinimized === true
					? this.$emit('maximize-nav')
					: this.$emit('minimize-nav')
			"
		>
			<img
				src="/img/icons/cabinet/arrow.svg"
				class="the-navigation__close-full-icon"
				:class="{ minimized: isNavMinimized }"
				alt=""
			/>
			<p class="the-navigation__close-full-description" v-if="!isNavMinimized">
				Свернуть
			</p>
		</button>

		<v-button
			v-show="documentWidth <= 1050 && !isNavMinimized"
			text="Напишите нам"
			type="button"
			color="white"
			@click="this.$emit('open-popup')"
		></v-button>
	</div>
</template>

<script>
	import { computed, watch, onMounted } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

	export default {
		name: 'TheNavigation',
		emits: ['minimize-nav', 'maximize-nav', 'open-popup-kolotok'],
		props: {
			selectedTab: String,
			isNavMinimized: {
				value: Boolean,
				required: true,
			},
		},

		setup(_, { emit }) {
			const store = useStore();
			const tabs = computed(() => store.getters.userTabs);
			const documentWidth = computed(() => store.state.documentWidth);

			watch(documentWidth, () => {
				if (documentWidth.value <= 1050) emit('minimize-nav');
			});

			const router = useRouter();
			const navActions = (link) => {
				link ? router.push(link) : emit('open-popup-kolotok');

				if (this.documentWidth <= 767) emit('minimize-nav');
			};

			onMounted(() => {
				if (documentWidth.value <= 1050) emit('minimize-nav');
			});

			return { tabs, documentWidth, navActions };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-navigation {
		display: flex;
		flex-direction: column;
		background-color: $blue;
		color: $white;
		padding: 13rem 3rem 6rem 3rem;
		border-radius: 0 0 3rem 0;
		width: 34rem;
		transition: all 0.3s ease;
		@media (max-width: 1050px) {
			position: fixed;
			left: 0;
			top: 0;
			padding-top: 10.6rem;
		}
		@media (max-width: 767px) {
			width: 100vw;
			height: 100vh;
			padding-top: 8.1rem;
			border-radius: 0;
		}
		&.minimized {
			width: 7rem;
			padding: 13rem 0 5rem 0;
			@media (max-width: 1050px) {
				padding-top: 10.6rem;
			}
			@media (max-width: 767px) {
				padding-top: 8.1rem;
				width: 100vw;
				transform: translateX(-100vw);
			}

			.the-navigation__close {
				transform: translateX(1.2rem);
			}
		}

		&__close {
			width: 2.4rem;
			height: 2.4rem;
			background-color: #fff;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: $shadow;
			align-self: flex-end;
			transform: translateX(4.2rem);
			transition: all 0.2s ease;
			margin-bottom: 1rem;
			&.minimized {
				.the-navigation__close-icon {
					transform: rotate(-90deg);
				}
			}
			&-icon {
				transform: rotate(90deg);
				transition: all 0.2s ease;
			}

			&-full {
				padding: 1rem;
				cursor: pointer;
				display: flex;
				align-self: flex-end;
				align-items: center;
				font-size: 1.8rem;
				font-weight: 500;
				gap: 1.6rem;
				margin-top: 3rem;
				background-color: transparent;
				color: $white;
				&.minimized {
					align-self: center;
				}

				&-icon {
					transition: all 0.3s ease;
					&.minimized {
						transform: rotate(-180deg);
					}
				}

				&-description {
					transition: all 0.3s ease;
				}
			}
		}

		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 4rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
		}

		&__list {
			display: flex;
			flex-direction: column;
			transition: all 1s ease;
			transition-delay: 0.3s;
		}

		&__item {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 2rem;
			padding: 1.7rem 0;
			height: 5.5rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
		}

		&__icon {
			height: 100%;
			animation-duration: 0.8s;
			&-wrapper {
				display: flex;
				justify-content: center;
				min-width: 2.5rem;
				width: 2.5rem;
				height: 2.1rem;
				&.minimized {
					width: 100%;
				}
			}
		}

		&__description {
			font-size: 1.8rem;

			&-bold {
				font-size: 1.8rem;
				font-weight: 700;
			}
		}
	}
</style>
