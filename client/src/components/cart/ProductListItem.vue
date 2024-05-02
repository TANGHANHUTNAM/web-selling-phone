<template>
  <div class="m-4" v-if="shoppingcartitem">
    <div class="row gy-3 mb-4">
      <div class="col-lg-5">
        <div class="me-lg-5">
          <div class="d-flex">
            <img
              :src="`http://localhost:8081${shoppingcartitem.thumbnail.thumbnail_link}`"
              class="border rounded me-3"
              style="width: 96px; height: 96px"
              alt="..."
            />
            <div class="">
              <h5 class="nav-link">{{ shoppingcartitem.productID.title }}</h5>
              <p class="text-muted">{{ shoppingcartitem.productID.des }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
      >
        <div class="">
          <select style="width: 100px" class="form-select me-4" v-model="select_number">
            <option @click="updateQuantity(shoppingcartitem._id)" :value="number" v-for="number in shoppingcartitem.thumbnail.number" :key="number">{{number}}</option>
          </select>
        </div>
        <div class="">
          <text class="h6">{{ formatPrice(totalPriceItem) }}đ</text> <br />
          <small class="text-muted text-nowrap">
            {{ formatPrice(shoppingcartitem.price) }}đ / sản phẩm
          </small>
        </div>
      </div>
      <div
        class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2"
      >
        <div class="float-md-end">
          <!-- <a
                        href="#!"
                        class="btn btn-light border px-2 icon-hover-primary"
                        ><i class="fas fa-heart fa-lg px-1 text-secondary"></i
                      ></a> -->
          <div
            class="btn btn-light border text-danger icon-hover-danger"
            @click="removeItem(shoppingcartitem._id)"
          >
            Xóa</div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed} from "vue";
export default {
  name: "ProductListItem",
  props: {
    shoppingcartitem: [Object, Array]
  },
  setup(props, context) {
    const select_number = ref(props.shoppingcartitem.quantity);
    const itemInCart = ref(props.shoppingcartitem);
    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const totalPriceItem = computed(() => {
      return itemInCart.value.price * select_number.value;
    });
    
    const removeItem = async (itemID) => {
        context.emit('remove-item-from-cart', itemID);
    }

    const updateQuantity = async (itemID) => {
      const response = await axios.put(`http://localhost:8081/api/shoppingcart/cartItem/${itemID}`, {
        quantity: select_number.value
      });
      itemInCart.value = response.data;
    }

    return {
      formatPrice, select_number, totalPriceItem, removeItem, updateQuantity
    };
    
  },
};
</script>
