<template>
  <div class="container">
    <div class="row">
      <div class="fixed col-lg-3 col-sm-2 col-xs-2">
        <Navbar />
      </div>
      <div class="col-lg-9 col-sm-10">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "dashboardWrapper",
    // components: { Navbar }
}
</script>

<style lang="scss" scoped>
@media (min-width: 575px) {
  .col-sm-2 {
    display: flex;
    justify-content: flex-end;
  }
  .col-sm-10 {
    padding: 0;
  }
  .fixed {
  position: sticky;
}
}
</style>