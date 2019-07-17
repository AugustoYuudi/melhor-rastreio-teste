<template>
    <footer class="footer">
        <h1>transportadoras</h1>
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
    </footer>
</template>

<style lang="stylus">
.footer
    width 100vw
    background-color white
    text-align center
    padding 1.5rem 0 1.5rem 0
    h1
        color $c-lightgray
        font-size 16px
        font-family 'Lato Light'

    ul
        margin-top 1.5rem
        display grid
        grid-template-columns 1fr 1fr

        li
            margin-top 1rem
            &:nth-child(even)
                text-align left
                margin-left 1.5rem
                // background-color teal
            &:nth-child(odd)
                margin-right 1.5rem
                text-align right
</style>

<script>
export default {
    
}
</script>
