<template>
	<section class="content-header">
		<div class="header-wrapper">
			<div class="header">
				My Cars
			</div>
		</div>
	</section>
</template>
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
		font-weight: 600;
		color: $primary-color;
		font-size: 2.5rem;
		padding: 0px 32px;
	}
}
</style>