<template>
    <div class="rastreio-produto">
        {{product}}
    </div>
</template>

<style lang="stylus">

</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'rastreio-produto',

    methods: {
        ...mapActions([
            'getProduct'
        ])
    },

    computed: {
      ...mapGetters([
          'product'
      ])  
    },

    mounted() {
        this.getProduct()
    }
}
</script>
