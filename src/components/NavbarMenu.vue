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
        margin-right 1.5rem
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

    .h-button--toggled
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

        &.links--active
            transform translateX(75vw)

        ul
            display block
            margin 1rem auto 0 auto

            li
                text-align center
                padding 1rem
                font-family 'Lato Bold'
                border-bottom 2px solid white

                a
                    color white
                    text-decoration none

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
