<template>
    <div class="panier">
        <h1>Article(s) dans votre panier</h1>
        <div class="panier__articles">
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'PanieruWu',
    methods: {
        ...mapState({
            panier: 'panier'
       })
    }
}
</script>

<style lang="scss" scoped>

    .panier {
        height: 100vh;

        &__articles {
            height: 60%;
            border: 1px solid black;
            width: 60%;
            margin: 0 auto;
        }
    }

</style>