import { defineStore } from 'pinia'
import axios from 'axios'
export const useFeedbackStore = defineStore('feedBack', {
  state: () => ({
    feedbacks: [],
    page: 1,
  }),
  getters: {
    
  },
  actions: {
    async getFeedBackApproved() {
        await axios.get(`http://localhost:8081/api/feedback/status/approved?page=${this.page}`)
        .then(data => {
            this.feedbacks = data.data;
        })

    },  

    incrementPage(){
        if(this.page < 2)
        this.page++;
        this.getFeedBackApproved();
        console.log(this.page)
    },

    decrementPage(){
        if(this.page > 1){
            this.page--;
        }
        this.getFeedBackApproved();
    }
},
})