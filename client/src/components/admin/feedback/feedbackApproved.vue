<template>
  <div class="container mt-5">
    <h2 class="text-center mb-5 text-success">DANH SÁCH ĐÓNG GÓP ĐÃ DUYỆT</h2>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID</th>
            <th>Người đóng góp</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody v-for="(feedback, index) in useAdminFeedback.feedbackApproved" :key="feedback._id">
          <tr>
            <td>{{ index+1 }}</td>
            <td>{{ feedback._id }}</td>
            <td>{{ feedback.userID.fullName }}</td>
            <td>{{ feedback.userID.email }}</td>
            <td>{{ feedback.userID.phoneNumber }}</td>
            <td>{{ feedback.subject }}</td>
            <td>{{ feedback.content }}</td>
            <td>{{ $formatDate(feedback.createdAt)}}</td>
          </tr>
        </tbody>
      </table>
      <div class="container d-flex justify-content-end mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                @click.prevent="useAdminFeedback.backPageApproved()"
                >Trở lại</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                @click.prevent="useAdminFeedback.nextPageApproved()"
                >Tiếp theo</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAdminFeedbackStore } from "../stores/adminFeedback";
const useAdminFeedback = useAdminFeedbackStore();
onMounted(() => {
  useAdminFeedback.getFeedbackApproved();
});
console.log(useAdminFeedback.feedbackApproved);
</script>
