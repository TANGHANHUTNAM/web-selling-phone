<template>
  <header>
    <!-- Heading -->
    <div style="background-color: var(--second-blue)">
      <div class="container py-4">
        <!-- Breadcrumb -->
        <nav class="d-flex">
          <h6 class="mb-0">
            <a href="" class="text-white-50">Home</a>
            <span class="text-white-50 mx-2"> > </span>
            <a href="" class="text-white"><u>Login</u></a>
          </h6>
        </nav>
        <!-- Breadcrumb -->
      </div>
    </div>
    <!-- Heading -->
  </header>
  <login-signup />
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
