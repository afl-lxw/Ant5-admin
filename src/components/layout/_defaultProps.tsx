import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';
import Discover from '@/pages/discover'
import Main from '@/pages'

export default {
  title: 'AF-Admin',
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  route: {
    path: '/',
    routes: [
      {
        path: '/main',
        name: '首页',
        icon: <SmileFilled />,
        component: <Discover />,

        routes: [
          {
            exact: true,
            path: '/discover',
            name: '发现页',
            icon: <CrownFilled />,
            component: <Discover />,
          }
        ]
      },
    ],
  },
  location: {
    pathname: '/',
  },
  bgLayoutImgList: [
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      left: 85,
      bottom: 100,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      bottom: -68,
      right: -45,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      bottom: 0,
      left: 0,
      width: '331px',
    },
  ]
};