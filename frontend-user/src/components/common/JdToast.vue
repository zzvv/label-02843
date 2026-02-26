<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: { type: String, default: '' },
  visible: { type: Boolean, default: false },
  duration: { type: Number, default: 2000 },
})

const emit = defineEmits(['update:visible'])

watch(
  () => props.visible,
  (val) => {
    if (val && props.duration > 0) {
      setTimeout(() => {
        emit('update:visible', false)
      }, props.duration)
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <transition name="toast-fade">
      <div v-if="visible" class="jd-toast-overlay">
        <div class="jd-toast" role="alert" aria-live="polite">
          <span class="jd-toast-icon">💡</span>
          <span class="jd-toast-msg">{{ message }}</span>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.jd-toast-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 120px;
  pointer-events: none;
}

.jd-toast {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
}

.jd-toast-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.toast-fade-enter-active {
  transition: all 0.3s ease;
}

.toast-fade-leave-active {
  transition: all 0.25s ease;
}

.toast-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
