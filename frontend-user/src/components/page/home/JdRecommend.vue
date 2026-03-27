<script setup>
import { computed, ref } from 'vue'
import { useProductStore } from '../../store'
import { formatPrice } from '../../utils'
import ProductModal from '../common/ProductModal.vue'

const productStore = useProductStore()

const recommendList = computed(() => productStore.recommendList)

const modalVisible = ref(false)
const selectedProduct = ref(null)

const showDetail = (item) => {
  selectedProduct.value = item
  modalVisible.value = true
}
</script>

<template>
  <section class="recommend">
    <header class="recommend-header">
      <h3>为你推荐</h3>
    </header>
    <div class="recommend-grid">
      <article v-for="item in recommendList" :key="item.id" class="recommend-item" @click="showDetail(item)">
        <div class="thumb">
          <img v-lazy="item.img" :alt="item.title" />
        </div>
        <p class="title" :title="item.title">{{ item.title }}</p>
        <p class="price">{{ formatPrice(item.price) }}</p>
      </article>
    </div>
  </section>
  <ProductModal v-model:visible="modalVisible" :product="selectedProduct" />
</template>

<style scoped>
.recommend {
  margin-top: 0;
}

.recommend-header {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
}

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.recommend-item {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.recommend-item:nth-child(1) {
  animation-delay: 0.1s;
}

.recommend-item:nth-child(2) {
  animation-delay: 0.2s;
}

.recommend-item:nth-child(3) {
  animation-delay: 0.3s;
}

.recommend-item:nth-child(4) {
  animation-delay: 0.4s;
}

.recommend-item:nth-child(5) {
  animation-delay: 0.5s;
}

.recommend-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.thumb {
  padding: 10px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 12px;
  padding: 0 10px;
  height: 32px;
  overflow: hidden;
}

.price {
  padding: 4px 10px 0;
  color: #e1251b;
  font-weight: 700;
}
</style>

