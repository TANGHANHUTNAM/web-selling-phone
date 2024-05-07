<template>
  <div>
    <div class="container text-center my-4">
      <h2>ĐĂNG NHẬP</h2>
    </div>
    <div class="container-md mt-2 mx-auto px-2 signin">
      <!-- Start: Form -->
      <form
        class="flex-column justify-content-start my-3 mx-auto"
        action=""
        @submit.prevent="onSubmit"
      >
        <div class="form-group mb-3">
          <label for="email">Địa chỉ Email</label>
          <input
            type="email"
            class="form-control rounded-2 mt-2"
            id="email"
            placeholder="user@gmail.com"
            v-model="user.email"
            @blur="validate()"
            :class="{ 'is-invalid': error.email }"
          />
          <small class="invalid-feedback">{{ error.email }}</small>
        </div>
        <div class="form-group mb-3">
          <label for="password">Mật khẩu</label>
          <input
            type="password"
            class="form-control rounded-2 mt-2"
            id="password"
            placeholder="***************"
            v-model="user.password"
            @blur="validate()"
            :class="{ 'is-invalid': error.password }"
          />
          <small class="invalid-feedback">{{ error.password }}</small>
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary w-100 font-weight-bold rounded-2"
          >
            Đăng nhập
          </button>
        </div>
      </form>

      <!-- Start: Direction -->
      <div class="text-center my-3 w-100">
        <span class="">Bạn chưa có tài khoản?</span>
        <span class="mx-2">
          <router-link :to="{ name: 'Register' }">Đăng ký</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "../stores/User";
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });
    const error = reactive({
      email: "",
      password: "",
    });
    function validate() {
      let valid = true;
      error.email = "";
      error.password = "";
      if (!user.email) {
        error.email = "Email không được để trống!";
        valid = false;
      } else if (!isValidEmail(user.email)) {
        error.email = "Email không đúng định dạng!";
        valid = false;
      }

      if (!user.password) {
        error.password = "Mật khẩu không được để trống!";
        valid = false;
      } else if (!isValidLengthPassword(user.password)) {
        error.password = "Mật khẩu có ít nhất 6 ký tự!";
        valid = false;
      }
      return valid;
    }

    function isValidEmail(value) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    }

    function isValidLengthPassword(value) {
      if (value.length < 6) return false;
      return true;
    }

    const userStore = useUserStore();
    function onSubmit() {
      if (this.validate() == true){
        userStore.userLogin = user;
        userStore.login();
          this.user.password= "";
          this.user.email= "";
      }
    }
    return { onSubmit, user, validate, error };
  },
};
</script>
