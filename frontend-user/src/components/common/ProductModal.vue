<script setup>
import { formatPrice } from '../../utils'
import { useToast } from '../../composables/useToast'

const { showToast } = useToast()

const props = defineProps({
  visible: { type: Boolean, default: false },
  product: { type: Object, default: null },
})

const emit = defineEmits(['update:visible'])

const close = () => {
  emit('update:visible', false)
}

const onOverlayClick = (e) => {
  if (e.target === e.currentTarget) close()
}

const addToCart = () => {
  showToast(`已将【${props.product?.title}】加入购物车`)
}

const buyNow = () => {
  showToast(`【立即购买】功能正在开发中，敬请期待`)
}
</script>

<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div v-if="visible && product" class="modal-overlay" @click="onOverlayClick" role="dialog" aria-modal="true">
        <div class="modal-content">
          <button class="modal-close" @click="close" aria-label="关闭">&times;</button>
          <div class="modal-body">
            <div class="modal-img">
              <img :src="product.img || product.banner" :alt="product.title" />
            </div>
            <div class="modal-info">
              <h3 class="modal-title">{{ product.title }}</h3>
              <div class="modal-price">
                <span class="current">{{ formatPrice(product.price) }}</span>
                <span v-if="product.originPrice" class="origin">{{ formatPrice(product.originPrice) }}</span>
              </div>
              <ul class="modal-tags">
                <li>京东物流</li>
                <li>7天无理由退货</li>
                <li>正品保障</li>
              </ul>
              <div class="modal-desc">
                <p>商品编号：{{ product.id }}</p>
                <p>本页面为仿真示例，不涉及真实交易</p>
              </div>
              <div class="modal-actions">
                <button class="btn-cart" @click="addToCart">加入购物车</button>
                <button class="btn-buy" @click="buyNow">立即购买</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  width: 680px;
  max-width: 90vw;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 28px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  line-height: 1;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  display: flex;
  padding: 24px;
  gap: 24px;
}

.modal-img {
  width: 260px;
  height: 260px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 6px;
}

.modal-img img {
  max-width: 100%;
  max-height: 100%;
}

.modal-info {
  flex: 1;
  min-width: 0;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 12px;
  color: #333;
}

.modal-price {
  margin-bottom: 16px;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.current {
  font-size: 24px;
  font-weight: 700;
  color: #e1251b;
}

.origin {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.modal-tags {
  display: flex;
  gap: 8px;
  list-style: none;
  margin-bottom: 16px;
}

.modal-tags li {
  font-size: 12px;
  color: #e1251b;
  border: 1px solid #e1251b;
  border-radius: 3px;
  padding: 2px 8px;
}

.modal-desc {
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  line-height: 1.8;
}

.modal-actions {
  display: flex;
  gap: 12px;
}

.btn-cart,
.btn-buy {
  height: 40px;
  padding: 0 28px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-cart {
  background: #fff;
  color: #e1251b;
  border: 2px solid #e1251b;
}

.btn-buy {
  background: #e1251b;
  color: #fff;
  border: 2px solid #e1251b;
}

.btn-cart:hover,
.btn-buy:hover {
  opacity: 0.85;
}

.modal-fade-enter-active {
  transition: all 0.25s ease;
}

.modal-fade-leave-active {
  transition: all 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-content {
  transform: scale(0.95);
}

@media (max-width: 767px) {
  .modal-body {
    flex-direction: column;
    padding: 16px;
  }

  .modal-img {
    width: 100%;
    height: 200px;
  }
}
</style>
