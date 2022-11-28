<template>   
         <div class="article-item">
              <img :src="image.src" :alt="image.alt" class="article-item__image">
              <h3>{{ name }}</h3>
              <button v-on:click="addToShoppingCart">Ajouter au panier</button>
         </div>
</template>


<script>


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
            
    },
    computed: {
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

    button {
        margin-bottom: 15px;
    }
</style>