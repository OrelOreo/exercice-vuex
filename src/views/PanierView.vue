<template>
    <div class="panier">
        <h1>Article(s) dans votre panier</h1>
        <div class="panier__articles">
            <h2>Article(s) ajouté(s) {{ panier.length }}</h2>
            <div class="test" v-bind:key="index" v-for="(item, index) in panier">
                <div class="card">
                    {{ item }}
                    <div class="card__image">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'PanierArticles',

    computed: {
        ...mapState({
            panier: (state)=>
             {
                return state.panier.map(name => {
                    let article = state.simpleArticle.find(a => a.name == name)
                    return article
                })
             }
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