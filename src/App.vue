<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/sign">Sign in</router-link> |
      <router-link to="/panier">Panier({{ panier.length }})</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  computed: {
        ...mapState({
            panier: 'panier'
        })
    }
}


</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}

nav {


  & a {
    font-weight: bold;
    color: #2c3e50;
  }

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
