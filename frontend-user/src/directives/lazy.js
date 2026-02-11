const lazyDirective = {
  mounted(el, binding) {
    const imgSrc = binding.value
    if (!imgSrc) return

    const loadImage = () => {
      const img = new Image()
      img.src = imgSrc
      img.onload = () => {
        el.src = imgSrc
      }
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(el)
          }
        })
      })
      observer.observe(el)
    } else {
      // 不支持 IntersectionObserver 时直接加载
      loadImage()
    }
  },
}

export default lazyDirective

