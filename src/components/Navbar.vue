<template>
    <div class="navbar">
        <img src="../assets/img/Logo.png" alt="Brand Logo" class="navbar__logo" v-if="!this.menuIsActive">

        <NavbarMenu></NavbarMenu>
    </div>
</template>

<style lang="stylus">
.navbar
    max-width 100vw
    width 100vw
    .navbar__logo
        margin 1rem 0 1rem 1rem
        width 25vw
        max-width 100px

        +above(768px)
            max-width 150px
            margin 1rem 0 0 2rem

        +above(1024px)
            margin 2rem 0 0 3.5rem
            width 170px
</style>

<script>
import NavbarMenu from '@/components/NavbarMenu'

export default {
    components: {
        NavbarMenu,
    },

    data() {
        return {
            menuIsActive: false,
        }
    },

    methods: {
        toggleMenu: function() {
            this.menuIsActive = !this.menuIsActive
        },
    }
}
</script>
