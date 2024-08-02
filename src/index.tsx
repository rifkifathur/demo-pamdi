import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { AdminLayout } from './layouts/admin';
import Login from './layouts/auth/Login';
import Register from './layouts/auth/Register';
import ResetPassword from './layouts/auth/ResetPassword';
import NewPassword from './layouts/auth/NewPassword';
import Pamdi1 from './views/Pamdi1';
import { ConfigProvider } from 'antd';
import Pamdi2 from './views/Pamdi2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  // {
  //   path: "/*",
  //   element: <AdminLayout />
  // },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/register-pamdi",
    element: <Pamdi1 />
  },
  {
    path: "/lomba-pamdi",
    element: <Pamdi2 />
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
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins, sans-serif",
          controlHeight: 38,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

