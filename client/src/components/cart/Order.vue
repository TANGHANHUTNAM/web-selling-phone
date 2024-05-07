<template>
    <div class="container" v-if="props.orders.length > 0">
        <h2 class="mt-4 mb-0">Đơn hàng</h2>
        <table class="table table-striped my-5 table-view-order">
            <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">ID</th>
                <th scope="col">Ghi chú</th>
                <th scope="col">Ngày đặt</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in props.orders" :key="order._id">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ order._id }}</td>
                <td>{{ order.note }}</td>
                <td>{{ $formatDate(order.order_date)}}</td>
                <td v-if="order.order_status == 0" class="text-danger">Chưa duyệt</td>
                <td v-else class="text-success">Đã duyệt</td>
                <td>{{ order.total_quantity }}</td>
                <td>{{ formatPrice(order.price_after_discount)}}đ</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {  defineProps } from 'vue';
// import { useOrderStore } from '../stores/Order';
const props = defineProps({
    orders: [
        Array, Object]
});
function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
</script>

<style scoped>
.table-view-order {
    font-size: clamp(0.7rem, 2vw, 1.3rem);
}
</style>
