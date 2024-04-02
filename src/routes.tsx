import { PieChartOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Dashboard from "./views/dashboard";
import User from "./views/user";
import ButtonPage from "./views/button";
import TypographyPage from "./views/typography";
import AnchorPage from "./views/anchor";
import BreadcrumbPage from "./views/breadcrumb";
import DropdownPage from "./views/dropdown";
import PaginationPage from "./views/pagination";
import StepPage from "./views/step";
import ProfilePage from "./views/profile";
import EditProfilePage from "./views/profile/edit";
import { FaKey, FaUserGear, FaUserLock, FaUserShield } from "react-icons/fa6";
import RolePage from "./views/role";

/*
  baseKey for open accordion sidebar
  basaParent key for active sidebar when menu sidebar is false
*/
const routes: RoutesType[] = [
  {
    key: "/profile",
    name: "Profile",
    path: "/profile",
    component: <ProfilePage />,
    sidebar: false,
    children: [
      {
        key: "/profile/edit",
        name: "Edit Profile",
        path: "/profile/edit",
        baseKey: "/profile",
        component: <EditProfilePage />,
        sidebar: false,
      },
    ],
  },
  {
    key: "/",
    name: "Dashboard",
    path: "/",
    link: <Link to="/">Dashboard</Link>,
    icon: <PieChartOutlined />,
    component: <Dashboard />,
    sidebar: true,
  },
  {
    key: "/setting",
    name: "Authentication",
    icon: <FaUserLock />,
    sidebar: true,
    children: [
      {
        key: "/login",
        name: "Sign In",
        path: "/login",
        link: <Link to="/login">Sign In</Link>,
        sidebar: true,
      },
      {
        key: "/register",
        name: "Register",
        path: "/register",
        link: <Link to="/register">Register</Link>,
        sidebar: true,
      },
      {
        key: "/reset-password",
        name: "Reset Password",
        path: "/reset-password",
        link: <Link to="/reset-password">Reset Password</Link>,
        sidebar: true,
      },
      {
        key: "/new-password",
        name: "New Password",
        path: "/new-password",
        link: <Link to="/new-password">New Password</Link>,
        sidebar: true,
      },
    ],
  },
  {
    key: "/pages",
    name: "Pages",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/pages/user-management",
        name: "User Management",
        icon: <FaUserGear />,
        sidebar: true,
        children: [
          {
            key: "/pages/user-management/user",
            name: "User",
            path: "/pages/user-management/user",
            baseKey: "/pages/user-management",
            link: <Link to="/pages/user-management/user">User</Link>,
            component: <User />,
            sidebar: true,
          },
          {
            key: "/pages/user-management/user/create",
            name: "Create User",
            path: "/pages/user-management/user/create",
            baseKey: "/pages/user-management",
            baseParentKey: "/pages/user-management/user",
            link: <Link to="/pages/user-management/user/create">User</Link>,
            component: <User />,
            sidebar: false,
          },
        ],
      },
      {
        key: "/pages/role-permission",
        name: "Role & Permission",
        icon: <FaUserShield />,
        sidebar: true,
        children: [
          {
            key: "/pages/role-permission/role",
            name: "Role",
            path: "/pages/role-permission/role",
            baseKey: "/pages/role-permission",
            link: <Link to="/pages/role-permission/role">Role</Link>,
            component: <RolePage />,
            sidebar: true,
          },
          {
            key: "/user/create",
            name: "Create User",
            path: "/user/create",
            baseKey: "/user-management",
            baseParentKey: "/user",
            link: <Link to="/user/create">User</Link>,
            component: <User />,
            sidebar: false,
          },
        ],
      },
    ],
  },
  {
    key: "/components",
    name: "Components",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/components/general",
        name: "General",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
          {
            key: "/components/general/button",
            name: "Button",
            path: "/components/general/button",
            link: <Link to="/components/general/button">Button</Link>,
            component: <ButtonPage />,
            sidebar: true,
            baseKey: "/components/general",
          },
          {
            key: "/components/general/typography",
            name: "Typography",
            path: "/components/general/typography",
            link: <Link to="/components/general/typography">Typography</Link>,
            component: <TypographyPage />,
            sidebar: true,
            baseKey: "/components/general",
          },
        ],
      },
      {
        key: "/components/navigation",
        name: "Navigation",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
          {
            key: "/components/navigation/anchor",
            name: "Anchor",
            path: "/components/navigation/anchor",
            link: <Link to="/components/navigation/anchor">Anchor</Link>,
            component: <AnchorPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/breadcrumb",
            name: "Breadcrumb",
            path: "/components/navigation/breadcrumb",
            link: <Link to="/components/navigation/breadcrumb">Breadcrumb</Link>,
            component: <BreadcrumbPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/dropdown",
            name: "Dropdown",
            path: "/components/navigation/dropdown",
            link: <Link to="/components/navigation/dropdown">Dropdown</Link>,
            component: <DropdownPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/pagination",
            name: "Pagination",
            path: "/components/navigation/pagination",
            link: <Link to="/components/navigation/pagination">Pagination</Link>,
            component: <PaginationPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/step",
            name: "Step",
            path: "/components/navigation/step",
            link: <Link to="/components/navigation/step">Step</Link>,
            component: <StepPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
        ],
      },
    ],
  },
];

export default routes;
