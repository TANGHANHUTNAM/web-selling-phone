import { defineStore } from 'pinia'
import axios from 'axios'
export const useOrderStore = defineStore('order', {
  state: () => ({
    userID: localStorage.getItem('userID'),
    paymentID: '6638ed57f861174e07252344',
    data: [],
    ItemCarts: [],
    note: 'Đơn hàng đã được thanh toán!',
    allOrder: [],
    orderDetails: [],
    orderSuccess: false,
  }),
  getters: {
    
  },
  actions: {
    async getItemCart() {
      const dataCartUserID = await axios.get(`http://localhost:8081/api/cartitem/user/${this.userID}`);
        this.ItemCarts = dataCartUserID.data;
    },

    async getOrder(){
      const data = await axios.get(`http://localhost:8081/api/order/user/${this.userID}`);
      if(data.data.length > 0)
        this.allOrder = data.data; 
    },
    
    async addOrderDetail(order){
      this.ItemCarts.forEach(async (item) => {
        await axios.post(`http://localhost:8081/api/order/${order._id}/orderdetail/`, {
          productID: item.productID,
          quantity: item.quantity,
          price: item.price,
        })
      })
    }

  },  
})