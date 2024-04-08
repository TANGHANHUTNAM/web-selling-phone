<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import navBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    "nav-bar": navBar,
  },
};
</script>
