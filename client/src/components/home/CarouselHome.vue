<template>
  <section class="pt-3 home-carouse">
    <div class="container">
      <div class="row gx-3">
        <main class="col-lg-9">
          <div class="container my-1">
            <div id="carouselExampleIndicators" class="carousel slide h-75">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img
                    src="../../assets/images/carousel/3.jpg"
                    class="d-block w-100 rounded-4"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../../assets/images/carousel/2.jpg"
                    class="d-block w-100 rounded-4"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../../assets/images/carousel/1.jpg"
                    class="d-block w-100 rounded-4"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </main>
        <aside class="col-lg-3">
          <div
            class="card-banner h-100 rounded-4 w-100 banner-item"
           
          >
            <!-- <div class="card-body text-center pb-5">
              <h5 class="pt-5 text-white">Amazing Gifts</h5>
              <p class="text-white">
                No matter how far along you are in your sophistication
              </p>
              <a href="#" class="btn btn-outline-light"> View more </a>
            </div> -->
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped> 
.banner-item{
  background-image: url(../../assets/images/carousel/5.jpg);
  background-size: cover;
  background-position: center;
}
</style>
