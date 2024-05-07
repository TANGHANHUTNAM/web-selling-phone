import { defineStore } from 'pinia'
import axios from 'axios'
import {watch} from 'vue'
export const useCartStore = defineStore('cart', {
  state: () => ({
    search: '',
    userID: localStorage.getItem('userID'),
    paymentID: '6638ed57f861174e07252344',
    data: [],
    ItemCarts: [],
    countCart: 0,
    total: 0,
    note: 'Đơn hàng đã được thanh toán!',
    latestOrder: [],
    orderDetails: [],
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
    async order(){
      await axios.post(`http://localhost:8081/api/order/user/${this.userID}/${this.paymentID}`, {
        note: this.note,
        total_price: Number(this.TotalPrice),
        total_quantity: this.NumberItemCart,
        total_discount: 0,
        price_after_discount: Number(this.TotalPrice),
      }).catch((error) => {
        console.log(error);
      })
    },
    async removeAllItemFromCart(){
      await axios.delete(`http://localhost:8081/api/cartitem/user/${this.userID}`)
      .then(() => {
        this.getItemCart();
        this.orderDetails = [];
        this.latestOrder = [];
      })
    },

    async getLatestOrder(){
      const data = await axios.get(`http://localhost:8081/api/order/user/${this.userID}`);
      this.latestOrder = data.data; 
    },
    
    async addOrderDetail(order){
      this.ItemCarts.forEach(async (item) => {
        await axios.post(`http://localhost:8081/api/order/${order._id}/orderdetail/`, {
          productID: item.productID,
          quantity: item.quantity,
          price: item.price,
        })
      })
    },
    watchUserID() {
      watch(
        () => this.userID,
        () => {
          this.getItemCart();
        }
      );
    },
    searchProduct(){
      this.getData();
    },

  },  
})