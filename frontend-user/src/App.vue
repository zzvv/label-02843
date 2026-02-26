<script setup>
import JdToast from './components/common/JdToast.vue'
import { useToast } from './composables/useToast'

const { toastVisible, toastMessage } = useToast()
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <JdToast v-model:visible="toastVisible" :message="toastMessage" />
</template>

<style>
#app {
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
