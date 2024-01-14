import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
import Dashboard from './views/dashboard';

const routes = [
    {
        name: "Dashboard",
        path: "/",
        icon: <DesktopOutlined />,
        component: <Dashboard />,
    },
    {
        name: "Settings",
        path: "",
        icon: <DesktopOutlined />,
        component: <Dashboard />,
        children: [
            {
                name: "Department",
                path: "/department",
                icon: "",
                component: <Dashboard />,                
            }
        ]
    },

]

export default routes;