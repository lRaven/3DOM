<template>
	<div class="dropdown">
		<div class="dropdown__selected">
			<p>Районы, кварталы, жилые массивы…</p>
			<div class="dropdown__arrow" @click="reverseArrow()">
				<img src="img/icon/arrow.svg" alt="" />
			</div>
		</div>
		<div class="dropdown__content">
			<label class="dropdown__item">
				<input
					type="radio"
					class="radio__real"
					name="address"
					checked
				/>
				<span class="radio__fake">item1</span>
			</label>
			<label class="dropdown__item">
				<input type="radio" class="radio__real" name="address" />
				<span class="radio__fake">item2</span>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		setup() {},
		methods: {
			reverseArrow() {
				const arrow = document.querySelector(".dropdown__arrow");
				const dropdownSelected = document.querySelector(
					".dropdown__selected"
				);
				const dropdownContent =
					document.querySelector(".dropdown__content");
				arrow.classList.toggle("open");
				dropdownSelected.classList.toggle("open");
				dropdownContent.classList.toggle("open");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.dropdown {
		position: relative;
		&__selected {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 2rem;
			padding: 2rem;
			background-color: var(--light-gray);
			color: var(--dark);
			font-size: 1.8rem;
			font-weight: 600;
			transition: all 1.3s ease;
			&.open {
				border-radius: 2rem 2rem 0 0;
				transition: all 0.1s ease;
			}
		}
		&__arrow {
			user-select: none;
			cursor: pointer;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease;
			&.open {
				transform: rotate(180deg);
				transition: all 0.5s ease;
			}
		}
		&__content {
			position: absolute;
			left: 0;
			top: 6.8rem;
			width: 100%;
			height: 0;
			border-radius: 0 0 2rem 2rem;
			overflow: hidden;
			transition: all 0.3s ease;
			&.open {
				height: 11.6rem;
				transition: all 0.5s ease;
			}
		}
		&__item {
		}
	}
	.radio {
		&__real {
			display: none;
		}
		&__fake {
			cursor: pointer;
			display: block;
			padding: 2rem;
			background-color: var(--light-gray);
			color: var(--dark);
			font-size: 1.8rem;
			font-weight: 600;
			transition: all 0.2s ease;
			&:hover {
				transition: all 0.3s ease;
				background-color: var(--middle-gray);
				color: var(--white);
			}
		}
	}
</style>
