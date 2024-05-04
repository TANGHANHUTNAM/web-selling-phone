<template>
    <div>
    <!-- category -->
        <div v-if="brand" class="col">
            <router-link :to="{name: 'ProductBrand', params: { brand: brand._id } }"><div class="btn w-100 brand-product">{{ brand.name }}</div></router-link>
        </div>
    <!-- category -->
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  brand: {
    type: [Array, Object],
    required: false, 
    default: () => ({}) 
  }
})

</script>

<style scoped>
.brand-product {
    background-color: var(--primary-blue);
    color: var(--primary-white);
    border: 2px solid var(--primary-blue);
    border-radius: 0.7rem;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    transition: all 0.3s;
    font-weight: 600;
}

.brand-product:hover {
    background-color: var(--primary-red);
    border: 2px solid var(--primary-red);
}

</style>