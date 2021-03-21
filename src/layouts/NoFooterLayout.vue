<template>
  <div>
    <Header />
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'

export default {
  components: {
    Navbar,
    Header
  }
}
</script>

<style>

</style>
