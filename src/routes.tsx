import { PieChartOutlined, SettingOutlined } from "@ant-design/icons";
import Dashboard from "./views/dashboard";
import { Link } from "react-router-dom";
import User from "./views/user";
import ButtonPage from "./views/button";

const routes: RoutesType[] = [
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
        ],
      },
      {
        key: "/tes",
        name: "tes",
        path: "/tes",
        link: <Link to="/tes">Button</Link>,
        component: <ButtonPage />,
        sidebar: true,
        // baseKey: "/general",
      },
    ],
  },
];

export default routes;
