<template>
  <HeaderComponent />
  <RouterView />
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import { RouterView } from 'vue-router'
  export default {
    components: {
      RouterView,
      HeaderComponent
    }
  }
</script>