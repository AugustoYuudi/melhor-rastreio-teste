<template>
    <div class="rastreio-info">
        <h2>Informaçoes do Rastreio</h2>

        <ul class="timeline">
            <li class="coleta">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Coleta Logo">
                <h4>Coleta</h4>
                <p>Data</p>
            </li>
            <li class="postado">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Postado Logo">
                <h4>Postado</h4>
                <p>Data</p>
            </li>
            <li class="encaminhado">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Encaminhado Logo">
                <h4>Encaminhado</h4>
                <p>Data</p>
            </li>
            <li class="saiu-para-entrega">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Saiu para entrega Logo">
                <h4>Saiu para Entrega</h4>
                <p>Data</p>
            </li>
            <li class="entregue">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Entregue Logo">
                <h4>Entregue</h4>
                <p>Data</p>
            </li>
        </ul>

        <ul class="timeline--details">
            <h2>Status</h2>
            <h2>Movimentação</h2>
        </ul>
    </div>
</template>

<style lang="stylus">
.rastreio-info
    h2
        margin-top 3.5rem
        font-family 'Lato Bold'
        font-size 1.5rem
        margin-left 8rem
        color $c-darkgray

    .timeline
        display flex
        flex-flow row nowrap
        justify-content space-evenly
        margin-top 5rem

        li
            display flex
            flex-flow column nowrap
            justify-content space-evenly
            align-items center
            
            img
                width 40px
                height 40px
                background-size 35px
                background-position center
                background-repeat no-repeat
                margin-bottom 1rem
            h4
                margin-bottom .7rem
                color $c-lightgray
                font-family 'Lato Regular'
            p
                color $c-darkgray
                font-size 0.75rem
                font-family 'Lato Regular'
        .coleta
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Coleta.png')
                background-size 40px

                .coleta--active
                    background-image url('../assets/img/RastreioProduto/Ativo/Coleta.png')
        
        .postado
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Postado.png')

                .postado--active
                    background-image url('../assets/img/RastreioProduto/Ativo/Postado.png')
        
        .encaminhado
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Encaminhado.png')

                .encaminhado--active
                    background-image url('../assets/img/RastreioProduto/Ativo/Encaminhado.png')
    
        .saiu-para-entrega
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Saiu para entrega.png')

                .saiu-para-entrega--active
                    background-image url('../assets/img/RastreioProduto/Ativo/Saiu para entrega.png')
                    
        .entregue
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Sinistro.png')

                .entregue--active
                    background-image url('../assets/img/RastreioProduto/Ativo/Entregue.png')
</style>

<script>
export default {
    props: {
        data: Object
    }
}
</script>
