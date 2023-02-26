import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { ConfigProvider } from 'antd';
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '@/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import zhCN from 'antd/es/locale/zh_CN'
import {
  BrowserRouter,
} from "react-router-dom";
import Router from '@/routers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReduxProvider store={store} >
    <PersistGate loading={null} persistor={persistor}>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
        locale={zhCN}
      >
        <React.StrictMode>
          <BrowserRouter >
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ConfigProvider>
    </PersistGate>
  </ReduxProvider>

);
