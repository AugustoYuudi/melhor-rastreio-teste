<template>
    <footer class="footer">
        <h1 class="footer__title footer__title--mobile">transportadoras</h1>
        <h1 class="footer__title footer__title--desktop">Uma frase grande para acompanhar essa seção</h1>
        <div class="footer__logos">
            <ul>
                <li>
                    <router-link to="#"><img src="../assets/img/01.png" alt="Correios Logo"></router-link>
                </li>
                <li>
                    <router-link to="#"><img src="../assets/img/05.png" alt="Latam Logo"></router-link>
                </li>
                <li>
                    <router-link to="#"><img src="../assets/img/02.png" alt="Jadlog Logo"></router-link>
                </li>
                <li>
                    <router-link to="#"><img src="../assets/img/04.png" alt="ViaBrasil Logo"></router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="stylus">
.footer
    width 100vw
    min-height 120px
    background-color white
    text-align center
    padding 1.5rem 0 1.5rem 0

    .footer__title
        color $c-lightgray
        font-size 5vw
        font-family 'Lato Light'

    .footer__title--mobile
        +above(1024px)
            display none

    .footer__title--desktop
        display inline-block
        font-size 1.2rem
        margin-left -2.5rem
        
        +below(1023px)
            display none

    .footer__logos
        margin-top 1.5rem

        +above(1024px)
            display inline-block
            width 30%
            height 100%
            margin-left 10%

        ul
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content flex-start
            align-items flex-start

            li
                margin-top 1rem
                flex 1 0 50%
                a
                    img
                        width 25vw
                        max-width 100px
                        height auto
                        +above(768px)
                            height 40px
                            width auto
                        

                +above(768px)
                    flex 1 0 25%

                +above(1024px)
                    flex 1 0 33%
                    &:nth-child(4)
                        display none
+above(1024px)
    height 20vh
    padding 0
</style>

<script>
export default {
    
}
</script>
