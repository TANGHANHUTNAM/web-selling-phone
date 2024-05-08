import { defineStore } from 'pinia'
import axios from 'axios'
export const useAdminOrderStore = defineStore('admin-order', {
  state: () => ({
    orderPending: [],
    pageOrderPending: 1,
    orderApproved: [],
    pageOrderApproved: 1
  }),
  getters: {
    
  },
  actions: {
    async getOrderPending() {
        const data = await axios.get(`http://localhost:8081/api/order/status/pending?page=${this.pageOrderPending}`);
        this.orderPending = data.data;
    },

    async getOrderApproved() {
        const data = await axios.get(`http://localhost:8081/api/order/status/approved?page=${this.pageOrderApproved}`);
        this.orderApproved = data.data;
    },

    

}
})