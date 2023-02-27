import React, { FC } from 'react'
import routes from '@/routers/router'
import { useRoutes, Outlet } from "react-router-dom";

const App: FC = () => {
  const element = useRoutes(routes)
  // console.log('element----',element)
  return(
    <>
      {element}
      {/* <Outlet /> */}
      {/* <Login /> */}
    </>
  )
}

export default App
