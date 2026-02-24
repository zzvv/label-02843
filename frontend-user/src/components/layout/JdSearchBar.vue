<script setup>
import { ref } from 'vue'

const keyword = ref('')

const hotWords = ['手机', '电脑', '耳机', '键盘', '空调', '零食大礼包']

const onSearch = () => {
  if (!keyword.value.trim()) {
    alert('请输入搜索关键词')
    return
  }
  alert(`搜索【${keyword.value}】功能正在开发中，敬请期待！`)
}

const onHotWordClick = (word) => {
  keyword.value = word
  alert(`搜索【${word}】功能正在开发中，敬请期待！`)
}

const onCartClick = () => {
  alert('【我的购物车】功能正在开发中，敬请期待！')
}
</script>

<template>
  <section class="search-wrap">
    <div class="jd-container search-inner">
      <div class="logo"></div>
      <div class="search-box">
        <div class="search-input">
          <input
            v-model="keyword"
            type="text"
            placeholder="京东商城首页仿真示例，输入关键字试试"
            @keyup.enter="onSearch"
          />
          <button class="btn-search" @click="onSearch">搜索</button>
        </div>
        <div class="hot-words">
          <a v-for="item in hotWords" :key="item" href="javascript:;" class="hot-word" @click="onHotWordClick(item)">
            {{ item }}
          </a>
        </div>
      </div>
      <div class="cart" @click="onCartClick">
        <span class="icon">🛒</span>
        <span class="text">我的购物车</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search-wrap {
  background-color: #fff;
}

.search-inner {
  display: flex;
  align-items: center;
  padding: 15px 0 10px;
  gap: 30px;
}

.logo {
  width: 120px;
  height: 50px;
  background: #e1251b;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
}

.logo::after {
  content: 'JD';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 4px;
}

.search-box {
  flex: 1;
}

.search-input {
  display: flex;
  border: 2px solid #e1251b;
  border-radius: 2px;
  overflow: hidden;
}

.search-input input {
  flex: 1;
  border: none;
  padding: 0 12px;
  height: 36px;
  outline: none;
  font-size: 14px;
}

.btn-search {
  width: 80px;
  background: #e1251b;
  color: #fff;
  font-size: 16px;
  transition: background 0.2s;
}

.btn-search:hover {
  background: #c81623;
}

.hot-words {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}

.hot-word + .hot-word {
  margin-left: 8px;
}

.hot-word:hover {
  color: #e1251b;
}

.cart {
  width: 140px;
  height: 36px;
  border-radius: 18px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #e1251b;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  flex-shrink: 0;
}

.cart .icon {
  margin-right: 6px;
}
</style>

