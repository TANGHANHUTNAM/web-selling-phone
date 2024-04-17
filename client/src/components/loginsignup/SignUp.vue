<template>
  <div>
    <header>
      <!-- Heading -->
      <div style="background-color: var(--second-blue)">
        <div class="container py-4">
          <!-- Breadcrumb -->
          <nav class="d-flex">
            <h6 class="mb-0">
              <a href="" class="text-white-50">Home</a>
              <span class="text-white-50 mx-2"> > </span>
              <a href="" class="text-white"><u>Register</u></a>
            </h6>
          </nav>
          <!-- Breadcrumb -->
        </div>
      </div>
      <!-- Heading -->
    </header>
    <div class="container text-center my-4">
      <h2>ĐĂNG KÝ</h2>
    </div>
    <div class="container-md mt-2 mx-auto px-2 signup">
      <!-- Start: Form -->
      <form
        class="flex-column justify-content-start my-3 mx-auto"
        action=""
        @submit.prevent="onSubmit"
      >
        <div class="form-group mb-3">
          <label class="" for="fullName">Họ và tên</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            id="fullName"
            aria-describedby=""
            placeholder="Nguyễn Văn A"
            v-model="user.fullName"
            @blur="validate()"
            :class="{ 'is-invalid': error.fullName }"
          />
          <small class="invalid-feedback">{{ error.fullName }}</small>
        </div>
        <div class="form-group mb-3">
          <label class="" for="numberphone">Số điện thoại</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            id="numberphone"
            aria-describedby=""
            placeholder="0936445444"
            v-model="user.phoneNumber"
            @blur="validate()"
            :class="{ 'is-invalid': error.phoneNumber }"
          />
          <small class="invalid-feedback">{{ error.phoneNumber }}</small>
        </div>
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
            Đăng ký
          </button>
        </div>
      </form>

      <!-- Start: Direction -->
      <div class="text-center my-3 w-100">
        <span class="">Bạn đã có tài khoản?</span>
        <span class="mx-2">
          <router-link :to="{ name: 'LoginSignUp' }">Đăng nhập</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });

    const error = reactive({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });

    function validate() {
      let isValid = true;
      error.fullName = "";
      error.email = "";
      error.phoneNumber = "";
      error.password = "";
      if (!user.fullName) {
        error.fullName = "Họ và tên không được để trống!";
        isValid = false;
      } else if (!isValidFullName(user.fullName)) {
        error.fullName = "Không đúng định dạng tên!";
        isValid = false;
      }

      if (!user.phoneNumber) {
        error.phoneNumber = "Số điện thoại không được để trống!";
        isValid = false;
      } else if (!isPhoneNumber(user.phoneNumber)) {
        error.phoneNumber = "Không đúng định dạng số điện thoại!";
        isValid = false;
      }
      if (!user.email) {
        error.email = "Email không được để trống!";
        isValid = false;
      } else if (!isValidEmail(user.email)) {
        error.email = "Email không đúng định dạng!";
      }
      if (!user.password) {
        error.password = "Mật khẩu không được để trống!";
        isValid = false;
      }
      return isValid;
    }

    function isValidFullName(value) {
      return /[\p{L}\s]+/.test(value);
    }
    function isPhoneNumber(value) {
      return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value);
    }
    function isValidEmail(value) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    }

    function onSubmit() {
      if (this.validate()) {
        console.log(user);
      }
    }
    return { onSubmit, user, error, validate };
  },
};
</script>
