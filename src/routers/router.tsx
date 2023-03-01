import React, { FC, lazy } from 'react'
import App from '@/App'
import Login from '@/pages/login'
import Main from '@/pages'
import NotFound from '@/pages/notFound'
import type { RouteObject } from 'react-router-dom'
import Discover from '@/pages/discover'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/discover',
        element: <Discover />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]

export default routes
