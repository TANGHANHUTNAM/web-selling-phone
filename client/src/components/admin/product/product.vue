<template>
    <div class="container mt-5">
        <h1 class="text-center my-5">QUẢN LÝ SẢN PHẨM</h1>
        <div class="row">
            <div class="d-flex text-center justify-content-center align-items-center">
                <router-link class="flex-grow-1 " :to="{name: 'admin-product-out-of-stock-product'}">
                    <button class="btn btn-primary button-click">Sản phẩm hết hàng</button>
                </router-link>
                <router-link class="flex-grow-1 " :to="{name: 'admin-product-add'}">
                    <button class="btn btn-primary button-click">Thêm sản phẩm</button>
                </router-link>
                <router-link class="flex-grow-1 " :to="{name: 'admin-product-edit'}">
                    <button class="btn btn-primary button-click">Cập nhật sản phẩm</button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.button-click:focus {
    outline: none;
    background-color: var(--primary-red);
    border: none;
}
</style>