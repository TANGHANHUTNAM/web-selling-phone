<template>
  <div>
    <div class="navbar container-fluid">
    <router-link class="text-decoration-none" :to="{ name: 'Home' }" @click.prevent="resetClick()">
      <div class="nav-logo">
      <img src="../assets/images/logo.png" alt="" />
      <p class="name-storephone">SmartPhoneVN</p>
    </div>
    </router-link>
    <ul class="nav-menu">
      <li
        v-for="navlink in navlinks"
        :key="navlink.id"
      >
        <router-link class="nav-router-link" :to="{ name: navlink.name }" @Click.prevent="onClick(navlink.id)">{{
          navlink.text
        }}</router-link>
        <!-- <hr /> -->
      </li>
    </ul>
    <div class="nav-login-cart">
      <router-link :to="{ name: 'LoginSignUp' }" @click.prevent="onClick(4)">
        <button class="nav-login">Đăng nhập</button>
      </router-link>
      <router-link class="nav-router-link" :to="{ name: 'Cart' }" @click.prevent="onClick(5)">
        <div class="nav-cart">
          <div><i class="bi bi-cart"></i></div>
          <div class="nav-cart-count">{{ cartCount }}</div>
        </div>
      </router-link>
    </div>
  </div>
  <!-- HEADER -->
  <header>
      <div style="background-color: var(--second-blue)">
        <div class="container py-3 ">
          <nav class="d-flex">
            <h6 class="mb-0">
              <router-link :to="{name: 'Home'}" class="text-decoration-none text-white" @click.prevent="resetClick()">Trang chủ</router-link>
              <span class="text-white-50 mx-2"> ></span>
              <a href="" class="text-white text-decoration-none"></a>
              <router-link :to="{name: `${navlinkRoute.name}`}" class="text-decoration-none text-white">{{ navlinkRoute.text }}</router-link>
            </h6>
          </nav>
        </div>
      </div>
    </header>
  <!-- HEADER -->
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref, onMounted} from "vue";
export default {
  setup() {
    const navlinks = reactive([
      {
        id: 1,
        text: "Trang chủ",
        name: "Home",
      },
      {
        id: 2,
        text: "Phản hồi",
        name: "Feedback",
      },
      {
        id: 3,
        text: "Sản phẩm",
        name: "AllProducts",
      },
    ]);
    const navlinkRoute = reactive({
      name: "",
      text: ""
    });
    function onClick(navlinkID) {
      navlinks.forEach((navlink) => {
        if (navlink.id === navlinkID) {
          if(navlinkID === 1){
            navlinkRoute.text= "";
          } else {
            navlinkRoute.text = navlink.text;
            navlinkRoute.name = navlink.name;
          }
        } else if(navlinkID === 4){
            navlinkRoute.name = "LoginSignUp"
            navlinkRoute.text = "Đăng nhập";
          } else if(navlinkID === 5){
            navlinkRoute.name = "Cart"
            navlinkRoute.text = "Giỏ hàng";
          }
      });
      }
    function resetClick(){
      navlinkRoute.text = "";
    }


    // Lấy số lượng sản phẩm trong giỏ hàng
    const userID = ref("66337a4d25a1b036070f339f");
    const cartCount = ref(0);
    const getCountCart = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/api/cartitem/user/${userID.value}`);
        cartCount.value = res.data.length;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getCountCart();
    });
    return {
      navlinks, onClick, navlinkRoute, resetClick, cartCount
    };
  },
};
</script>
