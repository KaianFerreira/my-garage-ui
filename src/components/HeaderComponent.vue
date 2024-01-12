<template>
	<section class="content-header">
		<div class="header-wrapper">
			<div class="header">
				<div class="logo">
					My Cars
				</div>
				<div class="search">
					<div class="search-bar">
						<input type="text" placeholder="Pesquise por marca ou modelo">
						<IconSearch id="icon-search"/>
					</div>
					<k-btn @click="test" :icon="IconPlus">Adicionar Carro</k-btn>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import IconSearch from './icons/IconSearch.vue'
import IconPlus from './icons/IconPlus.vue'

export default {
	components: {
		IconSearch,
	},
	data: () => ({
		IconPlus: IconPlus
	}),
	methods: {
		test() {
			console.log('here')
		}
	}
}
</script>

<style lang="scss" scoped>
.content-header {
	background-color: $background-layer-0;
	box-shadow: $background-bottom-shadow;
	height: $header-size;
	display: flex;
	align-items: center;
	justify-content: center;
	.header-wrapper {
		font-family: 'Saira';
		flex-grow: 1;
		max-width: $grid-large;
	}
	.header {
		display: flex;
		justify-content: space-between;
		padding: 0rem 2rem;
		justify-content: space-between;
		align-items: center;
		.logo {
			font-weight: 600;
			color: $primary-color;
			font-size: 2.5rem;
			padding: 0px 32px;
		}
		.search {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			.search-bar {
				display: flex;
				align-items: center;
				#icon-search {
					background-color: $background-layer-0;
					stroke: $label-color;
					position: relative;
					left: -2rem;
				}
				input {
					padding: 0.875rem 3rem 0.875rem 0.75rem;
					width: 41.3125rem;
					border-radius: 0.375rem;
					border: 1px solid $filter-border-color;
					&:focus {
						outline: thin solid;
					}
				}
			}
		}
	}
}
</style>