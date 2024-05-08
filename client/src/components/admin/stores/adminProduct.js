import { defineStore } from 'pinia'
import axios from 'axios'
export const useAdminProductStore = defineStore('admin-product', {
  state: () => ({
    out_of_stock_products: [],
    page: 1,
    productByID: [],
    brandProductID: [],
    productNew: [],
    allProduct: [],
    pageAllProduct: 1,
  }),
  getters: {
    
  },
  actions: {
    async getOutOfStockProduct() {
      const data = await axios.get(`http://localhost:8081/api/product/listproduct/out-of-stock-product?page=${this.page}`);
      this.out_of_stock_products = data.data;
    },  

    async getProductByID(productID) {
        const data = await axios.get(`http://localhost:8081/api/product/${productID}`);
        this.brandProductID = data.data.brand;
        this.productByID = data.data;
    },

    async updateProduct(productID) {
        await axios.put(`http://localhost:8081/api/product/${productID}`,{
            number: Number(this.productNew.number),
            ram: this.productNew.ram,
            rom: this.productNew.rom,
            new_price: this.productNew.new_price,
            old_price: this.productNew.old_price,
            is_newProduct: Number(this.productNew.is_newProduct),
            is_bestSeller: Number(this.productNew.is_bestSeller),
            rating: this.productNew.rating,
            des: this.productNew.des, 
        })
        .then(response => {
            console.log(response);
        })
        
    },

    async getAllProduct() {
        const data = await axios.get(`http://localhost:8081/api/product?page=${this.pageAllProduct}`);
        this.allProduct = data.data;
    },

    nextPage() {
      this.page++;
      this.getOutOfStockProduct();
    },

    backPage() {
      if(this.page < 1){
        this.page = 1;
      }
      this.page--;
        this.getOutOfStockProduct();
    },

    nextPageAllProduct() {
        this.pageAllProduct++;
        this.getAllProduct();
    },

    backPageAllProduct() {
        if(this.pageAllProduct < 1){
            this.pageAllProduct = 1;
        }
        this.pageAllProduct--;
        this.getAllProduct();
    }

}
})