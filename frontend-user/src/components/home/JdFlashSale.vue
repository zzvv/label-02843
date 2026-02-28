<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../../store'
import { formatPrice } from '../../utils'
import ProductModal from '../common/ProductModal.vue'

const router = useRouter()
const productStore = useProductStore()

const flashList = computed(() => productStore.flashSaleList)

const modalVisible = ref(false)
const selectedProduct = ref(null)

const goFlashSale = () => {
  router.push('/flash-sale')
}

const showDetail = (item) => {
  selectedProduct.value = item
  modalVisible.value = true
}
</script>

<template>
  <section class="flash-sale">
    <header class="flash-header">
      <div class="title">
        <span class="tag">京东秒杀</span>
        <span class="sub">限时抢购 好物不等人</span>
      </div>
      <a class="more" href="javascript:;" @click="goFlashSale">更多秒杀 &gt;</a>
    </header>
    <div class="flash-list">
      <article v-for="item in flashList" :key="item.id" class="flash-item" @click="showDetail(item)">
        <div class="img-wrap">
          <img v-lazy="item.img" :alt="item.title" />
        </div>
        <p class="title" :title="item.title">{{ item.title }}</p>
        <div class="price">
          <span class="new">{{ formatPrice(item.price) }}</span>
          <span class="old">{{ formatPrice(item.originPrice) }}</span>
        </div>
      </article>
    </div>
  </section>
  <ProductModal v-model:visible="modalVisible" :product="selectedProduct" />
</template>

<style scoped>
.flash-sale {
  margin-top: 0;
}

.flash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  display: flex;
  align-items: baseline;
}

.tag {
  font-size: 18px;
  color: #e1251b;
  font-weight: 700;
  margin-right: 8px;
}

.sub {
  font-size: 12px;
  color: #999;
}

.more {
  font-size: 12px;
  color: #999;
}

.more:hover {
  color: #e1251b;
}

.flash-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.flash-item {
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.flash-item:nth-child(1) {
  animation-delay: 0.1s;
}

.flash-item:nth-child(2) {
  animation-delay: 0.2s;
}

.flash-item:nth-child(3) {
  animation-delay: 0.3s;
}

.flash-item:nth-child(4) {
  animation-delay: 0.4s;
}

.flash-item:nth-child(5) {
  animation-delay: 0.5s;
}

.flash-item:hover {
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

.img-wrap {
  height: 140px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 12px;
  padding: 6px 8px 0;
  height: 36px;
  overflow: hidden;
}

.price {
  padding: 6px 8px 10px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.new {
  color: #e1251b;
  font-size: 16px;
  font-weight: 700;
}

.old {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
}
</style>

