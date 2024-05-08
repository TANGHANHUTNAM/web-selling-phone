<template>
    <div class="container mt-5">
    <h2 class="text-center mb-5 text-danger">DANH SÁCH ĐƠN HÀNG ĐANG ĐỢI XỬ LÝ</h2>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Order ID</th>
            <th>Người đặt</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ghi chú</th>
            <th>Số lượng</th>
            <th>Tổng</th>
            <th>Giảm giá</th>
            <th>Tổng giá sau cùng</th>
            <th>Thời gian đặt</th>
            <th>Trạng thái</th>
            <th>Xử lý</th>
          </tr>
        </thead>
        <tbody v-for="(order, index) in useAdminOrder.orderPending" :key="order._id">
          <tr>
            <td>{{ index+1 }}</td>
            <td>{{ order._id }}</td>
            <td>{{ order.userID.fullName }}</td>
            <td>{{ order.userID.email }}</td>
            <td>{{ order.userID.phoneNumber }}</td>
            <td>{{ order.note }}</td>
            <td>{{ order.total_quantity }}</td>
            <td>{{ formatPrice(order.total_price) }}đ</td>
            <td>{{ order.total_discount }}%</td>
            <td>{{ formatPrice(order.price_after_discount)}}đ</td>
            <td>{{ $formatDate(order.order_date)}}</td>
            <td v-if="order.order_status===0" class="text-danger">Đang chờ xử lý</td>
            <td><div class="btn btn-primary" @click="useAdminOrder.updateOrderStatus(order._id)">Duyệt</div></td>
          </tr>
        </tbody>
      </table>
      <div class="container d-flex justify-content-end mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                @click.prevent="useAdminOrder.backPageOrderPending()"
                >Trở lại</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                @click.prevent="useAdminOrder.nextPageOrderPending()"
                >Tiếp theo</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAdminOrderStore } from "../stores/adminOrder";
const useAdminOrder = useAdminOrderStore();
onMounted(() => {
  useAdminOrder.getOrderPending();
});

function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
</script>