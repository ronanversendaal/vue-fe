<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style lang="scss">
</style>

<script>
  const default_layout = 'default';
  const layout_suffix = '-layout';

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + layout_suffix;
      }
    }
  }
</script>
