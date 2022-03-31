<template>
	<div class="Characters">
		<div class="head">
			<div class="gape"></div>
			<div class="info">
				<div v-if="this.apart !== null && this.boolFlat">
					{{ this.apart.type }}-ком.
				</div>
				<div v-if="this.apartment !== null && !this.boolFlat">
					{{ this.apartment.type }}-ком.
				</div>
				<div v-if="this.apart !== null && this.boolFlat">
					№{{ this.apart.number }}
				</div>
				<div v-if="this.apartment !== null && !this.boolFlat">
					№{{ this.apartment.number }}
				</div>
				<div v-if="this.apart !== null && this.boolFlat">
					{{ this.apart.area }} кв.м
				</div>
				<div v-if="this.apartment !== null && !this.boolFlat">
					{{ this.apartment.area }} кв.м
				</div>
				<div>ЖК Академический</div>
				<button class="close_button" @click="hideModal">
					<img alt=" " src="../../../../public/img/icon/Close2.svg" />
				</button>
			</div>
		</div>
		<div class="body">
			<div class="information">
				<div class="information-charactersContainer">
					<div class="character">
						<div class="character-info">
							<div>Секция</div>
							<div>Этаж</div>
							<div>Адрес</div>
							<div>Цена при 100%</div>
							<div>Цена при ипотеке</div>
							<div>Цена базовая</div>
						</div>
						<div class="character-value">
							<div v-if="this.apart !== null && this.boolFlat">
								{{ this.apart.section }}
							</div>
							<div
								v-if="this.apartment !== null && !this.boolFlat"
							>
								{{ this.apartment.section }}
							</div>
							<div v-if="this.apart !== null && this.boolFlat">
								{{ this.apart.floor }}
							</div>
							<div
								v-if="this.apartment !== null && !this.boolFlat"
							>
								{{ this.apartment.floor }}
							</div>
							<div>Волгоград, ул. Баррикадная,1.</div>
							<div
								v-if="this.apart !== null && this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apart.cost }}
							</div>
							<div
								v-if="this.apartment !== null && !this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apartment.cost }}
							</div>
							<div
								v-if="this.apart !== null && this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apart.cost }}
							</div>
							<div
								v-if="this.apartment !== null && !this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apartment.cost }}
							</div>
							<div
								v-if="this.apart !== null && this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apart.cost }}
							</div>
							<div
								v-if="this.apartment !== null && !this.boolFlat"
								style="color: #cc9964; font-weight: bold"
							>
								{{ this.apartment.cost }}
							</div>
						</div>
					</div>
					<div class="buttons">
						<button class="registration">
							<img
								src="../../../../public/img/icon/issue.png"
								alt=""
							/>
							Оформить ипотеку
						</button>
						<button class="calculate">
							<img
								src="../../../../public/img/icon/calculate.png"
								alt=""
							/>Калькулятор ипотеки
						</button>
					</div>
				</div>
				<div class="information-functionsContainer">
					<div class="functionsItem">
						Забронировать
						<div class="functionsImage">
							<img
								src="../../../../public/img/icon/book.png"
								alt=""
							/>
						</div>
					</div>
					<div class="functionsItem">
						Запись на просмотр
						<div class="functionsImage">
							<img
								src="../../../../public/img/icon/view.png"
								alt=""
							/>
						</div>
					</div>
					<router-link class="functionsItem" to="/fixForm">
						Зафиксировать клиента
						<div>
							<img
								src="../../../../public/img/icon/Fix.png"
								alt=""
							/>
						</div>
					</router-link>
					<div @click="downlandPDF" class="functionsItem">
						Презентация квартиры
						<div class="functionsImage">
							<img
								src="../../../../public/img/icon/presentation.png"
								alt=""
							/>
						</div>
					</div>
					<div class="functionsItem">
						В избранное
						<div class="functionsImage">
							<img
								src="../../../../public/img/icon/favorites.png"
								alt=""
							/>
						</div>
					</div>
					<div class="functionsItem">
						Условия бронирования, оплаты, рассрочки
						<div class="functionsImage">
							<img
								src="../../../../public/img/icon/conditions.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<FlatPlan
				v-if="
					this.apartment && !this.boolFlat && this.boolSection === 0
				"
				:apartImage="this.apartment.image"
			/>
			<ApartmentPlan
				v-else-if="this.boolSection === 1"
				@clickApart="clickApart"
				@section="sect"
				:apart="this.apart"
				:section="this.sectionBuild"
				@apartNumber1="ApartIndex1"
				@apartNumber2="ApartIndex2"
				@apartNumber3="ApartIndex3"
			/>
			<FlatPlan
				v-else-if="this.boolFlat && this.boolSection === 0"
				:apartImage="this.apart.image"
			/>
			<!--      <FlatPlan :apartImage="this.map"/>-->
		</div>
		<pagePDF
			:section="this.section"
			:apart="this.apart"
			:apartment="this.apartment"
			:boolSection="this.boolSection"
			:boolFlat="this.boolFlat"
			:flat="this.flatInd"
		/>
	</div>
