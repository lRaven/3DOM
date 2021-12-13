<template>
	<section class="apartments" id="apartments">
		<div class="apartments__container center">
			<div class="apartments__nav">
				<h2>ПОДОБРАТЬ КВАРТИРУ</h2>
				<label class="apartments__item" @click="showApartment(1)">
					<input
						type="radio"
						class="radio__real"
						name="apartments__item"
						checked
					/>
					<span class="radio__fake">1</span>
				</label>
				<label class="apartments__item" @click="showApartment(2)">
					<input
						type="radio"
						class="radio__real"
						name="apartments__item"
					/>
					<span class="radio__fake">2</span>
				</label>
				<label class="apartments__item" @click="showApartment(3)">
					<input
						type="radio"
						class="radio__real"
						name="apartments__item"
					/>
					<span class="radio__fake">3</span>
				</label>
			</div>
			<div class="apartments__schematics">
				<div class="slide">
					<div class="wrapper">
						<figure class="slide__item">
							<img
								src="/img/academ/plan1.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan2.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan3.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan4.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan5.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan6.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan7.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan8.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan9.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan10.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
					</div>
					<figure class="slide__main">
						<img
							src="/img/academ/plan-middle.svg"
							alt=""
							class="apartments__middle"
						/>
					</figure>
				</div>
				<div class="slide">
					<div class="wrapper">
						<figure class="slide__item">
							<img
								src="/img/academ/plan1.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan2.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan3.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan4.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan5.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan6.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan7.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan8.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan9.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan10.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
					</div>
					<figure class="slide__main">
						<img
							src="/img/academ/plan-middle.svg"
							alt=""
							class="apartments__middle"
						/>
					</figure>
				</div>
				<div class="slide">
					<div class="wrapper">
						<figure class="slide__item">
							<img
								src="/img/academ/plan1.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan2.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan3.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan4.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan5.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan6.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan7.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan8.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan9.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
						<figure class="slide__item">
							<img
								src="/img/academ/plan10.svg"
								alt=""
								class="apartments__miniature"
							/>
						</figure>
					</div>
					<figure class="slide__main">
						<img
							src="/img/academ/plan-middle.svg"
							alt=""
							class="apartments__middle"
						/>
					</figure>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Apartments",
		methods: {
			showApartment(option) {
				const apartments = document.querySelector(
					".apartments__schematics"
				);
				const slide = apartments.querySelectorAll(".slide");
				slide.forEach((apartment) => {
					apartment.classList.remove("open");
				});
				switch (option) {
					case 1: {
						slide[0].classList.add("open");
						break;
					}
					case 2: {
						slide[1].classList.add("open");
						break;
					}
					case 3: {
						slide[2].classList.add("open");
						break;
					}
				}
			},
		},
		mounted() {
			this.showApartment(1);
		},
	};
</script>

<style lang="scss" scoped>
	.apartments {
		padding-bottom: 5rem;
		min-height: 98rem;
		h2 {
			font-size: 4.8rem;
			font-weight: 300;
			color: var(--gold);
			margin: 6rem 0 3.5rem 0;
		}
		&__container {
			min-height: 98rem;
			display: grid;
			grid-template-columns: 36rem 1fr;
		}

		&__item {
			user-select: none;
			display: block;
			width: 17.5rem;
			height: 17.5rem;
			transform: translateX(55%);
			.radio__real {
				display: none;
				&:checked + .radio__fake {
					font-weight: 300;
					border-width: 0.3rem;
				}
			}
			.radio__fake {
				cursor: pointer;
				text-align: right;
				padding-right: 0.5rem;
				display: block;
				width: 100%;
				height: 100%;
				color: var(--gold);
				font-size: 14.4rem;
				font-weight: 100;
				border: 0.2rem solid var(--gold);
				border-radius: 0 0 0 100%;

				&:hover {
					border-width: 0.3rem;
					font-weight: 300;
				}
			}
		}
		&__item + &__item {
			margin-top: 7rem;
		}
		&__schematics {
			position: relative;
			background: var(--dark-green)
				url(/img/academ/apartment-img-full.png) center / cover no-repeat;
			.slide {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 4rem;
				opacity: 0;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -70%);
				width: calc(100% - 8rem);
				transition: all 0.4s ease;
				&.open {
					height: calc(100% - 8rem);
					opacity: 1;
					transform: translate(-50%, -50%);
					transition: all 1s ease;
				}
				.wrapper {
					width: 100%;
					display: flex;
					justify-content: center;
					gap: 1rem;
					figure {
						img {
							width: 100%;
						}
					}
				}
			}
		}
		&__miniature {
			height: 10rem;
			width: 10rem;
		}
		&__middle {
			display: block;
			width: 100%;
			// height: 90%;
			margin: 0 auto;
		}
	}
</style>
