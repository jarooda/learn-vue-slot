<template>
  <div>
    <Header />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style>

</style>
