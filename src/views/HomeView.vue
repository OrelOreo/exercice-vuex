<template>
  <div class="home">
    <h1>This is a home page</h1>
    <articleEx></articleEx>
  </div>
</template>

<script>

import articleExemple from '../components/Article.vue'

export default {
  name: 'HomeView',
  components: {
    'articleEx': articleExemple
  }
}
</script>
