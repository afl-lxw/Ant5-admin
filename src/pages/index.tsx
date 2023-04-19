import React, { FC } from "react"
import Layout from '@/components/layout/layout'
import { Button } from "antd";
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Sider, Footer } = Layout;
import { Outlet } from 'react-router-dom'
interface LayoutProps {
  children: React.ReactNode;
}


const Main: FC = () => {
  return (
    <Layout  >
      <Outlet></Outlet>
    </Layout>
  )
}

export default Main