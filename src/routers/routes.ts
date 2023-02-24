import { HomeOutlined } from '@ant-design/icons'
import { MenuRoute } from './types'
import Home from '@/App'
/**
 * path 跳转的路径
 * component 对应路径显示的组件
 * exact 匹配规则，true的时候则精确匹配。
 */
const preDefinedRoutes: MenuRoute[] = [
  {
    path: '/',
    name: '首页',
    exact: true,
    key: 'home',
    component: Home,
  },
]

export default preDefinedRoutes
