<!-- <template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3>Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form
          action=""
          class="text-center d-flex flex-column justify-content-between"
          @submit.prevent="addCategory"
        >
          <div class="form-group mb-2">
            <label for="">Name</label>
            <input
              id="addCategoryName"
              type="text"
              class="form-control"
              v-model="categoryName"
            />
          </div>
          <div class="form-group mb-2">
            <label for="">Description</label>
            <textarea
              id="addCategoryDescription"
              type="text"
              class="form-control"
              v-model="description"
            />
          </div>
          <div class="form-group mb-2">
            <label for="">Image</label>
            <input
              id="addCategoryImage"
              type="text"
              class="form-control"
              v-model="imageURL"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// const axios = require("axios")
import { ref } from "vue";
export default {
  setup() {
    const categoryName = ref("");
    const description = ref("");
    const imageURL = ref("");
    function addCategory() {
      console.log(this.categoryName, this.description, this.imageURL);
      const newCategory = {
        categoryName: categoryName.value,
        description: description.value,
        imageURL: imageURL.value,
      };
    }
    return {
      categoryName,
      description,
      imageURL,
      addCategory,
      newCategory,
    };
  },
};
</script> -->

<template>
  <div>1</div>
</template>
