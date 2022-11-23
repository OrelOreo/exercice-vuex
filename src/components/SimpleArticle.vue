<template>   
         <div class="article-item">
              <img :src="image.src" :alt="image.alt" class="article-item__image">
             <h3>{{ name }}</h3>

             <div class="buttons">
                 <button class="button button__decrement" v-on:click="decrementArticle">-</button>
                 <button class="button button__increment" v-on:click="incrementArticle">+</button>
                 <p>{{ nbArticle }}</p>
            </div>
         </div>
</template>


<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'simpArticle',
    props: {
        image: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
            ...mapActions(['incrementArticle','decrementArticle'])
    },
    computed: {
             ...mapGetters({
                nbArticle: 'formattedNbArticle'
       })
    }
    
}
</script>

<style lang="scss" scoped>

    .article-item {
        border: 1px solid black;
    }

    .article-item img {
        width: 200px;
        height: 200px;
        margin-top: 10px;
        object-fit: cover;
    }

</style>