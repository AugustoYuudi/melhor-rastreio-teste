<template>
    <div class="navbar">
        <img src="../assets/img/Logo.png" alt="Brand Logo" class="navbar__logo">
        // botao hamburger

        <nav class="navbar__links navbar__links--toggled">
            <ul>
                <li>Login</li>
                <li>Cadastre-se</li>
                <li>Melhor Envio</li>
            </ul>
        </nav>

    </div>

    
</template>

<style lang="stylus">
.navbar
    .navbar__links
       position absolute
       left 0
       right 0
       z-index 0
       height 100%
       width 100%
       padding 2rem 

       ul
        padding 2rem 0 0 0
        background-color tomato

        li
            border-bottom 1px solid rgba(255, 255, 255, 0.15)
</style>

<script>
export default {
    
}
</script>
