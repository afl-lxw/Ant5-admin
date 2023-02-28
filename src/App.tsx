import React, { FC } from 'react'
import routes from '@/routers/router'
import { useRoutes, Outlet, useNavigate, useLocation } from "react-router-dom";

const App: FC = () => {
  const element = useRoutes(routes)
  const LoginFlag = React.useState<boolean>(false)

  const navgate = useNavigate()
  const location = useLocation();
  React.useEffect(()=>{
    console.log('navgate', navgate)
    console.log('location', location)
    if(LoginFlag && location.pathname !== '/login'){
      navgate('/login')
    }
  },[])
  // console.log('element----',element)
  return(
    <>
      {element}
    </>
  )
}

export default App
