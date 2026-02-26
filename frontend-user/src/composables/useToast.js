import { ref } from 'vue'

const toastVisible = ref(false)
const toastMessage = ref('')

export function useToast() {
  const showToast = (msg) => {
    toastMessage.value = msg
    toastVisible.value = true
  }

  return {
    toastVisible,
    toastMessage,
    showToast,
  }
}
