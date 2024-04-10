<template>
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
          placeholder="nam@gmail.com"
        />
      </div>
      <div class="form-group mb-3">
        <label for="password">Mật khẩu</label>
        <input
          type="password"
          class="form-control rounded-2 mt-2"
          id="password"
          placeholder="***************"
        />
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
</template>
