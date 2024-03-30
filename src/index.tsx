import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import { AdminLayout } from './layouts/admin';
import Login from './layouts/auth/Login';
import Register from './layouts/auth/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AdminLayout />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
]);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { fontFamily: "Inter, sans-serif" } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

