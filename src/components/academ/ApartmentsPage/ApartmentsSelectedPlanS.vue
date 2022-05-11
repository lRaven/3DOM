<template>
	<div class="sectionPopapSelectS"></div>
</template>

<script>
	import store from "@/store";
	import svgWork from "@/js/svgWork";

	export default {
		store,
		data() {
			return {
				sectionNumber: 1,
			};
		},
		props: {
			section: {},
		},
		watch: {
			section: function () {
				this.sectionNumber = this.section;
				this.selectSection();
				this.drawSVG();
			},
		},
		methods: {
			showModal(bool, index) {
				this.$emit("showModal", bool);
				this.$emit("clickApart");
				if (this.sectionNumber === 1) {
					this.$emit("apartNumber1", index);
				}
				if (this.sectionNumber === 2) {
					this.$emit("apartNumber2", index);
				}
				if (this.sectionNumber === 3) {
					this.$emit("apartNumber3", index);
				}
			},
			selectSection() {
				if (this.sectionNumber === 1) {
					document.querySelector(".sectionPopapSelectS").innerHTML =
						store.getters.SECTION1;
				}
				if (this.sectionNumber === 2) {
					document.querySelector(".sectionPopapSelectS").innerHTML =
						store.getters.SECTION2;
				}
				if (this.sectionNumber === 3) {
					document.querySelector(".sectionPopapSelectS").innerHTML =
						store.getters.SECTION3;
				}
			},
			backlightOn(apart, index) {
				if (this.sectionNumber === 1) {
					this.$emit("apartNumber1", index);
				}
				if (this.sectionNumber === 2) {
					this.$emit("apartNumber2", index);
				}
				if (this.sectionNumber === 3) {
					this.$emit("apartNumber3", index);
				}
				apart.setAttribute("style", "fill: #E4CDA1");
			},

			backlightOff(apart) {
				apart.setAttribute("style", "fill: #CFD0D0");
			},

			drawSVG() {
				const sectionSVG = document.querySelector(
					".sectionPopapSelectS svg"
				);
				sectionSVG.setAttribute("preserveAspectRatio", "none");
				sectionSVG.setAttribute("viewBox", "0 0 1240 920");

				if (this.sectionNumber === 1) {
					sectionSVG.setAttribute("transform", "translate(100 0)");
				} else if (this.sectionNumber === 2) {
					sectionSVG.setAttribute("transform", "translate(70 0)");
				} else if (this.sectionNumber === 3) {
					sectionSVG.setAttribute("transform", "translate(0 100)");
				}
				svgWork.findFlat(
					this.sectionNumber,
					"sectionPopapSelectS",
					"SelectedApartmentsS"
				);

				// if(this.sectionNumber === 1){
				//   sectionSVG.setAttribute("transform", "translate(100 0)")
				//   const one2 = document.querySelector(".sectionPopapSelectS svg path[d=\"M466.21 146.577H622.206V137.295H748.568L737.862 264.195H727.512V276.688V297.395V422.33H483.703V351.599H466.21V301.544V297.395V146.577Z\"]")
				//   const one3 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M640.398 680.544H462.105V534.185H172.123H164.99H120.065L107.82 679.83H164.99V704.814H203.486V828.328H640.398V680.544Z\"]")
				//   const one4 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M164.935 7.66455H640.398V155.808H475.138V287.882H131.022V137.6H164.935V7.66455Z\"]")
				//   const one5 = document.querySelector(".sectionPopapSelectS svg path[d=\"M453.183 689.466H622.205V698.748H748.568L737.862 571.848H727.511V559.354V538.648V413.713H483.703V484.748H466.21V538.648H453.183V689.466Z\"]")

				//   one2.classList.add("SelectedApartmentsS")
				//   one3[1].classList.add("SelectedApartmentsS")
				//   one4[1].classList.add("SelectedApartmentsS")
				//   one5.classList.add("SelectedApartmentsS")
				// }
				// else if(this.sectionNumber === 2){
				//   sectionSVG.setAttribute("transform", "translate(70 0)")
				//   const two2 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M119.706 385.91H344.291V336.179H462.445V40.3218H221.073V49.8288L190.97 49.8337L129.21 111.593V141.686H119.706V385.91Z\"]")[1]
				//   const two3 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M454.522 270.292H520.253V298.801H665.17V270.292V216.728V59.3274H573.088L572.992 11.8135L466.878 18.1485V59.3274H454.522V270.292Z\"]")[1]
				//   const two4 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M787.441 94.0683L887.22 103.323V566.78H657.254V115.965V103.323V59.3274H787.441V94.0683Z\"]")[1]
				//   const two5 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M534.35 346.314H665.17V566.781H613.551V617.145H556.853V612.395H417.145V385.911H534.35V346.314Z\"]")[1]
				//   const two6 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M149.797 835.712H571.723V604.478H169.65H149.797H119.704V736.882H149.797V835.712Z\"]")[1]

				//   two2.classList.add("SelectedApartmentsS")
				//   two3.classList.add("SelectedApartmentsS")
				//   two4.classList.add("SelectedApartmentsS")
				//   two5.classList.add("SelectedApartmentsS")
				//   two6.classList.add("SelectedApartmentsS")
				// }
				// else if(this.sectionNumber === 3){
				//   sectionSVG.setAttribute("transform", "translate(0 100)")
				//   const three2 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M200.041 169.557H123.946V85.2656H107.846L8.21191 93.7194V169.557V176.791V517.05H156.84H200.041H216.533V315.672H200.041V169.557Z\"]")[1]
				//   const three3 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M116.713 53.5334H220.586V21.7068L313.466 15.9111H315.209L315.203 53.5334H319.249V169.557V176.79V237.552H259.355V272.273H192.808V237.552V192.766V176.79H116.713V53.5334Z\"]")[1]
				//   const three4 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M406.047 53.5328H514.491V272.273H312.014V55.4145V16.0019L406.047 10.1335V53.5328Z\"]")[1]
				//   const three5 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M507.255 53.5333H625.119V21.7066L716.08 16.0159H719.732V53.5333H721.463V207.73V255.201V272.273H594.983V255.201H507.255V53.5333Z\"]")[1]
				//   const three6 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M209.3 315.671H514.491V517.049H213.063V478.856H209.3V315.671Z\"]")[1]
				//   const three7 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M886.349 272.273H1006.42V297.59H1224V105.613H1222.56V70.1575L1115.5 59.225V53.5334H886.349V272.273Z\"]")[1]
				//   const three8 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M886.351 315.672H1006.42V290.355H1224.01V482.332H1222.56V517.787L1115.51 528.72V534.413H886.351V315.672Z\"]")[1]
				//   const three9 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M714.227 315.672H893.577V534.4H823.559V580.703L714.227 570.702V534.4V315.672Z\"]")[1]
				//   const three10 = document.querySelectorAll(".sectionPopapSelectS svg path[d=\"M714.19 272.273H893.579V53.5448L810.582 53.5333V10.1333L716.316 16.0159L716.261 53.5333L714.19 53.5448V272.273Z\"]")[0]

				//   three2.classList.add("SelectedApartmentsS")
				//   three3.classList.add("SelectedApartmentsS")
				//   three4.classList.add("SelectedApartmentsS")
				//   three5.classList.add("SelectedApartmentsS")
				//   three6.classList.add("SelectedApartmentsS")
				//   three7.classList.add("SelectedApartmentsS")
				//   three8.classList.add("SelectedApartmentsS")
				//   three9.classList.add("SelectedApartmentsS")
				//   three10.classList.add("SelectedApartmentsS")
				// }
				const apartments = document.querySelectorAll(
					".SelectedApartmentsS"
				);
				const apartment = document.querySelector(
					".sectionPopapSelectS svg"
				);
				apartment.setAttribute("style", "pointer-events: all;");
				apartments.forEach((apart, index) => {
					apart.addEventListener("mouseover", () =>
						this.backlightOn(apart, index)
					);
					apart.addEventListener("mouseout", () =>
						this.backlightOff(apart)
					);
					apart.addEventListener("click", () =>
						this.showModal(true, index)
					);
				});
			},
		},
		mounted() {
			this.sectionNumber = this.section;
			this.selectSection();
		},
	};
</script>

<style lang="scss" scoped>
	#section {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
