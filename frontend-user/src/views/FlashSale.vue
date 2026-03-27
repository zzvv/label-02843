<script setup>
import { onMounted, computed, ref } from 'vue'
import { useProductStore } from '../store'
import { formatPrice } from '../utils'
import JdHeader from '../components/page/layout/JdHeader.vue'
import JdSearchBar from '../components/page/layout/JdSearchBar.vue'
import JdFooter from '../components/page/layout/JdFooter.vue'
import LoadingSpinner from '../components/common/LoadingSpinner.vue'
import ErrorMessage from '../components/common/ErrorMessage.vue'
import ProductModal from '../components/common/ProductModal.vue'

const productStore = useProductStore()

const flashList = computed(() => productStore.flashSaleList)

const modalVisible = ref(false)
const selectedProduct = ref(null)

const showDetail = (item) => {
  selectedProduct.value = item
  modalVisible.value = true
}

onMounted(() => {
  if (!productStore.hasData) {
    productStore.fetchHomeData()
  }
})
</script>

<template>
  <div class="jd-page">
    <JdHeader />
    <JdSearchBar />
    <main class="jd-main">
      <div class="jd-container">
        <div v-if="productStore.loading" class="loading-wrapper">
          <LoadingSpinner />
        </div>
        <div v-else-if="productStore.error" class="error-wrapper">
          <ErrorMessage :message="productStore.error" @retry="productStore.fetchHomeData" />
        </div>
        <section v-else class="flash-sale-page">
          <header class="page-header">
            <span class="tag">京东秒杀</span>
            <span class="sub">限时抢购 好物不等人</span>
          </header>
          <div class="flash-grid">
            <article
              v-for="item in flashList"
              :key="item.id"
              class="flash-card"
              @click="showDetail(item)"
            >
              <div class="img-wrap">
                <img v-lazy="item.img" :alt="item.title" />
              </div>
              <div class="info">
                <p class="title" :title="item.title">{{ item.title }}</p>
                <div class="price-row">
                  <span class="new-price">{{ formatPrice(item.price) }}</span>
                  <span class="old-price">{{ formatPrice(item.originPrice) }}</span>
                </div>
                <button class="btn-grab">立即抢购</button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
    <JdFooter />
    <ProductModal v-model:visible="modalVisible" :product="selectedProduct" />
  </div>
</template>

<style scoped>
.jd-page {
  min-height: 100vh;
  background-color: #f4f4f4;
  color: #333;
}

.jd-main {
  margin-top: 10px;
  padding: 20px 0;
}

.loading-wrapper,
.error-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.flash-sale-page {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}

.page-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e1251b;
}

.page-header .tag {
  font-size: 24px;
  color: #e1251b;
  font-weight: 700;
}

.page-header .sub {
  font-size: 14px;
  color: #999;
}

.flash-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.flash-card {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.flash-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.flash-card .img-wrap {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  padding: 16px;
}

.flash-card .img-wrap img {
  max-height: 100%;
  max-width: 100%;
}

.flash-card .info {
  padding: 12px 16px 16px;
}

.flash-card .title {
  font-size: 14px;
  height: 40px;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
}

.new-price {
  color: #e1251b;
  font-size: 20px;
  font-weight: 700;
}

.old-price {
  color: #999;
  font-size: 13px;
  text-decoration: line-through;
}

.btn-grab {
  width: 100%;
  height: 36px;
  background: #e1251b;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-grab:hover {
  background: #c81623;
}
</style>
