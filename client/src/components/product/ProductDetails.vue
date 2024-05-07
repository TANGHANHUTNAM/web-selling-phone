<template>
  <div>
    <!-- Product details -->
    <section class="py-4" v-if="product">
      <div class="container">
        <div class="row gx-5">
          <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center product-img">
              <div
                data-fslightbox="mygalley"
                class="rounded-4"
                target="_blank"
                data-type="image"
              >
                <img
                  class="rounded-4 fit p-3 product-img-main"
                  :src="`http://localhost:8081${product.thumbnail}`"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-3" v-if="gallery.length > 0">
              <div
                v-for="item in gallery" :key="item._id"
                data-fslightbox="mygalley"
                class="border mx-1 rounded-2 product-img-thumb"
                target="_blank"
                data-type="image"
                @click="onToggleImage(item.link)"
              >
                <img 
                  width="60"
                  height="60"
                  class="rounded-2"
                  :src="`http://localhost:8081${item.link}`"
                />
              </div>
        
            </div>
            <!-- thumbs-wrap.// -->
            <!-- gallery-wrap .end// -->
          </aside>
          <main class="col-lg-6">
            <div class="ps-lg-2">
              <h4 class="title text-dark">
                {{ product.title }}
              </h4>
              <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                  <i class="bi bi-star-fill"></i>
                  <span class="ms-1">{{ product.rating }}</span>
                </div>
                <!-- <span class="text-muted"
                  ><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 đã
                  bán</span
                > -->
                <span v-if="product.number > 0" class="text-success ms-2 ">Còn hàng {{ product.number }}</span>
                <span v-else class="text-danger ms-2">Hết hàng</span>
              </div>

              <div class="mb-3">
                <span class="h5 product-new-price">{{ formatPrice(product.new_price) }}đ</span>
                <span class="text-muted">/sản phẩm</span>
                <p>
                  <span v-if="Number(product.old_price) > 0" class="product-details-old-price">
                    {{formatPrice(product.old_price)}}đ</span
                  >
                </p>
              </div>

              <h5 class="my-4">
                {{ product.des }}
              </h5>

              <div class="row">
                <dt class="col-3">Màu:</dt>
                <dd class="col-9">{{ product.color }}</dd>
                <dt class="col-3">RAM:</dt>
                <dd class="col-9">{{ product.ram }} <b>GB</b></dd>
                <dt class="col-3">ROM:</dt>
                <dd class="col-9">{{ product.rom }} <b>GB</b></dd>
                <dt class="col-3">Hãng:</dt>
                <dd class="col-9">{{ brand.name }}</dd>
              </div>

              <hr />

              <div class="row mb-4">
                <!-- <div class="col-md-4 col-6">
                  <label class="mb-2">Color</label>
                  <select
                    class="form-select border border-secondary"
                    style="height: 40px" 
                    v-model="select"
                  >
                    <option :value="thumb.color"  @click="onClick(thumb.color)" v-for="thumb in thumbnail" :key="thumb._id">{{ thumb.color }}</option>
                  </select>
                </div> -->
                <!-- col.// -->
                <!-- <div class="col-md-4 col-6 mb-3">
                  <label class="mb-2 d-block">Quantity</label>
                  <div class="input-group mb-3" style="width: 170px"></div>
                </div> -->
              </div>
              <div class="row">
                <div class="col-12 d-flex flex-row">
                  <!-- <div
                    href="#"
                    class="btn btn-warning shadow-0 w-100 me-1 d-flex text-white align-items-center justify-content-center"
                  >
                    Mua ngay
                  </div> -->
                  <div
                  @click="addToCart()"
                    v-if="!ItemIsInCart && !showSuccess"
                    class="btn-add-cart-failure btn btn-warning shadow-0 w-100 ms-1 d-flex align-items-center justify-content-center text-white"
                  >
                    <i class=" me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng 
                  </div>  
                  <!-- <div
                    v-if="showSuccess && !ItemIsInCart"
                    class="btn-add-cart-success btn btn-primary shadow-0 w-100 ms-1 d-flex align-items-center justify-content-center text-white"
                  >
                    <i class=" me-1 fa fa-shopping-basket"></i> Đã thêm sản phẩm vào giỏ hàng!
                  </div> -->
                  <div
                    v-if="ItemIsInCart"
                    class="btn btn-cart-is-in-cart shadow-0 w-100 ms-1 d-flex align-items-center justify-content-center text-white"
                  >
                    <i class="me-1 fa fa-shopping-basket"></i> Sản phẩm đã thêm vào giỏ hàng
                  </div>
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
import { useCartStore } from "../stores/Cart.js";
import NotFound from "../../views/404Page.vue";
import axios from "axios"
import { useRoute } from "vue-router";
import { ref, computed, onMounted, watch} from "vue";
// import { useUserStore } from "../stores/User";
export default {
  components: {
    "not-found": NotFound,
  },
  setup() {
    const route = useRoute();
    // Lấy tất cả sản phẩm
    // const userStore = useUserStore();
    const userID = ref(localStorage.getItem('userID'));
    const product = ref({});
    const gallery = ref([]);
    const brand = ref({});
    const getProduct = async () => {
      const resultProduct = await axios.get(`http://localhost:8081/api/product/${route.params.id}`);
      const resultGallery = await axios.get(`http://localhost:8081/api/gallery/product/${route.params.id}`);
      product.value = resultProduct.data;
      gallery.value = resultGallery.data
      brand.value = resultProduct.data.brand
      cartStore.getItemCart();
    };

    // Xem gallery
    function onToggleImage(gallery_link) {
      const mainImage = document.querySelector('.product-img-main');
      mainImage.src = `http://localhost:8081${gallery_link}`;
    }
    
    // Thêm sản phẩm vào giỏ hàng
    const cartStore = useCartStore();
    const showSuccess = ref(false)
    const addToCart = async () => {
    if(userID.value === null) return alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
    axios.post(`http://localhost:8081/api/cartitem/user/${userID.value}`,{
      productID: product.value._id,
      price: product.value.new_price,
    })
      showSuccess.value = true;
      getProduct();
    };
  
    watch(
  () => route.params.id,
  async id => {
    product.value = await axios.get(`http://localhost:8081/api/product/${id}`);
    getProduct();
    showSuccess.value = false;
  }
)
    // Check sản phẩm trong giỏ hàng
    const ItemIsInCart = computed(() => {
      return cartStore.ItemCarts.some((item) => item.productID._id === product.value._id);
    });

    // Định dạng giá sản phẩm
    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    onMounted(() => {
      getProduct();
    });
    return {
      getProduct ,formatPrice, product, gallery, brand , onToggleImage, addToCart, showSuccess, ItemIsInCart
    };
  },  
};
</script>

<style scoped>
.product-details-old-price {
  text-decoration: line-through;
}

.product-img{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.product-img-main{
  width: 20rem;
  height: 20rem;
}

.product-new-price{
  color: var(--primary-red);
}

.product-img-thumb {
  cursor: pointer;
}

.btn-add-cart-failure {
  border: none;
  background-color: var(--primary-red)
}

.btn-add-cart-failure:hover {
  background-color: var(--primary-blue);
}


.btn-add-cart-success {
  background-color: #198754;
  border: none; 
}

.btn-cart-is-in-cart{
  background-color: gray;
  border: none;
}
</style>
