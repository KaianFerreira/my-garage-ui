<template>
	<button class="primary">
		<slot></slot>
		<component
			v-if="icon"
			:is="icon"
			class="icon"
		/>
	</button>
</template>
<script>
export default {
	props: {
		icon: String,
	}
}
</script>
<style lang="scss" scoped>
button {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.25rem;
	padding: 0.375rem 0.75rem;
	min-width: 10rem;
	font-family: Saira;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	cursor: pointer;
	color: $primary-button-font-color;
	.icon {
		padding-left: 1rem;
		stroke: $primary-button-font-color;
		width: 1rem;
		height: 1rem;
	}
}
.primary {
	border: 0.25rem solid $primary-color;
	background-color: $primary-color;
}

</style>