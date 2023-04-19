import React, { FC } from 'react'
import routes from '@/routers/router'
import { useRoutes, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useLocalStorageState } from 'ahooks';
import Layout from '@/components/layout/layout'

const App: FC = () => {
  const element = useRoutes(routes)
  const [token, setToken] = useLocalStorageState<string | undefined>('token')
  const LoginFlag = React.useState<string | undefined>(token)
  // console.log(token, LoginFlag)
  const navgate = useNavigate()
  const location = useLocation();
  React.useEffect(() => {
    // console.log('navgate', navgate)
    // console.log('location', location)
    if (!LoginFlag || location.pathname === '/login') {
      navgate('/login')
    }
  }, [])
  console.log('element----',element)
  return (
    <>
      {/* {element} */}
      <Layout ></Layout>

    </>
  )
}

export default App
