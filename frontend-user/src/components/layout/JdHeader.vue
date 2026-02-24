<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navLinks = [
  { name: '首页', path: '/' },
  { name: '秒杀抢购', path: '/flash-sale' },
  { name: '品牌专区', path: '/brands' },
]

const go = (path) => {
  router.push(path)
}

const showTip = (name) => {
  alert(`【${name}】功能正在开发中，敬请期待！`)
}
</script>

<template>
  <header class="jd-header">
    <div class="jd-container header-inner">
      <div class="header-left">
        <span class="city">送至：北京</span>
      </div>
      <nav class="header-nav">
        <a
          v-for="item in navLinks"
          :key="item.path"
          href="javascript:void(0);"
          class="nav-item"
          :class="{ active: route.path === item.path || (item.path === '/' && route.path === '/') }"
          @click="go(item.path)"
        >
          {{ item.name }}
        </a>
      </nav>
      <div class="header-right">
        <a href="javascript:;" class="link" @click="showTip('我的订单')">我的订单</a>
        <a href="javascript:;" class="link" @click="showTip('我的京东')">我的京东</a>
        <a href="javascript:;" class="link" @click="showTip('京东会员')">京东会员</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.jd-header {
  background-color: #e3e4e5;
  font-size: 12px;
  color: #999;
}

.header-inner {
  display: flex;
  align-items: center;
  height: 30px;
}

.header-left .city {
  margin-right: 20px;
}

.header-nav {
  display: flex;
  flex: 1;
  gap: 10px;
}

.nav-item {
  padding: 0 6px;
  line-height: 30px;
  position: relative;
  transition: color 0.2s;
}

.nav-item:hover {
  color: #e1251b;
}

.nav-item.active {
  color: #e1251b;
  font-weight: 600;
}

.header-right {
  display: flex;
  gap: 12px;
}

.link:hover {
  color: #e1251b;
}
</style>

