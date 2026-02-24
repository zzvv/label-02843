<template>
  <footer class="jd-footer">
    <div class="jd-container footer-inner">
      <div class="service">
        <div class="service-item" v-for="item in services" :key="item.title">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
      <div class="links">
        <div class="link-row">
          <a v-for="item in linkRow1" :key="item" href="javascript:;" @click="onLinkClick(item)">{{ item }}</a>
        </div>
        <div class="link-row">
          <a v-for="item in linkRow2" :key="item" href="javascript:;" @click="onLinkClick(item)">{{ item }}</a>
        </div>
        <p class="copyright">
          本页面为 Vue 技术栈仿京东首页教学示例，所有数据与图片均为示例数据，与京东官方无关。
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = [
  { title: '多', desc: '品类齐全，轻松购物' },
  { title: '快', desc: '多仓直发，极速配送' },
  { title: '好', desc: '正品行货，精致服务' },
  { title: '省', desc: '天天低价，畅选无忧' },
]

const linkRow1 = ['关于我们', '联系我们', '商家入驻', '营销中心', '友情链接', '销售联盟']
const linkRow2 = ['京东社区', '风险监测', '隐私政策', '京东公益', 'English Site']

const onLinkClick = (name) => {
  alert(`【${name}】功能正在开发中，敬请期待！`)
}
</script>

<style scoped>
.jd-footer {
  background: #f4f4f4;
  padding: 30px 0 40px;
  color: #666;
  font-size: 12px;
}

.service {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.service-item h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 4px;
}

.links {
  text-align: center;
}

.link-row {
  margin-bottom: 6px;
}

.link-row a {
  margin: 0 6px;
  color: #999;
}

.link-row a:hover {
  color: #e1251b;
}

.copyright {
  margin-top: 6px;
  color: #b0b0b0;
}
</style>

