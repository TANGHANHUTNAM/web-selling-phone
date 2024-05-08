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
        const data = await axios.get(`http://localhost:8081/api/order/pending?page=${this.pageOrderPending}`);
        this.orderPending = data.data;
    },

    async getOrderApproved() {
        const data = await axios.get(`http://localhost:8081/api/order/approved?page=${this.pageOrderApproved}`);
        this.orderApproved = data.data;
    },

    nextPageOrderPending() {
        this.pageOrderPending++;
        this.getOrderPending();
    },

    backPageOrderPending() {
        if(this.pageOrderPending > 1) {
            this.pageOrderPending--;
            this.getOrderPending();
        }
    },

    nextPageOrderApproved() {
        this.pageOrderApproved++;
        this.getOrderApproved();
    },  

    backPageOrderApproved() {
        if(this.pageOrderApproved > 1) {
            this.pageOrderApproved--;
            this.getOrderApproved();
        }
    },

    async updateOrderStatus(orderID) {
        await axios.put(`http://localhost:8081/api/order/update/${orderID}`, {
            status: 1
        })
        .then(()=> {
            alert("Duyệt đơn hàng thành công!");
            setTimeout(() => {
                location.reload();
            }, 1500)
        })
        ;
    }
}
})