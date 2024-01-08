<template>
  <main>
    <div class="content">
      <div class="card">
        <div class="title">
          Brands
        </div>
        <div
          class="list" 
          v-for="brand in brands" 
          :key="brand._id"
          >
          {{ brand.name }}
        </div>
      </div>
      <div class="card">
        <div class="title">
          Cars
        </div>
        <div
          class="list" 
          v-for="car in cars" 
          :key="car._id"
          >
          {{ car.model }}
        </div>
      </div>
      <NewBrandComponent :reloadData="loadData"/>
      <NewCarComponent :brands="brands" :reloadData="loadData"/>
    </div>
  </main>
</template>
<script>
  import { getAll as getAllBrands } from '../api/brand'
  import { getAll as getAllCars } from '../api/car'
  import NewCarComponent from '@/components/NewCarComponent.vue'
  import NewBrandComponent from '@/components/NewBrandComponent.vue'
  export default {
    components: {
      NewCarComponent,
      NewBrandComponent
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
main {
  padding: 32px;
}
.content {
  display: flex;
  gap: 16px;
}
</style>