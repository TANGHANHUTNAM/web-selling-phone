<template>
  <div>
    <nav
      class="navbar navbar-expand-lg py-1 nav-bar-bg"
      id="navbar-top"
      data-navbar-soft-on-scroll="data-navbar-soft-on-scroll"
    >
      <div class="container">
        <router-link :to="{name: 'Home'}" class="navbar-brand me-lg-auto cursor-pointer nav-logo">
          <img
            class="w-100 w-md-100 img-fluid logo-img"
            src="../assets/images/logo.png"
            alt="logo"
          />
          <p class="name-storephone">SmartPhoneVN</p>
        </router-link>
        <button
          class="navbar-toggler border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <i class="bi bi-list list-icon"></i>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          data-navbar-collapse="data-navbar-collapse"
        >
          <div
            class="container d-lg-flex justify-content-lg-around align-items-center pe-lg-0 w-lg-100"
          >
            <form
              class="form-inline position-relative ms-lg-4 ms-xl-9 mt-3 mt-lg-0"
              onsubmit="return false;"
            >
              <input
                class="search fs-8 form-control form-input-search"
                type="search"
                name="search"
                placeholder="Tìm..."
              />
              <div class="search-icon">
                <span class="uil uil-search"></span>
              </div>
            </form>
            <ul
              class="navbar-nav mt-0 ms-lg-0 ms-xl-8 ms-2xl-9 gap-lg-x1 d-flex align-items-center justify-content-center w-100"
              data-navbar-nav="data-navbar-nav"
            >
              <li class="nav-item mx-4">
                <router-link :to="{name: 'Home'}" class="nav-link nav-bar-item px-0" title="home"
                  >Trang chủ</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'Feedback'}" class="nav-link nav-bar-item px-0" title="home"
                  >Góp ý</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'AllProducts'}" class="nav-link nav-bar-item px-0" title="home"
                  >Sản phẩm</router-link
                >
              </li>
              
            </ul>
          </div>
        </div>
        <router-link :to="{name: 'Cart'}" class="nav-cart me-3">
          <div><i class="bi bi-cart"></i></div>
          <div class="nav-cart-count">{{ 0 }}</div>
        </router-link>
        <router-link :to="{name: 'LoginSignUp'}" class="nav-user d-flex flex-column justify-content-center align-items-center mx-3"> 
          <div class="nav-user-icon"><i class="bi bi-person-circle"></i></div>
          <div v-if="true" class="nav-user-name">Nhut Nam</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>



<style scoped>
.nav-user {
  text-decoration: none;
  color: var(--primary-blue);
}

.nav-user:hover {
  color: var(--primary-red);
}
 
.nav-user:focus {
  color: var(--primary-red);

}

.list-icon {
    color: var(--primary-blue);
    font-size: 30px;
}

.nav-bar-item:focus {
    color: var(--primary-red);
}

.nav-bar-item:hover {
    color: var(--primary-red);
}
.name-storephone {
    color: var(--primary-blue);
    font-size: 0.5rem;
}
.form-input-search {
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid var(--primary-blue);
    font-size: 0.9rem;
    color: var(--primary-black);

}
.nav-user {
    cursor: pointer;
}
.nav-bar-item {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-blue);
}

.nav-user-icon {
    font-size: 40px;
}

.nav-user-name {
    font-size: 15px;
    font-weight: 500;
}

.nav-bar-bg {
    background: var(--primary-white);
}

.nav-cart{
    display: flex;
    align-items: center;
    color: var(--primary-blue);
    text-decoration: none;
    cursor: pointer;
}

.nav-cart:hover {
  color: var(--primary-red);
}

.nav-cart:focus {
  color: var(--primary-red);
} 

.nav-cart i{
    font-size: 45px;
}

.nav-cart-count {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -35px;
    margin-left: -10px;
    border-radius: 11px;
    font-size: 12px;
    background: var(--primary-red);
    color: var(--primary-white);
    cursor: pointer;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-logo img {
    width: 80px;
    height: 80px;
}

.nav-logo p {
    font-size: 24px;
    margin: 0 15px 0 0;

}
</style>
