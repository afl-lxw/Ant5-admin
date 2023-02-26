import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { MenuRoute } from './types'
import Home from '@/App'
import Login from '@/pages/login/'


export default function Router() {
  return (
    <BrowserRouter>
      {/* 所有的路由配置均在 BrowserRouter 内部 */}
      {/* 使用 Routes 替换曾经的 Switch */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} >

        </Route>


        {/* 重定向到首页 */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter >
  );
}
