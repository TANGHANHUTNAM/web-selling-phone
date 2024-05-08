<template>
  <div>
    <div class="container mb-5" v-if="feedbackStore.feedbacks.length > 0">
      <h2 class="">GÓP Ý</h2>
      <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
        <div
          v-for="feedback in feedbackStore.feedbacks"
          :key="feedback._id"
          class="col g-3"
        >
          <div
            class="card card-item p-2 w-100 h-100 rounded-4 d-flex flex-column card-feedback"
          >
            <div class="card-body">
              <h5 class="card-title text-danger font-weight-bold">{{ feedback.userID.fullName }}</h5>
              <h6 class="card-subtitle mb-2 text-success mt-2">
                {{ feedback.subject }}
              </h6>
              <p class="card-text">
                {{ feedback.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-end mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex">
          <li class="page-item">
            <div class="page-link"  @click.prevent="feedbackStore.decrementPage()">Trở lại</div>
          </li>
          <li class="page-item">
            <div class="page-link"  @click.prevent="feedbackStore.incrementPage()"
              >Tiếp theo</div
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFeedbackStore } from "../stores/FeedBack";
const feedbackStore = useFeedbackStore();
onMounted(() => {
  feedbackStore.getFeedBackApproved();
});
</script>

<style scoped>
.page-item{
  cursor: pointer;
  width: 100px;
  text-align: center;
}
.page-link{
    color: var(--primary-blue);
    border: 1px solid var(--primary-blue);
    transition: all 0.3s;
    font-weight: 500;
}

.page-link:hover{
    background-color: var(--primary-red);
    color: var(--primary-white);
    border: 1px solid var(--primary-red);
}
.card-feedback{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
