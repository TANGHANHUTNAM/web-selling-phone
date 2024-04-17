<template>
  <div class="navbar container-fluid">
    <div class="nav-logo">
      <img src="../assets/images/logo.png" alt="" />
      <p>SmartPhoneVN</p>
    </div>
    <ul class="nav-menu">
      <li
        v-for="navlink in navlinks"
        :key="navlink.id"
        @Click="onClick(navlink.id)"
      >
        <router-link class="nav-router-link" :to="{ name: navlink.name }">{{
          navlink.text
        }}</router-link>
        <!-- <hr /> -->
      </li>
    </ul>
    <div class="nav-login-cart">
      <router-link :to="{ name: 'LoginSignUp' }">
        <button class="nav-login">Đăng nhập</button>
      </router-link>
      <router-link class="nav-router-link" :to="{ name: 'Cart' }">
        <div class="nav-cart">
          <div><i class="bi bi-cart"></i></div>
          <div class="nav-cart-count">0</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navlinks = reactive([
      {
        id: 1,
        text: "Trang chủ",
        name: "Home",
        isClick: false,
      },
      {
        id: 2,
        text: "Giới thiệu",
        name: "About",
        isClick: false,
      },
      {
        id: 3,
        text: "Sản phẩm",
        name: "AllProducts",
        isClick: false,
      },
    ]);
    function onClick(id) {
      console.log(id);
    }
    return {
      navlinks,
      onClick,
    };
  },
};
</script>
