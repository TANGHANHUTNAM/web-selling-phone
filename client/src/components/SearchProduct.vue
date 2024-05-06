<template>
    <div>  
    <OrderList v-model="products" listStyle="height:auto" dataKey="_id">
    <template #item="slotProps">
        <router-link class="product-item d-flex p-2 align-items-center justify-content-around gap-3" :to="{name: 'ProductsDetails', params:{ id: slotProps.item._id } }">
            <img class="w-4 border-round img-product" :src="'http://localhost:8081'+slotProps.item.thumbnail" :alt="slotProps.item.title" />
            <div class="d-flex flex-column gap-2 flex-grow-1">
                <span class="">{{ slotProps.item.title }}</span>
                <div class="d-flex align-items-center flex-grow-1">
                    <i class="pi pi-tag text-sm"></i>
                    <span class="des-product">{{ slotProps.item.des }}</span>   
                </div>
            </div>
            <span class="price_product">{{ formatPrice(slotProps.item.new_price) }}đ</span>
        </router-link>
    </template>
</OrderList>
</div>
</template>

<script setup>
import {computed} from "vue";
import {defineProps} from "vue";
import OrderList from 'primevue/orderlist';
const props = defineProps({
    product: {
        type: Array,
        required: true,
        default: () => []
    }
});
const products = computed(() => {
    return props.product.filter(product => product);
});

function formatPrice(value) {
if (!value) {
    return '';
}
return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


</script>

<style scoped>
.product-item {
    text-decoration: none;
    color: var(--primary-black);

}
.des-product{
    font-size: 0.8rem;
    font-weight: 600;
}
.img-product{
    width: 100px;
    height: 100px;

}
.price_product {
    color: var(--primary-red);
}
</style>
