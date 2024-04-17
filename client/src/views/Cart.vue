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
              <a href="" class="text-white"><u>Shopping cart</u></a>
            </h6>
          </nav>
          <!-- Breadcrumb -->
        </div>
      </div>
      <!-- Heading -->
    </header>

    <section class="bg-light my-5">
      <div class="container">
        <div class="row">
          <!-- cart -->
          <div class="col-lg-9">
            <div class="card border shadow-0">
              <div class="m-4">
                <h4 class="card-title mb-4">Giỏ hàng</h4>
                <div class="row gy-3 mb-4">
                  <div class="col-lg-5">
                    <div class="me-lg-5">
                      <div class="d-flex">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          class="border rounded me-3"
                          style="width: 96px; height: 96px"
                        />
                        <div class="">
                          <a href="#" class="nav-link"
                            >Winter jacket for men and lady</a
                          >
                          <p class="text-muted">Yellow, Jeans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
                  >
                    <div class="">
                      <select style="width: 100px" class="form-select me-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div class="">
                      <text class="h6">$1156.00</text> <br />
                      <small class="text-muted text-nowrap">
                        $460.00 / per item
                      </small>
                    </div>
                  </div>
                  <div
                    class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2"
                  >
                    <div class="float-md-end">
                      <a
                        href="#!"
                        class="btn btn-light border px-2 icon-hover-primary"
                        ><i class="fas fa-heart fa-lg px-1 text-secondary"></i
                      ></a>
                      <a
                        href="#"
                        class="btn btn-light border text-danger icon-hover-danger"
                      >
                        Xóa</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-top pt-4 mx-4 mb-4">
                <p>
                  <i class="fas fa-truck text-muted fa-lg"></i> Cửa hàng của
                  chúng tôi luôn đặt sự uy tín và chất lượng lên hàng đầu
                </p>
                <p class="text-muted">Cảm ơn bạn đã ghé thăm</p>
              </div>
            </div>
          </div>
          <!-- cart -->
          <!-- summary -->
          <div class="col-lg-3">
            <div class="card mb-3 border shadow-0">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label class="form-label">Bạn có mã giảm giá?</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control border"
                        name=""
                        placeholder="Nhập mã"
                      />
                      <button class="btn btn-light border">Áp dụng</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card shadow-0 border">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Tổng:</p>
                  <p class="mb-2">$329.00</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Giảm giá:</p>
                  <p class="mb-2 text-success">-$60.00</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Thuế:</p>
                  <p class="mb-2">$14.00</p>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Tổng cộng thanh toán:</p>
                  <p class="mb-2 fw-bold">$283.00</p>
                </div>

                <div class="mt-3">
                  <a href="#" class="btn btn-success w-100 shadow-0 mb-2">
                    Thanh toán
                  </a>
                  <a href="#" class="btn btn-light w-100 border mt-2">
                    Trở về trang chủ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- summary -->
        </div>
      </div>
    </section>

    <section>
      <div class="container my-5">
        <header class="mb-4">
          <h3>Gợi ý một vài sản phẩm</h3>
        </header>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
              <div class="mask px-2" style="height: 50px">
                <div class="d-flex justify-content-between">
                  <h6>
                    <span class="badge bg-danger pt-1 mt-3 ms-2">New</span>
                  </h6>
                  <a href="#"
                    ><i
                      class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"
                    ></i
                  ></a>
                </div>
              </div>
              <a href="#" class="">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                  class="card-img-top rounded-2"
                />
              </a>
              <div class="card-body d-flex flex-column pt-3 border-top">
                <a href="#" class="nav-link">Gaming Headset with Mic</a>
                <div class="price-wrap mb-2">
                  <strong class="">$18.95</strong>
                  <del class="">$24.99</del>
                </div>
                <div
                  class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto"
                >
                  <a href="#" class="btn btn-outline-primary w-100"
                    >Thêm vào giỏ hàng</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
              <div class="mask px-2" style="height: 50px">
                <a href="#"
                  ><i
                    class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"
                  ></i
                ></a>
              </div>
              <a href="#" class="">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                  class="card-img-top rounded-2"
                />
              </a>
              <div class="card-body d-flex flex-column pt-3 border-top">
                <a href="#" class="nav-link">Apple Watch Series 1 Sport </a>
                <div class="price-wrap mb-2">
                  <strong class="">$120.00</strong>
                </div>
                <div
                  class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto"
                >
                  <a href="#" class="btn btn-outline-primary w-100"
                    >Thêm vào giỏ hàng</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card px-4 border shadow-0">
              <div class="mask px-2" style="height: 50px">
                <a href="#"
                  ><i
                    class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"
                  ></i
                ></a>
              </div>
              <a href="#" class="">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                  class="card-img-top rounded-2"
                />
              </a>
              <div class="card-body d-flex flex-column pt-3 border-top">
                <a href="#" class="nav-link">Men's Denim Jeans Shorts</a>
                <div class="price-wrap mb-2">
                  <strong class="">$80.50</strong>
                </div>
                <div
                  class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto"
                >
                  <a href="#" class="btn btn-outline-primary w-100"
                    >Thêm vào giỏ hàng</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card px-4 border shadow-0">
              <div class="mask px-2" style="height: 50px">
                <a href="#"
                  ><i
                    class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"
                  ></i
                ></a>
              </div>
              <a href="#" class="">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                  class="card-img-top rounded-2"
                />
              </a>
              <div class="card-body d-flex flex-column pt-3 border-top">
                <a href="#" class="nav-link"
                  >Mens T-shirt Cotton Base Layer Slim fit
                </a>
                <div class="price-wrap mb-2">
                  <strong class="">$13.90</strong>
                </div>
                <div
                  class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto"
                >
                  <a href="#" class="btn btn-outline-primary w-100"
                    >Thêm vào giỏ hàng</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { cartItems } from "../assets/js/fake-data";
import { computed } from "vue";
export default {
  setup() {
    const totalPrice = computed(() => {
      return cartItems.reduce((sum, item) => sum + Number(item.price_new), 0);
    });
    console.log(totalPrice.value);
    return {
      cartItems,
      totalPrice,
    };
  },
};
</script>
