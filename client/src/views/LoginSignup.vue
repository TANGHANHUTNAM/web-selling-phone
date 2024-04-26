<template>
  <div>
    <login-signup />
  </div>
</template>

<script>
import Login from "../components/loginsignup/SignIn.vue";
export default {
  components: {
    "login-signup": Login,
  },
  setup() {
    return {};
  },
};
</script>
