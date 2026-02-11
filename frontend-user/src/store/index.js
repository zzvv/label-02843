import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
import { API } from '../constants'

export const pinia = createPinia()

// Axios 封装：添加请求和响应拦截器
const request = axios.create({
  baseURL: API.baseURL,
  timeout: API.timeout,
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 等
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器 - 统一错误处理
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      // 服务器返回了错误状态码
      console.error('请求错误:', error.response.status, error.response.data)
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('网络错误:', error.message)
    } else {
      // 其他错误
      console.error('请求配置错误:', error.message)
    }
    return Promise.reject(error)
  }
)

// 商品相关 store
export const useProductStore = defineStore('product', {
  state: () => ({
    categories: [],
    flashSaleList: [],
    recommendList: [],
    brandList: [],
    loading: false,
    error: null,
  }),
  getters: {
    // 获取分类数量
    categoryCount: (state) => state.categories.length,
    // 获取秒杀商品数量
    flashSaleCount: (state) => state.flashSaleList.length,
    // 获取推荐商品数量
    recommendCount: (state) => state.recommendList.length,
    // 获取品牌数量
    brandCount: (state) => state.brandList.length,
    // 获取轮播图列表
    carouselList: (state) => state.recommendList.filter((item) => item.banner),
    // 检查数据是否已加载
    hasData: (state) =>
      state.categories.length > 0 ||
      state.flashSaleList.length > 0 ||
      state.recommendList.length > 0 ||
      state.brandList.length > 0,
  },
  actions: {
    async fetchHomeData() {
      if (this.loading) return
      this.loading = true
      this.error = null
      try {
        // 使用 Axios 模拟请求本地 mock 接口
        const { data } = await request.get('/mock/home-data.json', {
          params: { t: Date.now() }, // 防止缓存
        })
        this.categories = data.categories || []
        this.flashSaleList = data.flashSaleList || []
        this.recommendList = data.recommendList || []
        this.brandList = data.brandList || []
      } catch (e) {
        this.error = e.message || '加载首页数据失败，请稍后重试'
        console.error('加载首页数据失败', e)
        // 可以在这里添加错误上报逻辑
      } finally {
        this.loading = false
      }
    },
    // 清除错误
    clearError() {
      this.error = null
    },
  },
})


