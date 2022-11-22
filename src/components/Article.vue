<template>
    <div class="container">
        <div class="bloc-article">
            <div class="article">
                 <!-- <img src="../assets/article.avif" alt="white wine">
                 <p class="article__description">Vin blanc Montagny</p> -->
                 <img :src="simpArticle.src" :alt="simpArticle.alt">
                 <p class="article__description">{{ simpArticle.name}}</p>
            </div>
        </div>
        <div class="buttons">
            <button class="button button__decrement" v-on:click="decrementArticle">-</button>
            <button class="button button__increment" v-on:click="incrementArticle">+</button>
            <p>{{ nbArticle }}</p>
        </div>
    </div>
    
</template>

<script>

import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    name:'articleExemple',
    computed: {
       ...mapGetters({
             nbArticle: 'formattedNbArticle'
       }),
       ...mapState({
            simpArticle: 'simpArticle'
       })
    },
    methods: {
            ...mapActions(['incrementArticle','decrementArticle'])
    }
}
</script>

<style lang="scss" scoped>

.bloc-article {
    border: 1px solid black;
    width: 350px;
    margin: 0 auto;
    border-radius: 5px;

    & .article img {
        width: 100%;
        height: 450px;
        object-fit: cover;
        margin-bottom: -5px;
    }
}

.article__description {
    height: 100%;
    background: #42b983;
    margin: 0;
    padding: 15px;
}

.buttons {
    width: 19%;
    margin: 0 auto;
    margin-top: 10px;
}

.button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 5px;
    border: none;

    &__decrement {
    background-color: lightcoral;
 }
}

.button__increment {
    background-color: lightgreen;
}

</style>