<template>
  <div class="container-fluid px-0">
    <footer
      class="text-center text-lg-start text-white w-100"
      style="background-color: var(--primary-blue)"
    >
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">SmartPhoneVN</h6>
              <p>Giờ hoạt động: 8h00 - 21h00</p>
              <p>151A, Đ.Trần Hoàng Na, P.Hưng Lợi, Q.Ninh Kiều, TP.Cần Thơ</p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Hỗ trợ</h6>
              <p>Chính sách bảo hành</p>
              <p>Chính sách thanh toán</p>
              <p>Chính sách giao hàng</p>
              <p>Hỗ trợ kỹ thuật</p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Tương tác</h6>
              <p></p>
              <p>smartphonevnstore@gmail.com</p>
              <p>+ 0.909.885.102</p>
              <p>+ 0.333.655.343</p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Theo dõi</h6>

              <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #3b5998"
                href="#!"
                role="button"
                ><i class="bi bi-facebook"></i
              ></a>

              <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #dd4b39"
                href="#!"
                role="button"
                ><i class="bi bi-youtube"></i
              ></a>

              <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #333333"
                href="#!"
                role="button"
                ><i class="bi bi-tiktok"></i
              ></a>
            </div>
          </div>
        </section>
      </div>

      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2024 Copyright: SmartphoneVN | Phát triển bởi smartphonevn
      </div>
      <div @click="onClick()" class="back-to-top"><i class="bi bi-arrow-bar-up"></i></div>
    </footer>
  </div>
</template>

<script setup>
function onClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>


<style scoped>
.footer {
  position: relative;
}
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: var(--primary-red);
  color: var(--primary-white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.back-to-top:hover {
  background-color: var(--second-black);
}

@media (max-width: 575px) {
  .footer {
    position: relative;
  }
  .back-to-top {
    position: fixed;
    bottom: 40px;
    right: 10px;
    background-color: var(--primary-red);
    color: var(--primary-white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  .back-to-top:hover {
    background-color: var(--second-black);
  }
}
</style>