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
                <ProductList :itemsInCart="cartStore.ItemCarts" @remove-from-cart="removeItem($event)"/>
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
                    <p v-if="Number(cartStore.TotalPrice) > 0" class="mb-2">{{formatPrice(cartStore.TotalPrice)}}đ</p>
                    <p v-else class="mb-2 fw-bold">0đ</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Giảm giá:</p>
                    <p class="mb-2 text-success">0đ</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Thuế:</p>
                    <p class="mb-2">0đ</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Tổng cộng thanh toán:</p>
                    <p v-if="Number(cartStore.TotalPrice) > 0" class="mb-2 fw-bold">{{ formatPrice(cartStore.TotalPrice)}}đ</p>
                    <p v-else class="mb-2 fw-bold">0đ</p>
                  </div>

                  <div class="mt-3">
                    <div @click="payment" class="btn btn-success w-100 shadow-0">
                      Thanh toán
                    </div>
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
        <Order :orders="orderStore.allOrder"/>
      </section>
    </div>
   
  </div>
</template>

<script setup>
import Order from "../components/cart/Order.vue";
import {useCartStore} from "../components/stores/Cart.js";
import {useOrderStore} from "../components/stores/Order.js";
import axios from "axios"
import ProductList from "../components/cart/ProductList.vue";
import { onMounted } from "vue";
    //  Lấy tất cả sản phẩm trong giỏ hàng
    const cartStore = useCartStore();
    onMounted(()=> {
      cartStore.getItemCart();
    });
    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = async (productID) => {
      const response = await axios.delete(`http://localhost:8081/api/cartitem/user/${cartStore.userID}/product/${productID}`);
      // cartStore.ItemCarts = this.ItemCarts.filter(item => item.productID !== productID);
      if(response.status === 200) {
        cartStore.getItemCart();
      }
    }

    // Định dạng giá
    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    const orderStore = useOrderStore();
    const payment = () => {
      if(cartStore.userID === '') {
        alert("Vui lòng đăng nhập để thanh toán");
        return;
      }
      if(cartStore.ItemCarts.length === 0) {
        alert("Giỏ hàng của bạn đang trống");
        return;
      }
      const result = confirm("Bạn có muốn thanh toán đơn hàng này?")
      if(result == true){
        cartStore.order();
        orderStore.ItemCarts = cartStore.ItemCarts;
        orderStore.orderSuccess = true;
        cartStore.removeAllItemFromCart(); 
        alert("Đơn hàng đã thanh toán thành công với số tiền: " + formatPrice(cartStore.TotalPrice) + "đ");
        window.location.reload();
      } else {
        alert("Đã hủy thanh toán");
      } 
    }
    orderStore.getOrder();
</script>
