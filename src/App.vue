<template>
  <div>
    <the-nav-bar></the-nav-bar>
    <div id="app">
      <b-container fluid class="bv-example-row">
        <router-view/>
      </b-container>
    </div>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  name: "App",
  components: {
    TheNavBar
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
