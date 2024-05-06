import { defineStore } from 'pinia'
import axios from 'axios'
export const useCartStore = defineStore('cart', {
  state: () => ({
    search: '',
    userID: '66337a4d25a1b036070f339f',
    data: [],
    ItemCarts: [],
    countCart: 0,
    total: 0,
  }),
  getters: {
    NumberItemCart: (state) => {
    return state.ItemCarts.reduce((sum, item) => sum + item.quantity, state.countCart);
  },
    TotalPrice: (state) => {
      return state.ItemCarts.reduce((sum, item) => sum + Number(item.price)*item.quantity, state.total);
    }
  },
  actions: {
    async getItemCart() {
      const dataCartUserID = await axios.get(`http://localhost:8081/api/cartitem/user/${this.userID}`);
        this.ItemCarts = dataCartUserID.data;
    },
    async getData() {
      if(this.search === '') {
        this.data = [];
      } else {
        const dataSearch = await axios.get(`http://localhost:8081/api/product?des=${this.search}`);
        this.data = dataSearch.data;
      }
    },
    async payment(){
      
    },
    searchProduct(){
      this.getData();
    },

  },  
})