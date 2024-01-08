<template>
	<div class="card">
		<div class="title">
			Create a new Car
		</div>
		<div class="form-field">
			<div class="label">Brand</div>
			<select v-model="brand">
				<option v-for="brand in brands" :key="brand._id" :value="brand._id">{{ brand.name }}</option>
			</select>
		</div>
		<div class="form-field">
			<div class="label">Model</div>
			<input type="text" v-model="model">
		</div>
		<div class="form-field">
			<div class="label">Color</div>
			<input type="text" v-model="color">
		</div>
		<div class="form-field">
			<div class="label">Specs</div>
			<textarea type="text" v-model="specs"/>
		</div>
		<button @click="createCar">Create</button>
	</div>
</template>
<script>
import { create } from '@/api/car'

export default {
	props: {
		brands: Array,
		reloadData: Function,
	},
	data: () => ({
		brand: '',
		model: '',
		color: '',
		specs: '',
	}),
	methods: {
		async createCar() {
			await create(
				this.brand,
				this.model,
				this.color,
				this.specs
			)
			await this.reloadData()
		}
	}
}
</script>

<style scoped>
select, input, textarea {
	width: 100%;
}

</style>