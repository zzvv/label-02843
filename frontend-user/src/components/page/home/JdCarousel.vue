<script setup>
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue'
import { useProductStore } from '../../store'

const productStore = useProductStore()
const currentIndex = ref(0)
const timer = ref(null)

const carouselList = computed(() => productStore.recommendList || [])

const startAutoPlay = () => {
  stopAutoPlay()
  if (carouselList.value.length <= 1) return
  timer.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselList.value.length
  }, 4000)
}

const stopAutoPlay = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  if (carouselList.value.length > 0) {
    startAutoPlay()
  }
})

onBeforeUnmount(() => {
  stopAutoPlay()
})

watch(
  () => carouselList.value.length,
  (newLength) => {
    if (newLength > 0) {
      currentIndex.value = 0
      startAutoPlay()
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="jd-carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div v-if="carouselList.length > 0" class="slides-wrapper">
      <div
        v-for="(item, index) in carouselList"
        :key="item.id"
        class="slide"
        :class="{ active: index === currentIndex }"
      >
        <img v-lazy="item.banner" :alt="item.title" />
      </div>
    </div>
    <div v-else class="empty-placeholder">
      <p>加载中...</p>
    </div>
    <ul class="dots" v-if="carouselList.length > 1">
      <li
        v-for="(item, index) in carouselList"
        :key="item.id"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></li>
    </ul>
  </div>
</template>

<style scoped>
.jd-carousel {
  position: relative;
  width: 100%;
  height: 470px;
  overflow: hidden;
  border-radius: 4px;
  background: #f5f5f5;
}

.slides-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  z-index: 1;
}

.slide.active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.empty-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.dots {
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dots li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dots li:hover {
  background: rgba(255, 255, 255, 0.8);
}

.dots li.active {
  background: #e1251b;
  width: 20px;
  border-radius: 5px;
}
</style>