</template>
<script>
	import store from "../../../store";
	import ApartmentPlan from "./ApartmentPlan";
	import FlatPlan from "./FlatPlan";
	import pagePDF from "./pagePDF.vue";
	import jsPDF from "jspdf";
	import html2canvas from "html2canvas";

	export default {
		store,
		data() {
			return {
				flat: 0,
				sectionBuild: {},
				map: "img/academ/Map.png",
			};
		},
		props: {
			boolSection: {
				type: Number,
			},
			boolFlat: {
				type: Boolean,
			},
			section: {
				type: Number,
			},
			apart: {
				type: Object,
			},
			apartment: {
				type: Object,
			},
			flatInd: {
				type: Number,
			},
		},
		watch: {
			section: function () {
				this.sectionBuild = this.section;
			},
		},
		components: { pagePDF, ApartmentPlan, FlatPlan },
		methods: {
			downlandPDF() {
				var canvas = document.querySelector("#canvas");
				html2canvas(canvas).then(function (canvas) {
					var imgData = canvas.toDataURL("img/png");
					var doc = new jsPDF();
					doc.addImage(imgData, "PNG", 10, 10);
					doc.save("info.pdf");
				});
				// window.html2canvas = html2canvas
				// var doc = new jsPDF("p", "pt", "a4");
				// const html = document.querySelector(".plan__address")
				// doc.html(html, {
				//   callback: function(pdf){
				//     pdf.save("info.pdf")
				//   }
				// });
			},
			clickApart() {
				this.$emit("clickApart");
			},
			ApartIndex1(index) {
				this.$emit("boolFlat", false);
				this.$emit("ApartNumber1", index);
			},
			ApartIndex2(index) {
				this.$emit("boolFlat", false);
				this.$emit("ApartNumber2", index);
			},
			ApartIndex3(index) {
				this.$emit("boolFlat", false);
				this.$emit("ApartNumber3", index);
			},
			sect(section) {
				this.sectionBuild = section;
				this.$emit("section", section);
			},
			showModal(bool) {
				this.$emit("showModal", bool);
				if (!bool) {
					this.$emit("showSection");
				}
			},
			hideModal() {
				this.$emit("showModal", false);
				this.$emit("showSection");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.Characters {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.head {
			display: flex;
			.gape {
				background: #bdbdbd;
				width: 20px;
				height: 40px;
				margin-right: 3px;
			}
			.info {
				display: flex;
				position: relative;
				color: #4b4b4b;
				font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 14px;
				width: 100%;
				height: 100%;
				background: #d5bfa8;
				.close_button {
					position: absolute;
					top: 1rem;
					right: 0.1rem;
					background: #d5bfa8;
					margin-right: 10px;
				}
				div {
					margin: 13px 8px;
				}
				:first-child {
					margin-left: 18px;
				}
				:nth-child(4) {
					margin-left: 53px;
				}
			}
		}
		.body {
			position: relative;
			height: 100%;
			padding: 30px 20px 20px 40px;
			.information {
				width: 100%;
				height: 50%;
				display: grid;
				grid-template-columns: 1fr 1fr;
				&-charactersContainer {
					grid-column: 1;
					.character {
						display: grid;
						grid-template-columns: 1fr 1.8fr;
						font-style: normal;
						font-weight: normal;
						font-size: 13px;
						line-height: 14px;
						color: #4b4b4b;
						&-info {
							grid-column: 1;
							div {
								margin: 7px 0;
							}
						}
						&-value {
							grid-column: 2;
							div {
								margin: 7px 0;
							}
						}
					}
					.buttons {
						display: flex;
						margin-top: 20px;
						.registration {
							position: relative;
							background: #cc9964;
							font-style: normal;
							font-weight: bold;
							font-size: 10px;
							line-height: 14px;
							color: #fefefe;
							text-align: center;
							border-radius: 8px;
							width: 160px;
							height: 30px;
							padding: 7px 0 7px 3%;
							img {
								position: absolute;
								top: 13%;
								left: 3%;
							}
						}
						.calculate {
							position: relative;
							margin-left: 52px;
							width: 160px;
							color: #aeb3bf;
							height: 30px;
							font-style: normal;
							font-weight: bold;
							font-size: 10px;
							line-height: 14px;
							padding: 7px 0 7px 3%;
							background: #fefefe;
							border: 2px solid #aeb3bf;
							box-sizing: border-box;
							border-radius: 8px;
							img {
								position: absolute;
								top: 7%;
								left: 2%;
							}
						}
					}
				}
				&-functionsContainer {
					grid-column: 2;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					.functionsItem {
						cursor: pointer;
						font-style: normal;
						font-weight: bold;
						font-size: 13px;
						line-height: 14px;
						color: #cc9964;
						width: 60%;
						margin: 4px 0;
						display: flex;
						justify-content: space-between;
						.functionsImage {
							min-width: 30px;
							height: 25px;
							display: flex;
							justify-content: center;
							align-items: flex-start;
							top: -15px;
						}
					}
				}
			}
		}
		.bold {
			font-weight: Bold;
		}
	}
</style>
