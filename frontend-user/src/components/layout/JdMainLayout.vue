<script setup>
import JdCategoryNav from '../home/JdCategoryNav.vue'
import JdCarousel from '../home/JdCarousel.vue'
import JdFlashSale from '../home/JdFlashSale.vue'
import JdRecommend from '../home/JdRecommend.vue'
import JdBrandZone from '../home/JdBrandZone.vue'
</script>

<template>
  <main class="jd-main">
    <div class="jd-container main-top">
      <JdCategoryNav />
      <JdCarousel />
      <section class="right-side">
        <div class="user-card">
          <div class="avatar">Hi~</div>
          <div class="info">
            <p class="hello">欢迎来到京东仿真首页</p>
            <p class="tips">登录后可以查看专属优惠</p>
          </div>
          <div class="btns">
            <button class="btn primary">登录</button>
            <button class="btn">注册</button>
          </div>
        </div>
        <div class="notice">
          <div class="notice-header">
            <span>公告</span>
            <a href="javascript:;">更多 &gt;</a>
          </div>
          <ul class="notice-list">
            <li>京东双十一大促，限时秒杀天天有</li>
            <li>本页面为前端练习示例，不涉及真实交易</li>
            <li>支持响应式布局，推荐在 PC 端查看效果</li>
          </ul>
        </div>
      </section>
    </div>

    <div class="jd-container main-bottom">
      <JdFlashSale />
      <JdRecommend />
      <JdBrandZone />
    </div>
  </main>
</template>

<style scoped>
.jd-main {
  margin-top: 10px;
}

.main-top {
  display: grid;
  grid-template-columns: 190px 590px 190px;
  gap: 10px;
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-card {
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: auto auto;
  column-gap: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop')
      no-repeat center/cover,
    #f5f5f5;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.info .hello {
  font-size: 13px;
  margin-bottom: 4px;
}

.info .tips {
  font-size: 12px;
  color: #999;
}

.btns {
  margin-top: 8px;
  grid-column: 1 / span 2;
}

.btn {
  min-width: 60px;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid #e1251b;
  font-size: 12px;
  margin-right: 8px;
}

.btn.primary {
  background: #e1251b;
  color: #fff;
}

.btn:not(.primary) {
  color: #e1251b;
}

.btn:hover {
  opacity: 0.9;
}

.notice {
  background: #fff;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 12px;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.notice-header a {
  color: #999;
}

.notice-header a:hover {
  color: #e1251b;
}

.notice-list li + li {
  margin-top: 4px;
}

.main-bottom {
  margin-top: 10px;
}

/* 大桌面端 (≥1920px) */
@media (min-width: 1920px) {
  .main-top {
    grid-template-columns: 200px 650px 200px;
  }
}

/* 中等桌面端 (1024px - 1439px) */
@media (min-width: 1024px) and (max-width: 1439px) {
  .main-top {
    grid-template-columns: 180px 540px 180px;
  }

  .jd-main {
    font-size: 12px;
  }
}

/* 平板端 (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .main-top {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .right-side {
    order: -1;
  }
}

/* 移动端 (<768px) */
@media (max-width: 767px) {
  .main-top {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .right-side {
    order: -1;
  }

  .user-card {
    grid-template-columns: 40px 1fr;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }
}
</style>

