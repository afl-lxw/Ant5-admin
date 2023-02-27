import React from 'react';
import type { FC } from 'react'
import { useRoutes } from "react-router-dom";
import routes from "@/routers/router";
import './index.less'
import loginImg from '@/assets/icon/bg1-2.svg'

const Login: FC = () => {
  return (
    <div className='login_container' >
      <div className='login_center'>
        <img className='login_img' src={loginImg} alt="" />
        <div className='logo-from' ></div>
      </div>
    </div>
  )
}



export default Login