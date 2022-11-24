<template>
    <div class="container">
        <div class="bloc-article">
            <itemArticle class="item" v-for="item in simpleArticle"
            v-bind:id="item"
            :item="item"
            :addItemToShoppinCart="addItemToShoppinCart"
            :key="item.name">
            </itemArticle>
            <div class="panier">
                <h2>Panier :</h2>
            </div>
        </div>
    </div>
    
</template>

<script>
import simpArticle from './SimpleArticle.vue'
import { mapState } from 'vuex'

export default {
    name:'articleExemple',
    components: {
        'itemArticle': simpArticle,
        
    },
    computed: {
       ...mapState({
            simpleArticle: 'simpleArticle',
       }),
    }
}
</script>

<style lang="scss" scoped>

.container {
    height: 100vh;
}
.bloc-article {
    width: 350px;
    height: 900px;
    margin: auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.article__description {
    height: 100%;
    background: #42b983;
    margin: 0;
    padding: 15px;
}

 .panier {
    position: fixed;
    right: 50px;
    top: 110px;
    border: 1px solid black;
    width: 30vw;
    height: 70vh;
 }

</style>