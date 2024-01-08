<template>
  <main>
    <div v-for="brand in brands" :key="brand.id">
      {{ brand.name }}
    </div>
  </main>
</template>
<script>
  import { getAll as getAllBrands } from '../api/brand'
  export default {
    data: () => ({
      brands: []
    }),
    async mounted () {
      this.brands = await getAllBrands()
    }
  }
</script>
