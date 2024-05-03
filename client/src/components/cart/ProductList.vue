<template>
  <div v-if="itemsInCart.length > 0">
    <ProductListItem
      v-for="item in itemsInCart"
      :key="item._id"
      :item="item"
      @remove-item-from-cart="removeItemFromCart"
    />
  </div>
  <h5 class="p-5 text-center" v-else>Bạn không có sản phẩm nào trong giỏ hàng!!</h5>
</template>

<script>
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  props: {
    itemsInCart: [Array, Object]
  },
  components: {   
    ProductListItem,
  },
  setup(props, context){
    const removeItemFromCart = ($event) => {
      context.emit('remove-from-cart', $event);
    }
    return {
      removeItemFromCart
    }
  }
};
</script>
