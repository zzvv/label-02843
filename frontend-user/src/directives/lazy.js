const lazyDirective = {
  mounted(el, binding) {
    const imgSrc = binding.value
    if (!imgSrc) return

    // 设置占位背景
    el.style.background = '#f5f5f5'

    const loadImage = () => {
      el.src = imgSrc
      el.onload = () => {
        el.style.background = ''
      }
      el.onerror = () => {
        console.warn('Image load failed:', imgSrc)
        el.style.background = '#f0f0f0'
      }
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage()
              observer.unobserve(el)
            }
          })
        },
        { rootMargin: '50px' }
      )
      observer.observe(el)
    } else {
      loadImage()
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.src = binding.value
    }
  },
}

export default lazyDirective
