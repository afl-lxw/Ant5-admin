import React from 'react';
import type { FC } from 'react'
import { useRoutes } from "react-router-dom";
import routes from "@/routers/router";

const Login: FC = () => {
  const element = useRoutes(routes);
  return (
    <>
      {element}
    </>
  )
}


export default Login