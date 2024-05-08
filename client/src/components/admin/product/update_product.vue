<template>
  <div class="container mt-5" v-if="useAdminProduct">
    <!-- image -->
    <div class="text-center">
      <img
        class="image-product"
        :src="`http://localhost:8081${useAdminProduct.productByID.thumbnail}`"
        alt=""
      />
    </div>
    <div class="row my-2 text-center">
        <h2>{{useAdminProduct.productByID.title}}</h2>
    </div>
    <div class="row my-2 text-center">
        <h3 >Hãng: {{useAdminProduct.brandProductID.name}}</h3>
    </div>
    <div class="row my-2 text-center">
        <h3 >Màu: {{useAdminProduct.productByID.color}}</h3>
    </div>
    <form @submit.prevent="updateProduct" action="" class="mb-5 g-5">
      
        <label for="" class="form-label">SỐ LƯỢNG: (nhập số)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.number"
      />

      <label for="" class="form-label">RAM: (nhập số)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.ram"
      />

      <label for="" class="form-label">ROM: (nhập số)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.rom"
      />

      <label for="" class="form-label">GIÁ MỚI: (nhập số)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.new_price"
      />
      <label for="" class="form-label">GIÁ CŨ: (nhập số)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.old_price"
      />
      <label for="" class="form-label">SẢN PHẨM MỚI: (nhập 1: có, nhập 0: không)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.is_newProduct"
      />

      <label for="" class="form-label">SẢN PHẨM BÁN CHẠY: (nhập 1: có, nhập 0: không)</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.is_bestSeller"
      />

      <label for="" class="form-label">Đánh giá</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="productNew.rating"
      />

      <div class="input-group mt-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Mô tả sản phẩm</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" v-model="productNew.des"></textarea>
      </div>

      <div class="text-center mt-5 ">
        <button type="submit" class="btn-update">Cập nhật</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch } from 'vue';
import { useAdminProductStore } from '../stores/adminProduct';
import {useRouter} from 'vue-router';
const router = useRouter();
const useAdminProduct = useAdminProductStore();
onMounted(() => {
  useAdminProduct.getProductByID(router.currentRoute.value.params.id);
});


const productNew = reactive({
    title: useAdminProduct.productByID.title,
    brand: useAdminProduct.productByID.brand,
    thumbnail: useAdminProduct.productByID.thumbnail,
    number: useAdminProduct.productByID.number,
    ram: useAdminProduct.productByID.ram,
    rom: useAdminProduct.productByID.rom,
    new_price: useAdminProduct.productByID.new_price,
    old_price: useAdminProduct.productByID.old_price,
    is_newProduct: useAdminProduct.productByID.is_newProduct,
    is_bestSeller: useAdminProduct.productByID.is_bestSeller,
    des: useAdminProduct.productByID.des,
    rating: useAdminProduct.productByID.rating,
    color: useAdminProduct.productByID.color,
})

const updateProduct = () => {
  if(productNew.number === '' || productNew.ram === '' || productNew.rom === '' || productNew.new_price === '' || productNew.old_price === '' || productNew.is_newProduct === '' || productNew.is_bestSeller === '' || productNew.des === '' || productNew.rating === '') {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }
  if(productNew.number === undefined || productNew.ram === undefined || productNew.rom === undefined || productNew.new_price === undefined || productNew.old_price === undefined || productNew.is_newProduct === undefined || productNew.is_bestSeller === undefined || productNew.des === undefined || productNew.rating === undefined) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }
  useAdminProduct.productNew = productNew;
  useAdminProduct.updateProduct(router.currentRoute.value.params.id);
  alert('Cập nhật thành công');
    router.push({name: 'admin-product'}).then(() => {
      location.reload();
    });
};

watch(() => router.currentRoute.value.params.id, async (id) => {
  useAdminProduct.getProductByID(id);
})

</script>

<style scoped>
.btn-update {
    border: none;
    background-color: var(--primary-blue);  
    color: var(--primary-white);
    padding: 10px 20px;
    border-radius: 1rem;
}

.btn-update:hover {
    background-color: var(--primary-red);
}
.image-product {
  width: 150px;
  height: 150px;
  background-color: #f1f1f1;
  margin-bottom: 2rem;
}
</style>
