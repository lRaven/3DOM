<template>
	<div class="appeal-card">
		<template v-if="document_width > 1260">
			<p
				class="appeal-card__id appeal-card__col"
				:title="`#${appeal.id}`"
			>
				#{{ appeal.id }}
			</p>

			<p class="appeal-card__name appeal-card__col" :title="appeal.name">
				{{ appeal.name }}
			</p>

			<p class="appeal-card__topic appeal-card__col" :title="topic.value">
				{{ topic.value }}
			</p>

			<p
				class="appeal-card__message appeal-card__col"
				:title="appeal.message"
			>
				{{ appeal.message }}
			</p>

			<v-button
				text="Подробнее"
				color="bordered"
				@click="this.$router.push(`/cabinet/appeal/${appeal.id}`)"
			></v-button>
		</template>

		<template v-else>
			<div class="appeal-card__row">
				<p
					class="appeal-card__id appeal-card__col"
					:title="`#${appeal.id}`"
				>
					#{{ appeal.id }}
				</p>
				<p
					class="appeal-card__topic appeal-card__col"
					:title="topic.value"
				>
					{{ topic.value }}
				</p>

				<v-button
					text="Подробнее"
					color="bordered"
					@click="this.$router.push(`/cabinet/appeal/${appeal.id}`)"
				></v-button>
			</div>

			<p class="appeal-card__name appeal-card__col" :title="appeal.name">
				{{ appeal.name }}
			</p>

			<p
				class="appeal-card__message appeal-card__col"
				:title="appeal.message"
			>
				{{ appeal.message }}
			</p>
		</template>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "AppealCard",
		props: {
			appeal: {
				value: Object,
				required: true,
			},
			messages: Array,
		},
		computed: {
			...mapState({
				topics: (state) => state.messenger.topics,
				document_width: (state) => state.document_width,
			}),

			topic() {
				return this.topics.find(
					(topic) => topic.id === this.appeal.topic_type
				);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.appeal-card {
		box-shadow: $shadow;
		padding: 1.5rem 2rem;
		border-radius: 1rem;
		display: grid;
		grid-template-columns: 5rem 1fr 25rem 2fr max-content;
		grid-gap: 2rem;
		align-items: center;
		font-size: 1.6rem;
		@media (max-width: 1260px) {
			grid-template-columns: 1fr;
		}

		&__row {
			display: flex;
			align-items: center;
			gap: 2rem;
			@media (max-width: 540px) {
				flex-direction: column;
				align-items: flex-start;
			}
		}
		&__col {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&__id {
			font-weight: 300;
			color: $gray;
		}
		&__name {
		}
		&__topic {
			background-color: $light-gray;
			border-radius: 5rem;
			padding: 1rem 2rem;
			text-align: center;
			font-weight: 600;
		}
		&__message {
		}
		.v-button {
			border-radius: 1rem;
			padding: 1rem 2rem;
			@media (max-width: 1260px) {
				margin-left: auto;
			}
			@media (max-width: 540px) {
				margin-left: 0;
			}
		}
	}
</style>
