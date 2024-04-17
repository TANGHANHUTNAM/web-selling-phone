<template>
  <div>
    <!-- Product details -->
    <section class="py-4" v-if="product">
      <div class="container">
        <div class="row gx-5">
          <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center">
              <a
                data-fslightbox="mygalley"
                class="rounded-4"
                target="_blank"
                data-type="image"
                href=""
              >
                <img
                  style="max-width: 100%; max-height: 70vh; margin: auto"
                  class="rounded-4 fit p-3"
                  :src="product.imgURL"
                />
              </a>
            </div>
            <div class="d-flex justify-content-center mb-3">
              <a
                data-fslightbox="mygalley"
                class="border mx-1 rounded-2"
                target="_blank"
                data-type="image"
                href=""
              >
                <img
                  width="60"
                  height="60"
                  class="rounded-2"
                  :src="product.imgURL"
                />
              </a>
              <a
                data-fslightbox="mygalley"
                class="border mx-1 rounded-2"
                target="_blank"
                data-type="image"
                href=""
              >
                <img
                  width="60"
                  height="60"
                  class="rounded-2"
                  :src="product.imgURL"
                />
              </a>
              <a
                data-fslightbox="mygalley"
                class="border mx-1 rounded-2"
                target="_blank"
                data-type="image"
                href=""
              >
                <img
                  width="60"
                  height="60"
                  class="rounded-2"
                  :src="product.imgURL"
                />
              </a>
            </div>
            <!-- thumbs-wrap.// -->
            <!-- gallery-wrap .end// -->
          </aside>
          <main class="col-lg-6">
            <div class="ps-lg-2">
              <h4 class="title text-dark">
                {{ product.name }}
              </h4>
              <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <span class="ms-1"> 4.5 </span>
                </div>
                <span class="text-muted"
                  ><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 đã
                  bán</span
                >
                <span class="text-success ms-2">Còn hàng</span>
              </div>

              <div class="mb-3">
                <span class="h5">{{ product.price_new }}đ</span>
                <span class="text-muted">/sản phẩm</span>
                <p>
                  <span class="product-details-old-price">
                    {{ product.price_old }}đ</span
                  >
                </p>
              </div>

              <p>
                {{ product.des }}
              </p>

              <div class="row">
                <dt class="col-3">Color</dt>
                <dd class="col-9">Brown</dd>

                <dt class="col-3">Brand</dt>
                <dd class="col-9">Reebook</dd>
              </div>

              <hr />

              <div class="row mb-4">
                <div class="col-md-4 col-6">
                  <label class="mb-2">Color</label>
                  <select
                    class="form-select border border-secondary"
                    style="height: 35px"
                  >
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                  </select>
                </div>
                <!-- col.// -->
                <div class="col-md-4 col-6 mb-3">
                  <label class="mb-2 d-block">Quantity</label>
                  <div class="input-group mb-3" style="width: 170px"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 d-flex flex-row">
                  <a
                    href="#"
                    class="btn btn-warning shadow-0 w-100 me-1 d-flex text-white align-items-center justify-content-center"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-primary shadow-0 w-100 ms-1 d-flex align-items-center justify-content-center"
                  >
                    <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
    <not-found v-else />
  </div>
</template>

<script>
import NotFound from "../../views/404Page.vue";
import { products } from "../../assets/js/fake-data.js";
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    "not-found": NotFound,
  },
  setup() {
    const route = useRoute();
    let product = reactive(products.find((p) => p.id == route.params.id));
    return {
      product,
    };
  },
};
</script>
