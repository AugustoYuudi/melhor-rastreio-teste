<template>
    <div class="rastreio-produto">
        <div class="upper">
            <RastreioHeader :tracking=product.data.tracking></RastreioHeader>

            <RastreioInfo :data=product.data></RastreioInfo>
        </div>
        <RastreioFooter></RastreioFooter>
    </div>
</template>

<style lang="stylus">
.rastreio-produto
    .upper
        min-height 100vh
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import RastreioHeader from '@/components/RastreioHeader'
import RastreioInfo from '@/components/RastreioInfo'
import RastreioFooter from '@/components/RastreioFooter'

export default {
    name: 'rastreio-produto',

    components: {
        RastreioHeader,
        RastreioInfo,
        RastreioFooter
    },

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

    created() {
        this.getProduct()
    },

}
</script>
