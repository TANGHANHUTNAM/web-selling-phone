<template>
  <div>
    <div>
      <section id="feedback">
        <div class="container">
          <div class="row py-4 w-75 mx-auto">
            <h1 class="text-center text-feedback">GÓP Ý</h1>
            <p class="text-center text-feedback mb-3">
              Chúng tôi luôn mong muốn nhận được sự góp ý từ phía khách hàng để
              cải thiện chất lượng dịch vụ của mình
            </p>
            <hr />
            <form
              @submit.prevent="formSubmit"
              class="d-flex flex-column gap-3 mt-4 mb-4"
            >
              <div class="form-group">
                <label
                  for="exampleFormControlInput1"
                  class="mb-2 text-black fw-bold"
                  >TIÊU ĐỀ</label
                >
                <input
                 
                  v-model="feedback.subject"
                  type="text"
                  class="form-control border-none"
                   @blur="validate()"
                  :class="{ 'is-invalid': error.subject }"
                  id="exampleFormControlInput1"
                  placeholder="Dịch vụ,..."
                />
                <small class="invalid-feedback">{{ error.subject }}</small>
              </div>
             
              <div class="form-group">
                <label
                  for="exampleFormControlTextarea1"
                  class="mb-2 text-black fw-bold"
                  >NỘI DUNG</label
                >
                <textarea
                  v-model="feedback.content"
                  @blur="validate()"
                  :class="{ 'is-invalid': error.content }"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Nội dung..."
                ></textarea>
                 <small class="invalid-feedback">{{ error.content }}</small>
              </div>
             
              <button type="submit" class="mb-3 btn-submit">Gửi ý kiến</button>
            </form>
            <hr />
            <h6 class="text-center text-feedback">
              Cảm ơn bạn đã đóng góp ý kiến cho cửa hàng của chúng tôi!
            </h6>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import {useUserStore} from '../components/stores/User.js'
const feedback = reactive({
  subject: "",
  content: "",
});
const error = reactive({
  subject: "",
  content: "",
});
function validate() {
  let valid = true;
  error.subject = "";
  error.content = "";
  if (!feedback.subject) {
    error.subject = "Nhập tiêu đề!";
    valid = false;
  }

  if (!feedback.content) {
    error.content = "Nhập nội dung!";
    valid = false;
  }
  return valid;
}

const userStore = useUserStore()
function formSubmit() {
  if (validate()) {
    userStore.feedback = feedback;
    userStore.feedbackUser();
  } else {
    alert("Vui lòng điền thông tin đầy đủ!");
  }
}

</script>

<style scoped>
.btn-submit {
  background-color: var(--primary-blue);
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  height: 40px;
}

.btn-submit:hover {
  background-color: var(--primary-red);
}

#feedback {
  color: white;
  background-color: white;
  min-height: 80vh;
}

.text-feedback {
  color: black;
}
</style>
