<template>
    <div>
        <NavBarAdmin/>
        <router-view ></router-view>
        <div class="admin-page h-100">
            <div class="background position-relative" v-if="$route.path === '/admin'">
                <h1 class="name-admin text-center position-absolute top-0 pt-5 ps-5">TRANG QUẢN TRỊ</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarAdmin from "../components/admin/NavBarAdmin.vue";
</script>

<style scoped> 
.admin-page {
    background-image: url(./background-admin.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.background {
    min-height: 85vh;
}
.name-admin {
    font-size: 3rem;
    font-weight: 700;
    color: red
}
</style>