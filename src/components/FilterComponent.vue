<template>
	<section class="filters">
		<div class="filter">
			<div class="label">Marca do Carro</div>
			<div class="brands">
				<div class="car-brand" v-for="brand in brands" :key="brand._id"> {{ brand.name }}</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	props: {
		brands: Array,
		cars: Array,
	}
}
</script>
<style lang="scss" scoped>
.filters {
	display: flex;
	width: 264px;
	flex-direction: column;
	align-items: flex-start;
	background-color: $background-layer-0;
	box-shadow: $background-bottom-shadow;

	.filter {
		display: flex;
		padding: 1rem 2rem;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		align-self: stretch;
		background-color: $background-layer-0;
		border-bottom: 1px solid $filter-border-color;
		.label {
			font: $font-large-bold;
			color: $label-color;
		}
		.brands {
			display: flex;
			align-items: flex-start;
			align-content: flex-start;
			gap: 0.5rem;
			align-self: stretch;
			flex-wrap: wrap;
			.car-brand {
				display: flex;
				width: 3.5rem;
				height: 3.5rem;
				padding: 0.375rem 0.75rem;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				border-radius: 0.75rem;
				background-color: $background-layer-0;
				box-shadow: $background-bottom-shadow;
			}
		}
	}
}
</style>