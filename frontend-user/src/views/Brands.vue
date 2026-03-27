<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../store'
import JdHeader from '../components/page/layout/JdHeader.vue'
import JdSearchBar from '../components/page/layout/JdSearchBar.vue'
import JdBrandZone from '../components/page/home/JdBrandZone.vue'
import JdFooter from '../components/page/layout/JdFooter.vue'
import LoadingSpinner from '../components/common/LoadingSpinner.vue'
import ErrorMessage from '../components/common/ErrorMessage.vue'

const productStore = useProductStore()

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
        <div v-else>
          <JdBrandZone />
        </div>
      </div>
    </main>
    <JdFooter />
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
</style>
