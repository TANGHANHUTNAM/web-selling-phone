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
        />
      </div>
      <div class="form-group mb-3">
        <label class="" for="numberphone">Số điện thoại</label>
        <input
          type="text"
          class="form-control rounded-2 mt-2"
          id="numberphone"
          aria-describedby=""
          placeholder="0936445444"
        />
      </div>
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
</template>
<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
