import { defineStore } from 'pinia'
import axios from 'axios'
export const useAdminFeedbackStore = defineStore('admin-feedback', {
  state: () => ({
    feedbackApproved: [],
    pageFeedbackApproved: 1,
    feedbackPending: [],
    pageFeedbackPending: 1
  }),
  getters: {
    
  },
  actions: {
    async getFeedbackApproved() {
        const data = await axios.get(`http://localhost:8081/api/feedback/status/approved?page=${this.pageFeedbackApproved}`);
        this.feedbackApproved = data.data;
    },

    async getFeedbackPending(){
        const data = await axios.get(`http://localhost:8081/api/feedback/status/pending?page=${this.pageFeedbackPending}`)
        this.feedbackPending = data.data
    },

    nextPageApproved(){
        this.pageFeedbackApproved += 1;
        this.getFeedbackApproved();
    },

    backPageApproved(){
      if(this.pageFeedbackApproved < 1){
          this.pageFeedbackApproved = 1;
          this.getFeedbackApproved();
          return;
      }
        this.pageFeedbackApproved -= 1;
        this.getFeedbackApproved();
    },

    nextPagePending(){
        this.pageFeedbackPending += 1;
        this.getFeedbackPending();
    },

    backPagePending(){
        if(this.pageFeedbackPending < 1){
            this.pageFeedbackPending = 1;
            this.getFeedbackPending();
            return;
        }
        this.pageFeedbackPending -= 1;
        this.getFeedbackPending();
    },

    async updateFeedback(feedbackID){
      await axios.put(`http://localhost:8081/api/feedback/${feedbackID}/status`,{
          approved: 1
      })
      .then(() =>{
          alert("Cập nhật thành công")
          setTimeout(window.location.reload(), 2000) 
      })
    }
}
})