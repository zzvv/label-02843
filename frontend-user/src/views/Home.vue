<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../store'
import JdHeader from '../components/layout/JdHeader.vue'
import JdSearchBar from '../components/layout/JdSearchBar.vue'
import JdMainLayout from '../components/layout/JdMainLayout.vue'
import JdFooter from '../components/layout/JdFooter.vue'
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
    <transition name="fade" mode="out-in">
      <div v-if="productStore.loading" key="loading" class="loading-wrapper">
        <LoadingSpinner />
      </div>
      <div v-else-if="productStore.error" key="error" class="error-wrapper">
        <ErrorMessage :message="productStore.error" @retry="productStore.fetchHomeData" />
      </div>
      <JdMainLayout v-else key="content" />
    </transition>
    <JdFooter />
  </div>
</template>

<style scoped>
.jd-page {
  min-height: 100vh;
  background-color: #f4f4f4;
  color: #333;
}

.loading-wrapper,
.error-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 40px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

