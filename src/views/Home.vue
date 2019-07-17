<template>
  <div class="home">
    <div class="home--upper">
      <header class="home__header">
        <Navbar></Navbar>
      </header>
      <main>
        <h1 class="home__title">O serviço de rastreio exclusivo do Melhor Envio</h1>
        <h3 class="home__subtitle">Um serviço de rastreio de encomendas totalmente gratuito</h3>
        <button class="home__button"><router-link to="#">DÊ O PRIMEIRO PASSO</router-link></button>
        <article class="home__map-container">
          <img src="../assets/img/Group 60.png" alt="Generic Map" class="map">

          <img src="../assets/img/Fill 49.png" alt="Map Marker" class="map-marker">
        </article>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus">
.home
  .home--upper
    background-color $c-green
    min-height 100vh

    main
      margin-top 10vh
      padding 1rem
      text-align center

      
      .home__title
        font-size 24px
        color white
        font-family 'Lato Bold'
        text-align center
        text-shadow 0 2px 8px rgba(0, 0, 0, 0.7)

      .home__subtitle
        margin-top 1rem
        font-size 16px
        font-family 'Lato Light'
        color white
        text-align center
        text-shadow 0 2px 8px rgba(0, 0, 0, 0.7)
      
      .home__button
        margin-top 8vh
        border-style none
        border-radius 5px
        box-shadow 0 1.5px 20px -4px rgba(0, 0, 0, 0.7)
        background-color white
        padding .8rem 1.2rem .8rem 1.2rem

        a
          color $c-green
          font-family 'Lato Bold'
          text-decoration none

      .home__map-container
        position relative
        margin-top 8vh
        .map
          display block
          width 65vw
          height auto
          margin 0 auto 
        .map-marker
          position absolute
          width 11vw
          left 50%
          top 50%
          transform translate(-50%, -50%)

  &::before
    content ''
    display block
    position relative
    width 100vh
    height 60px
    top 250px
    background-image linear-gradient(rgba(255, 255, 255, 0.3), rgba($c-lightblue, 0.5))
    // background-size 50vh 60px
    // background-repeat no-repeat
    // background-position 50px 100px

</style>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'home',
  components: {
    Navbar,
    Footer
  }
}
</script>
