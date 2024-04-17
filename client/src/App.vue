<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "footer-component": Footer,
  },
};
</script>
