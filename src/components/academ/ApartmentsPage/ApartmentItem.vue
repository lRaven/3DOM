<template>
	<div>
		<div
			v-if="apartment.number === 245 || apartment.number === 246"
			class="dataLong"
		>
			<div class="flatItemLong">
				<div class="itemLong">
					<button
						class="itemLong-btn"
						v-if="apartment.floor !== 14"
						@click="showDialog"
					>
						<div class="img"></div>
					</button>
					<button class="itemLong-btn" style="cursor: default" v-else>
						<div class="img"></div>
					</button>
				</div>
				<div class="whiteSpaceShortLong">-</div>
				<div class="dataLong">
					<div class="dataLong-number" v-if="apartment">
						№{{ apartment.number }}
					</div>
					<div class="dataLong-area">{{ apartment.area }}</div>
					<div class="dataLong-floor">4-k</div>
				</div>
				<div class="whiteSpaceLong"></div>
			</div>
		</div>
		<div v-else class="flatItem">
			<div class="item">
				<!-- //* 14 этаж, неактивен -->
				<button
					class="item-btn"
					style="cursor: default"
					v-if="apartment.floor === 14"
				>
					<div class="img"></div>
				</button>
				<!-- //*остальные этажи, резервированные -->
				<button
					class="item-btn reserved"
					v-if="apartment.floor !== 14 && apartment.reserved === true"
					@click="showDialog"
				>
					<div class="img"></div>
				</button>
				<!-- //* default -->
				<button
					class="item-btn"
					v-if="
						apartment.floor !== 14 && apartment.reserved === false
					"
					@click="showDialog"
				>
					<div class="img"></div>
				</button>
			</div>
			<!-- //*зарезервирована -->
			<div
				class="whiteSpaceShort reserved"
				v-if="apartment.reserved === true"
			>
				-
			</div>
			<!-- //* default -->
			<div class="whiteSpaceShort" v-else>-</div>
			<div class="data">
				<div class="data-number" v-if="apartment">
					№{{ apartment.number }}
				</div>
				<div class="data-area">{{ apartment.area }}</div>
			</div>
			<div class="whiteSpaceLong"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			apartment: Object,
			style() {
				if (
					this.apartment.number === 212 ||
					this.apartment.number === 213
				) {
					return "background-color: " + this.colors;
				}
			},
		},
		methods: {
			showDialog() {
				this.$emit(
					"showDialog",
					this.apartment.id,
					this.apartment.section
				);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.flatItem {
		border: 0.1rem solid $light-gray;
		display: flex;
		height: 4rem;
		.item {
			border: 0.1rem solid $light-gray;
			display: flex;
			justify-content: center;
			align-items: center;
			width: calc(4rem - 0.1rem);
			height: 4rem;
			&-btn {
				background: #d5bfa8;
				width: 2.4rem;
				height: 2.4rem;
				&.reserved {
					background-color: #bdbdbd;
				}
				.img {
					margin-left: 0.4rem;
					width: 1.6rem;
					height: 1.6rem;
					background: url(/public/img/icon/crm/scheme.svg) no-repeat
						top right;
				}
			}
		}
		.whiteSpaceShort {
			font-style: normal;
			font-weight: bold;
			font-size: 12px;
			line-height: 14px;
			color: #fefefe;
			background: #d5bfa8;
			border: 0.1rem solid $light-gray;
			width: 20px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			&.reserved {
				background-color: #bdbdbd;
			}
		}
		.data {
			display: flex;
			align-items: center;
			padding: 0.5rem;
			justify-content: space-between;
			position: relative;
			border: 0.1rem solid $light-gray;
			width: 8.5rem;
			height: 4rem;
			text-align: center;
			&-number {
				font-style: normal;
				font-weight: 600;
				font-size: 1.2rem;
				line-height: 1.4rem;
			}
			&-area {
				font-style: normal;
				font-weight: normal;
				font-size: 1.2rem;
				line-height: 1.4rem;
			}
		}
		.whiteSpaceLong {
			border: 0.1rem solid $light-gray;
			width: 4rem;
			height: 4rem;
		}
	}
	.flatItemLong {
		border: 0.1rem solid $light-gray;
		column-count: 2;
		display: flex;
		height: 4rem;
		background: #00212d;
		.itemLong {
			border: 0.1rem solid $light-gray;
			display: flex;
			justify-content: center;
			align-items: center;
			width: calc(4rem - 0.1rem);
			height: 4rem;
			&-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				background: #d5bfa8;
				width: 2.4rem;
				height: 2.4rem;
				&.reserved {
					background-color: #bdbdbd;
				}
				.img {
					width: 1.6rem;
					height: 1.6rem;
					background: url(/public/img/icon/crm/scheme.svg) no-repeat
						center;
				}
			}
		}
		.whiteSpaceShortLong {
			font-style: normal;
			font-weight: bold;
			font-size: 1.2rem;
			color: $white;
			background: #00212d;
			border: 0.1rem solid $light-gray;
			width: 2rem;
			height: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			&.reserved {
				background-color: #bdbdbd;
			}
		}
		.dataLong {
			position: relative;
			border: 0.1rem solid $light-gray;
			width: 27.1rem;
			height: 4rem;
			text-align: center;
			&-number {
				font-style: normal;
				font-weight: bold;
				font-size: 13px;
				line-height: 14px;
				position: absolute;
				margin-top: 10px;
				color: #d5bfa8;
				margin-left: 54px;
			}
			&-area {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 14px;
				position: absolute;
				margin-top: 10px;
				margin-left: 100px;
				color: #d5bfa8;
			}
			&-floor {
				font-style: normal;
				font-size: 13px;
				line-height: 14px;
				position: absolute;
				margin-top: 10px;
				margin-left: 155px;
				color: #d5bfa8;
				font-weight: bold;
			}
		}
		.whiteSpaceLong {
			border: 0.1rem solid $light-gray;
			width: 4rem;
			height: 4rem;
			background: $white;
		}
	}
</style>
