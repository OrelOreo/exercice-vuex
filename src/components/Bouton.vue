<template>
    <button v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:'BaseButton',
}
</script>

<style lang="scss" scoped>

</style>