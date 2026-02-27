import { ref } from 'vue'

const toastVisible = ref(false)
const toastMessage = ref('')
let timer = null

export function useToast() {
  const showToast = (msg, duration = 2000) => {
    // 清除上一个 timer，确保快速连续调用时能正确显示新消息
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    toastMessage.value = msg
    toastVisible.value = true
    if (duration > 0) {
      timer = setTimeout(() => {
        toastVisible.value = false
        timer = null
      }, duration)
    }
  }

  return {
    toastVisible,
    toastMessage,
    showToast,
  }
}
