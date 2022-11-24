<template>
    <button v-on="$listeners">
        <slot></slot>
    </button>
    
</template>


<script>
export default {
    name:'ButtonAddArticles'
}
</script>

<style lang="scss" scoped>

</style>