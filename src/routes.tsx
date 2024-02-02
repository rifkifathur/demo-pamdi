import {    
    PieChartOutlined,
    SettingOutlined
  } from '@ant-design/icons';
import Dashboard from './views/dashboard';
import { Link } from 'react-router-dom';
import User from './views/user';
import ButtonPage from './views/button';

const routes = [
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
        // Jika terdapat children key path isi empty string saja, component&link kosongkan   
        key: "/setting",     
        name: "Settings",
        icon: <SettingOutlined />,
        sidebar: true,
        children: [
            {
                key: "/user",
                name: "User",
                path: "/user",
                baseParent: "/setting",
                link: <Link to="/user">User</Link>,
                component: <User />,  
                sidebar: true,              
            },
            {
                key: "/user/create",
                name: "Create User",
                path: "/user/create",
                baseParent: "/user",
                link: <Link to="/user/create">User</Link>,
                component: <User />,
                sidebar: false                
            }
        ],
    },
    {
        key: "/components",     
        name: "Components",
        sidebar: true,
        isGroup: 'group',
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
                        baseParent: "/general",              
                    },
                ],         
            },
        ]
    },    

]

export default routes;