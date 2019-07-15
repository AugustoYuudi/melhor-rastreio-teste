<template>
  <div class="home">
    <header class="home__header">
      <Navbar></Navbar>
    </header>
  </div>
</template>

<style lang="stylus">
.home
  background-color $c-green
</style>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'home',
  components: {
    Navbar,
  }
}
</script>
