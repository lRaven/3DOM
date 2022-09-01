<template>
	<div class="the-navigation" :class="{ minimized: isNavMinimized }">
		<h1 class="the-navigation__title" v-show="!isNavMinimized">
			Личный кабинет
		</h1>
		<ul class="the-navigation__list" v-if="currentTabs === 'admin'">
			<li
				data-aos="fade-up"
				v-for="tab in tabs_admin"
				:key="tab.id"
				class="the-navigation__item"
				:title="tab.description"
				@click="this.$router.push(tab.link)"
			>
				<div
					class="the-navigation__icon-wrapper"
					:class="{ minimized: isNavMinimized }"
				>
					<img
						:src="
							selectedTab === tab.tab
								? tab.icon_selected
								: tab.icon
						"
						class="the-navigation__icon"
						alt=""
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
		<ul class="the-navigation__list" v-else>
			<li
				data-aos="fade-up"
				v-for="tab in tabs_user"
				:key="tab.id"
				class="the-navigation__item"
				:title="tab.description"
				@click="
					tab.link !== null
						? this.$router.push(tab.link)
						: this.$emit('openPopup')
				"
			>
				<div
					class="the-navigation__icon-wrapper"
					:class="{ minimized: isNavMinimized }"
				>
					<img
						:src="
							selectedTab === tab.tab
								? tab.icon_selected
								: tab.icon
						"
						class="the-navigation__icon"
						alt=""
					/>
				</div>
				<p
					v-show="!isNavMinimized"
					:class="`the-navigation__description${
						selectedTab === tab.tab ? '-bold' : ''
					}`"
				>
					{{ tab.description }}
				</p>
			</li>
		</ul>
		<div
			class="the-navigation__hide"
			:class="{ minimized: isNavMinimized }"
			@click="
				isNavMinimized === true
					? (isNavMinimized = false)
					: (isNavMinimized = true)
			"
		>
			<img
				src="/img/icon/cabinet/arrow.svg"
				class="the-navigation__hide-icon"
				:class="{ minimized: isNavMinimized }"
				alt=""
			/>
			<p class="the-navigation__hide-description" v-if="!isNavMinimized">
				Свернуть
			</p>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";

	export default {
		name: "TheNavigation",
		props: { selectedTab: String },
		data: () => ({ isNavMinimized: false }),
		watch: {
			isNavMinimized() {
				this.$emit("update:modelValue", this.isNavMinimized);
			},
		},
		computed: {
			currentTabs() {
				if (this.role === "AdminCRM" || this.is_superuser === true) {
					return "admin";
				} else return "user";
			},

			...mapState({
				tabs_user: (state) => state.cabinet.tabs_user,
				tabs_admin: (state) => state.cabinet.tabs_admin,

				role: (state) => state.cabinet.user.role,
				is_superuser: (state) => state.cabinet.user.is_superuser,
			}),
		},
		methods: {
			...mapMutations(["SET_TAB"]),

			scrollTop: () => window.scrollTo(0, 0),

			openPopup() {
				this.$emit("openPopup");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-navigation {
		display: flex;
		flex-direction: column;
		background-color: $blue;
		color: $white;
		padding: 13rem 3rem 6rem 3rem;
		border-radius: 0 0 3rem 0;
		width: 34rem;
		overflow: hidden;
		transition: all 0.3s ease;
		&.minimized {
			width: 7rem;
			padding: 13rem 0 5rem 0;
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

		&__hide {
			padding: 1rem;
			cursor: pointer;
			display: flex;
			align-self: flex-end;
			align-items: center;
			font-size: 1.8rem;
			font-weight: 500;
			gap: 1.6rem;
			margin-top: 3rem;
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
</style>
