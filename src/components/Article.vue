<template>
    <div class="container">
        <div class="bloc-article">
            <itemArticle class="item" v-for="item in simpleArticle"
            :key="item.name"
            :image="item.image"
            :name="item.name">
            </itemArticle>
        </div>
    </div>
</template>

<script>

import simpArticle from './SimpleArticle.vue'
import { mapState } from 'vuex'

export default {
    name:'articleExemple',
    components: {
        'itemArticle': simpArticle
    },
    computed: {
       ...mapState({
            simpleArticle: 'simpleArticle'
       })
    }
}
</script>

<style lang="scss" scoped>

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