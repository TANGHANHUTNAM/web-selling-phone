<template>
    <div class="container mt-5">
        <h1 class="text-center my-5">QUẢN LÝ ĐƠN HÀNG</h1>
        <div class="row">
            <div class="d-flex text-center justify-content-center align-items-center">
                <router-link class="flex-grow-1" :to="{name: 'admin-order-approved'}">
                    <div class="btn btn-primary button-click">DANH SÁCH ĐƠN HÀNG ĐÃ DUYỆT</div>
                </router-link>
                <router-link class="flex-grow-1" :to="{name: 'admin-order-pending'}">
                    <div class="btn btn-primary button-click">DANH SÁCH ĐƠN HÀNG CHƯA DUYỆT</div>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>