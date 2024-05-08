<template>
    <div>
    <nav
      class="navbar navbar-expand-lg py-1 nav-bar-bg"
      id="navbar-top"
      data-navbar-soft-on-scroll="data-navbar-soft-on-scroll"
    >
      <div class="container">
        <router-link :to="{name: 'AdminLayout'}" class="navbar-brand me-lg-auto cursor-pointer nav-logo">
          <img
            class="w-100 w-md-100 img-fluid logo-img"
            src="../../assets/images/logo.png"
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
              
            >
              <input
                class="search fs-8 form-control form-input-search"
                type="search"
                name="search"
                placeholder="Tìm..."
            
              />
              <button class="search-icon ms-2" type="submit"><i class="bi bi-search"></i></button>
            </form>
            <ul
              class="navbar-nav mt-0 ms-lg-0 ms-xl-8 ms-2xl-9 gap-lg-x1 d-flex align-items-center justify-content-center w-100"
              data-navbar-nav="data-navbar-nav"
            >
              <li class="nav-item mx-4">
                <router-link :to="{name: 'admin-product'}" class="nav-link nav-bar-item px-0" title="Sản phẩm"
                  >Sản phẩm</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'admin-user'}" class="nav-link nav-bar-item px-0" title="Người dùng"
                  >Người dùng</router-link
                >
              </li>
              <li class="nav-item mx-4">
                <router-link :to="{name: 'admin-feedback'}" class="nav-link nav-bar-item px-0" title="Góp ý"
                  >Góp ý</router-link
                >
              </li>
              
            </ul>
          </div>
          <router-link :to="{name: 'admin-order'}" title="Đơn hàng" class="nav-cart d-flex justify-content-center align-items-center">
          <div>
            <i class="bi bi-list-ul"></i>
        </div>
        </router-link>
        <router-link :to="{name: 'admin-login'}" class="nav-user d-flex flex-column justify-content-center align-items-center"> 
          <div class="nav-user-icon"><i class="bi bi-person-vcard"></i></div>
          <div class="nav-user-name">Admin</div>
        </router-link>
        </div>
      </div>
    </nav>
    </div>
</template>


<style scoped>  

.form-input-search {
    max-width: 400px;
    padding: 10px 20px;
    border: 1px solid var(--primary-blue);
    font-size: 1rem;
    color: var(--primary-black);
    border-radius: 1rem;
}
.search-icon {
    font-size: 1.5rem;
    color: var(--primary-blue);
    border: none;
    background: var(--primary-white);
}
.search-icon:hover {
  color: var(--primary-red);
}
.nav-user-name {
  text-align: center;
}
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

.nav-user {
    cursor: pointer;
}
.nav-bar-item {
    font-size: clamp(0.9rem, 1.3vw, 1.4rem);
    font-weight: 500;
    color: var(--primary-blue);
}

.nav-user-icon {
    font-size: 40px;
}

.nav-user-name {
    font-size: clamp(0.5rem, 0.8vw, 0.7em);
    font-weight: 500;
    min-width: 100px;
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