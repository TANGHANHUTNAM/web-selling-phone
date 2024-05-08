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
            v-model="NewProduct.title"
          />
        </div>
        <div class="form-group mb-3">
          <label class="" for="numberphone">Mô tả</label>
          <textarea
            type="text"
            class="form-control rounded-2 mt-2"
            aria-describedby=""
            placeholder="Iphone 11 64GB màu đen, hàng chính hãng, mới 100%"
            v-model="NewProduct.des"
          />
        </div>
        <div class="form-group mb-3">
          <label class="" for="address">Màu sắc</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            aria-describedby=""
            placeholder="Trắng"
            v-model="NewProduct.color"
          />
        </div>
        <div class="form-group mb-3 d-flex flex-column">
          <label class="mb-3" for="">Hãng</label>
          <select class="select-brand" v-model="NewProduct.selectBrand">
            <option v-for="br in useAdminProduct.brand" :key="br._id" :value="br._id">{{ br.name }}</option>
          </select>
        </div>
        
        <div class="form-group mb-3">
          <label for="password">Số lượng</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="5"
            v-model="NewProduct.number"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Giá</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="10000000"
            v-model="NewProduct.new_price"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">RAM</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="8"
            v-model="NewProduct.ram"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">ROM</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="128"
            v-model="NewProduct.rom"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Link ảnh</label>
          <input
            type="text"
            class="form-control rounded-2 mt-2"
            placeholder="/images/iphone11_den.jpg"
            v-model="NewProduct.thumbnail"
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
      <!-- <form action="http://localhost:8081/images" method="post" enctype="multipart/form-data">
  <input type="file" name="image" accept="image/*">
  <input type="submit" value="Upload">
</form> -->
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import {useAdminProductStore } from "../stores/adminProduct"
const useAdminProduct = useAdminProductStore()
 
const NewProduct = reactive({
    title: "",
    des: "",
    color: "",
    selectBrand: "",
    number: "",
    new_price: "",
    ram: "",
    rom: "",
    thumbnail: ""
}) 
const addProduct = () => {
    if(NewProduct.title === "" || NewProduct.des === "" || NewProduct.color === "" || NewProduct.selectBrand === "" || NewProduct.number === "" || NewProduct.new_price === "" || NewProduct.ram === "" || NewProduct.rom === "" || NewProduct.thumbnail === ""){
        alert("Vui lòng điền đầy đủ thông tin")
        return;
    }
    if(NewProduct.title === undefined || NewProduct.des === undefined || NewProduct.color === undefined || NewProduct.selectBrand === undefined || NewProduct.number === undefined || NewProduct.new_price === undefined || NewProduct.ram === undefined || NewProduct.rom === undefined || NewProduct.thumbnail === undefined){
        alert("Vui lòng điền đầy đủ thông tin sss")
        return;
    }
    useAdminProduct.createProduct = NewProduct;
    console.log(useAdminProduct.createProduct)
    useAdminProduct.addNewProduct();
}

onMounted(() => {
  useAdminProduct.getBrand();
})
</script>

<style scoped>
.select-brand{
   width: 200px;
   height: 40px;
}
</style>