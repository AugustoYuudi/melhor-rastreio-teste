<template>
    <header class="rastreio-header">
        <img src="../assets/img/RastreioProduto/Logo.png" alt="Melhor Envio Logo">

        <div class="rastreio__info">
            <h3>transportadora</h3>
            <h2>{{tracking}}</h2>
        </div>
    </header>
</template>

<style lang="stylus">

.rastreio-header
    height 50px
    background-color white
    padding 1rem
    box-shadow 0 0 15px 1px rgba(0, 0, 0, 0.3)

    img
        display inline-block
        margin-left 20%
    
    .rastreio__info
        display inline-block
        float right
        margin-right 20%
        color $c-darkgray

        h3
            font-family 'Lato Light'
            font-size 1.125rem
            text-align right

        h2
            font-family 'Lato Bold'
            font-size 1.5rem
</style>

<script>
export default {
    name: 'rastreio-header',

    props: {
        tracking: String
    }
}
</script>
