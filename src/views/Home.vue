<template>
  <div class="home">
    <div class="home--upper">
      <header class="home__header">
        <Navbar></Navbar>
      </header>
      <main>
        <h1 class="home__title">O serviço de rastreio exclusivo do Melhor Envio</h1>
        <h3 class="home__subtitle">Um serviço de rastreio de encomendas totalmente gratuito</h3>
        <button class="home__button home__button--mobile"><router-link to="#">DÊ O PRIMEIRO PASSO</router-link></button>
        <button class="home__button home__button--desktop"><router-link to="#">QUERO UTILIZAR</router-link></button>
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
      // text-align center
      display flex
      flex-flow row wrap
      justify-content center
      align-items baseline
      
      .home__title
        font-size 9vw
        color white
        font-family 'Lato Bold'
        text-align center
        text-shadow 0 2px 8px rgba(0, 0, 0, 0.7)
        padding 1rem

        +above(768px)
          font-size 3rem
          padding 1rem

        +above(1024px)
          width 24vw
          text-align left
          font-size 2.25rem
          margin-left 7rem
          text-shadow none

          &::after
            content ''
            width 5vw
            height 5px
            background-color white
            display block
            margin-top 2rem

      .home__subtitle
        margin-top 1rem
        font-size 4vw
        font-family 'Lato Light'
        color white
        text-align center
        text-shadow 0 2px 8px rgba(0, 0, 0, 0.7)

        +above(768px)
          font-size 1.5rem
          padding 0 2rem 0 2rem
          
        +above(1024px)
          width 25vw
          text-align left
          font-size 1.125rem
          margin-left 6rem
          text-shadow none

      .home__button
        margin-top 8vh
        border-style none
        background none
        flex 1 0 100%
        +above(1024px)
          margin-left 7.5rem     
        a
          color $c-green
          font-family 'Lato Bold'
          text-decoration none
          border-radius 5px
          background-color white
          box-shadow 0 1.5px 20px -4px rgba(0, 0, 0, 0.7)
          padding .8rem 5vw .8rem 5vw
          max-width 435px

          +above(768px)
            font-size 1.5rem
            box-shadow 0 1.5px 30px -6px rgba(0, 0, 0, 0.7)
            padding 1.1rem 6.5vw 1.1rem 6.5vw

          +above(1024px)
            padding .8rem 2vw .8rem 2vw
            font-size 14px 
            width 192px
            box-shadow none

      .home__button--mobile
        +above(1024px)
          display none

      .home__button--desktop
        +below(1023px)
          display none

      .home__map-container
        position relative
        margin-top 8vh
        flex 1 0 100%

        +above(1024px)
          align-self flex-end
          margin-top -18rem
          margin-right 12vw

        .map
          display block
          width 35vh
          max-width 425px
          height auto
          margin 0 auto 

          +above(1024px)
            max-width 450px
            width 32vw

        .map-marker
          position absolute
          width 8vh
          left 50%
          top 50%
          transform translate(-50%, -50%)

      +above(1024px)
        flex-flow column wrap
        
    +above(1024px)
      min-height 0
      height 80vh

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
