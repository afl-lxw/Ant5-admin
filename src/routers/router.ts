import React from 'react'
import { RouteObject } from 'react-router-dom'
import Home from '@/App'
import Login from '@/pages/login/'

const routes: RouteObject[] = [
  {
    path: '/login',
    // element: <Login />,
  },
  {
    path: '/',
    // element: <Home />,
    // children: [
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // ],
  },
]

export default routes
