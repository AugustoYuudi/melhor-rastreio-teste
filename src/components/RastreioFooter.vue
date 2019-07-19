<template>
    <footer class="rastreio-footer">
        <img src="../assets/img/RastreioProduto/Logo Footer.png" alt="Melhor Envio Logo">
        <ul class="left-links">
            <li><router-link to="#">melhor rastreio</router-link></li>
            <li><router-link to=#>página inicial</router-link></li>
            <li><router-link to=#>suporte</router-link></li>
        </ul>
        <ul class="right-links">
            <li>Melhor Rastreio 2018</li>
            <li>Todos os direitos reservados</li>
            <li><router-link to=#>Termos de uso</router-link></li>
        </ul>
    </footer>
</template>

<style lang="stylus">
.rastreio-footer
    display flex
    flex-flow row nowrap
    justify-content space-between
    background-color $c-green
    color white
    font-family 'Lato Regular'
    font-size 0.75rem
    padding 1rem 10rem 1rem 10rem

    a
        text-decoration none
        color white

    img
        height 55px
        width auto
        order 1
        margin-top .8rem

    ul
        li
            margin-bottom .8rem

    .left-links
        order 0
    .right-links
        order 2
</style>

<script>
export default {
    name: 'rastreio-footer'
}
</script>
