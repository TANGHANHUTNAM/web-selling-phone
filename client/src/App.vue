<template>
  <div>
    <router-view :key="this.$route.fullpath"></router-view>
  </div>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
// import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { 
    // "nav-bar": NavBar,
    // "footer-component": Footer,
  },
};
</script>
