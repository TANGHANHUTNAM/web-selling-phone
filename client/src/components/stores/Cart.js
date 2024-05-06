import { defineStore } from 'pinia'
import axios from 'axios'
export const useCartStore = defineStore('cart', {
  state: () => ({
    search: '',
    userID: '66337a4d25a1b036070f339f',
    dataSearch: [],
    itemInCart: [],
  }),
  getters: {
    
  },
  actions: {
    async getData() {
        const dataSearch = await axios.get(`http://localhost:8081/api/product?des=${this.search}`);
        const dataCartUserID = await axios.get(`http://localhost:8081/api/cartitem/user/${this.userID}`);
        this.dataSearch = dataSearch.data;
        this.itemInCart = dataCartUserID.data;
    }
  },
})