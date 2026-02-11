<script setup>
import { computed } from 'vue'
import { useProductStore } from '../../store'

const productStore = useProductStore()

const categories = computed(() => productStore.categories)
</script>

<template>
  <aside class="category-nav">
    <ul>
      <li v-for="item in categories" :key="item.id" class="category-item">
        <span class="name">{{ item.name }}</span>
        <span class="sub" v-if="item.children?.length">
          <span v-for="sub in item.children" :key="sub" class="sub-item">{{ sub }}</span>
        </span>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.category-nav {
  width: 190px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px 0;
  box-sizing: border-box;
}

.category-item {
  padding: 0 12px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.15s;
}

.category-item:hover {
  background: #e1251b;
}

.name {
  flex-shrink: 0;
}

.sub {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0.8;
}

.sub-item + .sub-item::before {
  content: ' / ';
}
</style>

