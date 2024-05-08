<template>
    <div class="container mt-5">
        <h1 class="text-danger text-center mb-3">TẠO SẢN PHẨM MỚI</h1>
        <form
        class="flex-column justify-content-start mx-auto mb-5 px-5"
        action=""
        @submit.prevent="addProduct"
      >
        <div class="form-group mb-3">
          <label class="" for="fullName">Tên sản phẩm</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            aria-describedby=""
            placeholder="Iphone 11"
          />
        </div>
        <div class="form-group mb-3">
          <label class="" for="numberphone">Mô tả</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            aria-describedby=""
            placeholder="Iphone 11 64GB màu đen, hàng chính hãng, mới 100%"
          />
        </div>
        <div class="form-group mb-3">
          <label class="" for="address">Màu sắc</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            aria-describedby=""
            placeholder="Trắng"
          />
        </div>
        <div class="form-group mb-3">
          <label for="email">Hãng</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="Apple"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Số lượng</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="5"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Giá</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="10000000"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">RAM</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="8"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">ROM</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="128"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Ảnh</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="/images/iphone11.jpg"
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary w-100 font-weight-bold rounded-2"
          >
            Thêm sản phẩm
          </button>
        </div>
      </form>

      <!-- <form action="http://localhost:8081/images" method="POST" enctype="multipart/form-data">
        <input type="file" name="tenfile">
        <input type="submit" value="Gửi">
      </form> -->
      <form action="http://localhost:8081/images" method="post" enctype="multipart/form-data">
  <input type="file" name="image" accept="image/*">
  <input type="submit" value="Upload">
</form>
    </div>
</template>

<script setup>
const addProduct = () => {
    alert("Thêm sản phẩm thành công");
}
</script>