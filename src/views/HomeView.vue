<template>
  <div class="content">
    <FilterComponent :brands="brands"/>
  </div>
</template>
<script>
  import { getAll as getAllBrands } from '../api/brand'
  import { getAll as getAllCars } from '../api/car'
  import FilterComponent from '@/components/FilterComponent.vue'
  export default {
    components: {
      FilterComponent
    },
    data: () => ({
      brands: [],
      cars: []
    }),
    async mounted () {
      await this.loadData()
    },
    methods: {
      async loadData() {
        console.log('here')
        const [brands, cars] = await Promise.all([
          getAllBrands(),
          getAllCars()
        ])
        this.brands = brands
        this.cars = cars
      }
    }
  }
</script>
<style scoped>
.content {
  display: flex;
  gap: 16px;
}
</style>