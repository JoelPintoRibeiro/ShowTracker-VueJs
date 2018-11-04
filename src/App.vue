<template>
  <div>
    <div id="app">
      <the-nav-bar></the-nav-bar>
      <b-container fluid class="bv-example-row">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
