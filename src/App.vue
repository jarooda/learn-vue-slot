<template>
  <div id="app">
    <div class="flex justify-around">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <div v-for="(view, index) in views" :key="index" class="inline">
        <router-link :to="`/${index + 1}`">{{ index + 1}}</router-link>
      </div>
    </div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultLayout: 'default',
      views: new Array(5)
    }
  },
  computed: {
    layout () {
      const viewedLayout = (this.$route.meta.layout || this.defaultLayout) + '-layout'
      return viewedLayout
    }
  }
}
</script>

<style>

</style>
