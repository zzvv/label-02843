// 项目常量配置
export const THEME_COLORS = {
  primary: '#e1251b',
  primaryHover: '#c81623',
  text: '#333',
  textSecondary: '#999',
  border: '#f0f0f0',
  background: '#f4f4f4',
  white: '#fff',
}

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
  largeDesktop: 1920,
}

export const LAYOUT = {
  containerWidth: {
    default: 1190,
    medium: 1000,
    small: 100,
  },
  headerHeight: 30,
  searchBarHeight: 120,
}

export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
}

export const API = {
  timeout: 5000,
  baseURL: '/',
}
