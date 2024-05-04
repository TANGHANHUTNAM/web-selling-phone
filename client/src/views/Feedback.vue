<template>
  <div>
    <div>
    <section id="feedback">
      <div class="container">
        <div class="row py-4 w-75 mx-auto">
              <h1 class="text-center text-feedback">GÓP Ý</h1>
              <p class="text-center text-feedback mb-3">Chúng tôi luôn mong muốn nhận được sự góp ý từ phía khách hàng để cải thiện chất lượng dịch vụ của mình</p>
              <hr>
              <form class="d-flex flex-column gap-3 mt-4 mb-4">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="mb-2 text-black fw-bold">TIÊU ĐỀ</label>
                <input type="email" class="form-control border-none" id="exampleFormControlInput1" placeholder="Dịch vụ,...">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="mb-2 text-black fw-bold">NỘI DUNG</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nội dung..."></textarea>
              </div> 
              <div class="btn btn-primary mb-3">Gửi ý kiến</div>
            </form>
            <hr>
            <h6 class="text-center text-feedback">Cảm ơn bạn đã đóng góp ý kiến cho cửa hàng của chúng tôi!</h6>
          </div>
      </div>
    </section>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Feedback",
  components: {
  }
};
</script>

<style scoped>
#feedback {
  color: white;
  background-color: white;
  min-height: 80vh;
}

.text-feedback {
  color: black
}
</style>