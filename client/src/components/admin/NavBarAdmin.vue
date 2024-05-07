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
            class="container d-lg-flex justify-content-lg-around align-items-center pe-lg-0 w-lg-100 position-relative"
          >
            <form
              class="form-inline ms-lg-4 ms-xl-9 mt-3 mt-lg-0 d-flex justify-content-center align-items-center"
              onsubmit="return false;"
              @submit="cartStore.searchProduct"
            >
              <input
                class="search fs-8 form-control form-input-search"
                type="search"
                name="search"
                placeholder="Tìm..."
                v-model="cartStore.search"
            
              />
              <button class="search-icon ms-2" type="submit"><i class="bi bi-search"></i></button>
            </form>
            <ul
              class="navbar-nav mt-0 ms-lg-0 ms-xl-8 ms-2xl-9 gap-lg-x1 d-flex align-items-center justify-content-center w-100"
              data-navbar-nav="data-navbar-nav"
            >
              <li class="nav-item mx-4">
                <router-link :to="{name: 'Home'}" class="nav-link nav-bar-item px-0" title="Trang chủ"
                  >Trang chủ</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'Feedback'}" class="nav-link nav-bar-item px-0" title="Góp ý"
                  >Góp ý</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'AllProducts'}" class="nav-link nav-bar-item px-0" title="Sản phẩm"
                  >Sản phẩm</router-link
                >
              </li>
              
            </ul>
          </div>
          <router-link :to="{name: 'Cart'}" class="nav-cart d-flex justify-content-center align-items-center">
          <div><i class="bi bi-cart"></i></div>
          <div class="nav-cart-count">{{ cartStore.NumberItemCart }}</div>
        </router-link>
        <router-link :to="{name: 'LoginSignUp'}" class="nav-user d-flex flex-column justify-content-center align-items-center"> 
          <div class="nav-user-icon"><i class="bi bi-person-circle"></i></div>
          <div class="nav-user-name">{{ fullName }}</div>
        </router-link>
        <div @click="logOut" v-if="userID" class="d-flex justify-content-center">
          <div class="nav-log-out"><i class="bi bi-box-arrow-in-right"></i></div>
        </div>
        </div>
      </div>
    </nav>
    </div>
</template>