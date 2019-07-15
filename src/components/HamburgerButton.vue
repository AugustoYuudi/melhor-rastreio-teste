<template>
    <div class="h-button" @click="toggleButton" :class="{ 'h-button--toggled':buttonIsToggled }">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<style lang="stylus">
.h-button
    cursor pointer
    margin-left 1rem
    margin-top 1rem
    width 100%

    span
        display block
        margin 0 auto .5rem auto
        width 60px
        height 20px
        border-radius 9px
        opacity 1
        transition all .3s ease
        background-color tomato

.h-button--toggled
    span
        width 85px
        margin-bottom -60px
        margin-top 40px
        &:nth-child(1)
            transform rotate(135deg)
        &:nth-child(2)
            opacity 0
            transform translateX(-100px)
        &:nth-child(3)
            transform rotate(-135deg)



</style>

<script>
export default {
    data() {
        return {
            buttonIsToggled: false,
        }
    },

    methods: {
        toggleButton: function() {
            this.buttonIsToggled = !this.buttonIsToggled
        }
    }
}
</script>
