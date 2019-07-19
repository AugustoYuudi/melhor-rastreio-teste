<template>
    <div class="navbar__menu" >
        <div class="h-button" :class="{ 'h-button--toggled': this.menuIsActive }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav class="navbar__links" :class="{ 'links--active' : this.menuIsActive }">
            <ul>
                <li><router-link to="/"><img src="../assets/img/Logo.png" alt=""></router-link></li>
                <li><router-link to="/">Melhor Envio</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/cadastre-se">Cadastre-se</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="stylus">
.navbar__menu
    display inline-block
    float right

    .h-button
        cursor pointer
        float right
        margin-right 6vw
        margin-top 1.5rem

        span
            display block
            margin 0 auto .5rem auto
            width 30px
            height 2px
            border-radius 9px
            opacity 1
            transition all .5s ease
            background-color white

            +above(768px)
                width 50px
                margin 0 auto 1rem auto

        +above(1024px)
            display none

    .h-button--toggled
        width 30px
        height 30px

        +above(1024px)
            display none
        span
            width 30px
            margin-bottom -11px
            margin-top 9px
            &:nth-child(1)
                transform rotate(135deg)
            &:nth-child(2)
                opacity 0
                transform translateX(-100px)
            &:nth-child(3)
                transform rotate(-135deg)
            
            +above(768px)
                width 50px

    .navbar__links
        position absolute
        height 100vh
        width 75vw
        background-color $c-green
        top 0
        left -75vw
        transform translateX(-75vw)
        transition transform .5s ease-in-out
        z-index 1

        +above(1024px)
            position static
            display block
            transform none
            height 100%
            width auto
            margin-right 3rem
            margin-top 2rem

        &.links--active
            transform translateX(75vw)

        ul
            display block
            margin 1rem auto 0 auto

            +above(1024px)
                margin 0

            li
                text-align center
                padding 1rem
                border-bottom 2px solid white

                &:nth-child(1)
                    border-bottom none
                &:nth-child(2)
                    display none

                +above(1024px)
                    font-family 'Lato Regular'
                    display inline-block
                    border-bottom none
                    margin-right 2rem
                    &:nth-child(1)
                        display none
                        border-bottom none
                    &:nth-child(2)
                        display inline-block
                    &:nth-child(4)
                        background-color white
                        border-radius 8px
                        a
                            color $c-green

                a
                    color white
                    text-decoration none
                    font-family 'Lato Regular'
                    font-size 1.5rem

                    +above(1024px)
                        font-size 1.7rem


</style>

<script>
export default {
    data() {
        return {
            menuIsActive: false
        }
    },

    methods: {
        toggleMenu: function() {
            this.menuIsActive = !this.menuIsActive
        }
    }
}
</script>
