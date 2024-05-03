<template>
  <div>
    <div>
      <section class="bg-light my-5">
        <div class="container">
          <div class="row">
            <!-- cart -->
            <div class="col-lg-9">
              <div class="card border shadow-0">
                <h4 class="card-title m-4">Giỏ hàng</h4>
                <!-- Product List -->
                <ProductList :itemsInCart="cartItems" @remove-from-cart="removeItem($event)"/>
                <div class="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i class="fas fa-truck text-muted fa-lg"></i> Cửa hàng của
                    chúng tôi luôn đặt sự uy tín và chất lượng lên hàng đầu
                  </p>
                  <p class="text-muted">Cảm ơn bạn đã tin tưởng và ủng hộ</p>
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
                    <p class="mb-2">đ</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Giảm giá:</p>
                    <p class="mb-2 text-success">0</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Thuế:</p>
                    <p class="mb-2">0</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Tổng cộng thanh toán:</p>
                    <p class="mb-2 fw-bold">đ</p>
                  </div>

                  <div class="mt-3">
                    <a href="#" class="btn btn-success w-100 shadow-0 mb-2">
                      Thanh toán
                    </a>
                    <router-link :to="{name: 'AllProducts'}" class="btn btn-primary w-100 border mt-2">
                      Tiếp tục mua sắm
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- summary -->
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import ProductList from "../components/cart/ProductList.vue";
import {  ref, onMounted } from "vue";
export default {
  components: {
    ProductList
  },
  setup() {
    
    
    //  Lấy tất cả sản phẩm trong giỏ hàng
    const userID = ref('66337a4d25a1b036070f339f')
    const cartItems = ref([]);
    const getCartItems = async () => {
      const response = await axios.get(`http://localhost:8081/api/cartitem/user/${userID.value}`);
      cartItems.value = response.data;
    };  

    
    // const totalPrice = computed(() => {
    //   return cartItems.value.reduce((sum, item) => sum + Number(item.price)*item.quantity, 0);
    // });
    
    
    const removeItem = async (productID) => {
       const response = await axios.delete(`http://localhost:8081/api/cartitem/user/${userID.value}/product/${productID}`);
      cartItems.value = response.data;
      getCartItems()
    }

    // Định dạng giá
    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    onMounted(() => {
      getCartItems();
    });
    return {
    cartItems, formatPrice, removeItem
    };
  },
};
</script>
