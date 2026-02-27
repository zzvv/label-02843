<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductStore } from '../../store'
import { useToast } from '../../composables/useToast'

const router = useRouter()
const route = useRoute()
const productStore = useProductStore()
const { showToast } = useToast()

const brandList = computed(() => productStore.brandList)
const isBrandsPage = computed(() => route.path === '/brands')

const goBrands = () => {
  router.push('/brands')
}

const onBrandClick = (item) => {
  showToast(`即将进入【${item.name}】，功能正在开发中，敬请期待`)
}
</script>

<template>
  <section class="brand-zone">
    <header class="brand-header">
      <h3>品牌旗舰店</h3>
      <a v-if="!isBrandsPage" href="javascript:;" class="more" @click="goBrands">全部品牌 &gt;</a>
    </header>
    <div class="brand-grid">
      <article v-for="item in brandList" :key="item.id" class="brand-item" @click="onBrandClick(item)">
        <div class="logo">
          <img v-lazy="item.logo" :alt="item.name" />
        </div>
        <p class="name">{{ item.name }}</p>
        <p class="desc">{{ item.desc }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.brand-zone {
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 12px;
}

.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.brand-header h3 {
  font-size: 18px;
}

.more {
  font-size: 12px;
  color: #999;
}

.more:hover {
  color: #e1251b;
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.brand-item {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  text-align: center;
  padding: 10px 6px;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
  cursor: pointer;
}

.brand-item:hover {
  border-color: #e1251b;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
}

.logo {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.logo img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
}

.name {
  font-size: 13px;
  font-weight: 600;
}

.desc {
  font-size: 12px;
  color: #999;
}
</style>

