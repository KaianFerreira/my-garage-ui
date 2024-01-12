<template>
  <HeaderComponent />
  <div class="body">
    <RouterView />
  </div>
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

<style lang="scss">
.body {
  display: flex;
  width: 100%;
  height: calc(100% - $header-size);
  justify-content: center;
  .content {
    width: $grid-large;
    max-width: $grid-large;
  }
}
</style>