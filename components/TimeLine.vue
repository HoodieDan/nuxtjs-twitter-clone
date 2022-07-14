<template>
  <div class="time-line">
    <slot name="topTitle" />
    <slot name="main" />

    <slot name="tweets" />
  </div>
</template>

<script>
// import TopTitle from "../components/TopTitle.vue";

export default {
  name: 'TimeLine',
  // components: { TopTitle }
}
</script>

<style lang="scss">
.time-line {
  max-width: 600px;
  width: 100%;
  border-left: 0.5px solid var(--border);
  border-right: 0.5px solid var(--border);
  height: auto;
  margin-right: 30px;
}

@media (max-width: 769px) {
  .time-line {
    width: 100%;
    margin-right: 0;
  }
}

@media (max-width: 415px) {
  .time-line {
    margin-top: 50px;
    border: none;
    padding-bottom: 50px;
  }
}
</style>
