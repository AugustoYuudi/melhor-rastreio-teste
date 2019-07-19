<template>
    <div class="rastreio-info">
        <h2>Informaçoes do Rastreio</h2>

        <ul class="timeline">
            <li class="coleta" :class="{ 'coleta--active' : status != 'nao postado' }">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Coleta Logo">
                <h4>Coleta</h4>
                <p>Data</p>
            </li>
            <li class="postado" :class="{ 'postado--active' : status == 'postado' || 'encaminhado' || 'saiu para entrega' || 'entregue' }">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Postado Logo">
                <h4>Postado</h4>
                <p>Data</p>
            </li>
            <li class="encaminhado" :class="{ 'encaminhado--active' : status == 'encaminhado' || 'saiu para entrega' || 'entregue' }">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Encaminhado Logo">
                <h4>Encaminhado</h4>
                <p>Data</p>
            </li>
            <li class="entrega" :class="{ 'entrega--active' : status  == 'saiu para entrega' || 'entregue' }">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Saiu para entrega Logo">
                <h4>Saiu para Entrega</h4>
                <p>Data</p>
            </li>
            <li class="entregue" :class="{ 'entregue--active' : status  == 'entregue' }">
                <img src="../assets/img/RastreioProduto/transp.png" alt="Entregue Logo">
                <h4>Entregue</h4>
                <p>Data</p>
            </li>
        </ul>

        <table class="timeline--detailed">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Movimentação</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(event, name, index) in events" :key="index">
                    <td :class="{ 
                        'detail--coleta' : event.status == 'coletado', 
                        'detail--postado' : event.status == 'postado', 
                        'detail--encaminhado' : event.status == 'encaminhado', 
                        'detail--saiu-entrega' : event.status == 'saiu para entrega', 
                        'detail--entregue' : event.status == 'entregue', 
                        }">
                        <p>
                            Objeto {{event.status}}
                        </p>
                        <p>
                            {{event.created_at}}

                        </p>
                    </td>
                    <td>{{event.location}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="stylus">
.rastreio-info
    h2
        margin-top 2.5rem
        font-family 'Lato Bold'
        font-size 1.5rem
        margin-left 8rem
        color $c-darkgray

    .timeline
        display flex
        flex-flow row nowrap
        justify-content space-evenly
        margin-top 3rem

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

        .coleta--active
            img
                background-image url('../assets/img/RastreioProduto/Ativo/Coleta.png')

            h4
                color $c-green

        .postado
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Postado.png')

        .postado--active
            img
                background-image url('../assets/img/RastreioProduto/Ativo/Postado.png')
            h4
                color $c-green
        .encaminhado
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Encaminhado.png')

        .encaminhado--active
            img
                background-image url('../assets/img/RastreioProduto/Ativo/Encaminhado.png')
    
            h4
                color $c-green
        .entrega
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Saiu para entrega.png')

        .entrega--active
            img
                background-image url('../assets/img/RastreioProduto/Ativo/Saiu para entrega.png')
                    
            h4
                color $c-green
        .entregue
            img
                background-image url('../assets/img/RastreioProduto/Inativo/Sinistro.png')

        .entregue--active
            img
                background-image url('../assets/img/RastreioProduto/Ativo/Entregue.png')
    
            h4
                color $c-green

    .timeline--detailed
        border-collapse collapse
        width 80vw
        margin-left 8rem
        margin-top 3rem
        margin-bottom 3rem
        box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.2)
        font-family 'Lato Regular'

        thead
            border-bottom 1px solid rgba($c-lightgray, 0.2)
            
            tr
                th
                    color $c-darkgray
                    padding 1rem

        tbody
            font-family 'Lato Regular'
            color $c-darkgray
            text-align center

            tr
                background-position 35px 20px
                .detail--coleta
                    background-position 35px 20px
                    background-repeat no-repeat
                    background-image url('../assets/img/RastreioProduto/Ativo/Coleta Copy.png')
                .detail--postado
                    background-position 35px 20px
                    background-repeat no-repeat
                    background-image url('../assets/img/RastreioProduto/Ativo/Postado Copy.png')
                .detail--encaminhado
                    background-position 35px 20px
                    background-repeat no-repeat
                    background-image url('../assets/img/RastreioProduto/Ativo/Encaminhado Copy.png')
                .detail--saiu-entrega
                    background-position 35px 20px
                    background-repeat no-repeat
                    background-image url('../assets/img/RastreioProduto/Ativo/Saiu para entrega.png')
                .detail--entregue
                    background-position 35px 20px
                    background-repeat no-repeat
                    background-image url('../assets/img/RastreioProduto/Ativo/Entregue.png')
                td
                    padding 1rem
                    p
                        margin-bottom 1rem
    </style>

<script>
export default {
    props: {
        status: String,
        events: Array
    },

}
</script>
