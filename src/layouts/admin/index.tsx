import React, { useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Layout, theme } from 'antd';
import { NFooter, NSider, NHeader } from '../../components';
import routes from '../../routes';

const { Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  
  // const getRoutes = (routes: RoutesType[]): any => {    
  //   return routes.map((prop) => {
  //     if (location.pathname === prop.path) {        
  //       return (
  //         <Route path={`${prop.path}`} element={prop.component} key={prop.key} />
  //       );
  //     } else if (prop.children) {
  //       return prop.children?.map((childrenProp) => {
  //         if (location.pathname === childrenProp.path) {
  //           return (
  //             <Route path={`${childrenProp.path}`} element={childrenProp.component} key={childrenProp.key} />
  //           );    
  //         }
          
  //         return null;          
  //       })
  //     }
      
  //     return null;
  //   });
  // };
  
  const getRoutes = (routes: RoutesType[]): any => {    
      for (let route of routes) {
        if (route.children) {
            const foundInChildren = getRoutes(route.children);
            if (foundInChildren) {
                return foundInChildren;
            }
        }

        if (route.path && route.path === location.pathname) {          
            return <Route path={`${route.path}`} element={route.component} key={route.key}/>
        }

        if (route.isGroup && route.groupItem) {
            for (let groupItem of route.groupItem) {
                if (groupItem.children) {
                    const foundInGroupChildren = getRoutes(groupItem.children);
                    if (foundInGroupChildren) {
                        return foundInGroupChildren;
                    }
                }

                if (groupItem.path && groupItem.path === location.pathname) {
                    return groupItem;                    
                }
            }
        }
    }

    return null;
  };

  // const foundRoute = getRoutes(routes);
  // console.log(foundRoute);
  return (
    <Layout>      
      <NSider isCollapsed={isCollapsed} isResponsive={isResponsive} setIsResponsive={setIsResponsive}/>
      <Layout style={{ marginLeft: isCollapsed ? (isResponsive ? 0 : 70) : 200 }}>
        <NHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
            }}
          >
            <Routes>
              {getRoutes(routes)}
              {/* <Route path="/user" element={<User />} /> */}
            </Routes>
          </div>
        </Content>
        <NFooter />
      </Layout>
    </Layout>
  );
};

export { AdminLayout };
