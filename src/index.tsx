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
import ResetPassword from './layouts/auth/ResetPassword';
import NewPassword from './layouts/auth/NewPassword';

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
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/new-password",
    element: <NewPassword />
  },
]);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { fontFamily: "Inter, sans-serif", controlHeight:38 } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

