<template>
	<div class="card">
		<div class="title">
			Create a new Brand
		</div>
		<div class="form-field">
			<div class="label">Name</div>
			<input type="text" v-model="name">
		</div>
		<button @click="createBrand">Create</button>
	</div>
</template>
<script>
import { create } from '@/api/brand' 
export default {
	props: {
		reloadData: Function,
	},
	data: () => ({
		name: ''
	}),
	methods: {
		async createBrand() {
			await create(this.name)
			await this.reloadData()
		}
	}
}
</script>