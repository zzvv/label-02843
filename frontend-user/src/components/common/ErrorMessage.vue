<script setup>
defineProps({
  message: {
    type: String,
    default: '加载失败，请稍后重试',
  },
})

const emit = defineEmits(['retry'])
</script>

<template>
  <div class="error-message">
    <div class="icon">⚠️</div>
    <p class="text">{{ message }}</p>
    <button class="retry-btn" @click="emit('retry')">重试</button>
  </div>
</template>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;
}

.icon {
  font-size: 48px;
}

.text {
  color: #999;
  font-size: 14px;
  text-align: center;
}

.retry-btn {
  padding: 8px 24px;
  background: #e1251b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.retry-btn:hover {
  background: #c81623;
}
</style>
