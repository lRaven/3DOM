<template>
	<div class="sectionColumns">
		<div class="subsection1">выбор на плане</div>
		<div class="subsection2"></div>
		<div class="subsection3">
			<div class="subsection3-parameters">
				<p style="font-weight: 600">
					{{ parameters }}
				</p>
				<p>№ кв.</p>
			</div>
			<div class="subsection3-parametersStatic">
				общ. пл. м
				<div class="degree">2</div>
			</div>
		</div>
		<div class="subsection4"></div>
	</div>
</template>

<script>
	export default {
		props: {
			parameters: {
				type: String,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.sectionColumns {
		background: #d5bfa8;
		grid-row: 2;
		display: grid;
		grid-template-columns: 4rem 2rem 8.5rem 4rem;
		grid-template-rows: 4rem;
		.subsection1 {
			border: 0.1rem solid var(--light-gray);
			text-transform: uppercase;
			font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 0.8rem;
			line-height: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			grid-column: 1;
		}
		.subsection2 {
			border: 0.1rem solid var(--light-gray);
			grid-column: 2;
		}
		.subsection3 {
			border: 0.1rem solid var(--light-gray);
			grid-column: 3;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			text-align: center;
			font-style: normal;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.3;
			&-parameters {
				font-style: normal;
				text-align: center;
				font-size: 1rem;
				line-height: 1.25;
				color: var(--dark);
				.param {
					font-weight: bold;
				}
			}
			&-parametersStatic {
				position: relative;
				.degree {
					position: absolute;
					transform: translateY(-0.2rem);
					display: inline-block;
					font-size: 0.7rem;
				}
				&-bottom {
				}
			}
		}
		.subsection4 {
			border: 0.1rem solid var(--light-gray);
			grid-column: 4;
		}
	}
</style>
