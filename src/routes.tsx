import {    
    PieChartOutlined,
    SettingOutlined
  } from '@ant-design/icons';
import Dashboard from './views/dashboard';
import { Link } from 'react-router-dom';
import User from './views/user';

const routes = [
    {
        key: "Dashboard",
        name: "Dashboard",
        path: "/",
        link: <Link to="/">Dashboard</Link>,
        icon: <PieChartOutlined />,
        component: <Dashboard />,
    },
    {
        // Jika terdapat children key path isi empty string saja, component&link kosongkan   
        key: "Settings",     
        name: "Settings",
        path: "",
        icon: <SettingOutlined />,
        children: [
            {
                key: "User",
                name: "User",
                path: "/user",
                link: <Link to="/user">User</Link>,
                icon: "",
                component: <User />,                
            }
        ]
    },

]

export default routes;