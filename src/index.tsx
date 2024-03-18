import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import { AdminLayout } from './layouts/admin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "*",
    element: <AdminLayout />,
  },
]);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b', fontFamily: "Roboto, sans-serif" } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

