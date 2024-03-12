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
  // {
  //     key: "/setting",
  //     name: "Settings",
  //     icon: <SettingOutlined />,
  //     sidebar: true,
  //     children: [
  //         {
  //             key: "/user",
  //             name: "User",
  //             path: "/user",
  //             baseKey: "/setting",
  //             link: <Link to="/user">User</Link>,
  //             component: <User />,
  //             sidebar: true,
  //         },
  //         {
  //             key: "/user/create",
  //             name: "Create User",
  //             path: "/user/create",
  //             baseKey: "/setting",
  //             baseParentKey: "/user",
  //             link: <Link to="/user/create">User</Link>,
  //             component: <User />,
  //             sidebar: false
  //         }
  //     ],
  // },
  {
    key: "/page",
    name: "Pages",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/user-management",
        name: "User Management",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
          {
            key: "/user",
            name: "User",
            path: "/user",
            baseKey: "/user-management",
            link: <Link to="/user">User</Link>,
            component: <User />,
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
        key: "/general",
        name: "General",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
          {
            key: "/button",
            name: "Button",
            path: "/button",
            link: <Link to="/button">Button</Link>,
            component: <ButtonPage />,
            sidebar: true,
            baseKey: "/general",
          },
          {
            key: "/typography",
            name: "Typography",
            path: "/typography",
            link: <Link to="/typography">Typography</Link>,
            component: <TypographyPage />,
            sidebar: true,
            baseKey: "/general",
          },
        ],
      },
      {
        key: "/navigation",
        name: "Navigation",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
          {
            key: "/anchor",
            name: "Anchor",
            path: "/anchor",
            link: <Link to="/anchor">Anchor</Link>,
            component: <AnchorPage />,
            sidebar: true,
            baseKey: "/navigation",
          },
          {
            key: "/breadcrumb",
            name: "Breadcrumb",
            path: "/breadcrumb",
            link: <Link to="/breadcrumb">Breadcrumb</Link>,
            component: <BreadcrumbPage />,
            sidebar: true,
            baseKey: "/navigation",
          },
          {
            key: "/dropdown",
            name: "Dropdown",
            path: "/dropdown",
            link: <Link to="/dropdown">Dropdown</Link>,
            component: <DropdownPage />,
            sidebar: true,
            baseKey: "/navigation",
          },
          {
            key: "/pagination",
            name: "Pagination",
            path: "/pagination",
            link: <Link to="/pagination">Pagination</Link>,
            component: <PaginationPage />,
            sidebar: true,
            baseKey: "/navigation",
          },
          {
            key: "/step",
            name: "Step",
            path: "/step",
            link: <Link to="/step">Step</Link>,
            component: <StepPage />,
            sidebar: true,
            baseKey: "/navigation",
          },
        ],
      },
    ],
  },
];

export default routes;
