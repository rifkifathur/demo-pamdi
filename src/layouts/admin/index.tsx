import React, { useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Layout, theme } from 'antd';
import NHeader from '../../components/header/NHeader';
import NSider from '../../components/sider/NSider';
import NFooter from '../../components/footer/NFooter';
import routes from '../../routes';

const { Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const getRoutes = (routes: RoutesType[]): any => {
    console.log(location);
    return routes.map((prop, key) => {
      if (location.pathname === prop.path) {        
        return (
          <Route path={`${prop.path}`} element={prop.component} key={key} />
        );
      } else if (prop.children) {
        return prop.children?.map((childrenProp, childrenKey) => {
          if (location.pathname === childrenProp.path) {
            return (
              <Route path={`${childrenProp.path}`} element={childrenProp.component} key={childrenKey} />
            );    
          }
          
          return null;          
        })
      }
      
      return null;
    });
  };

  return (
    <Layout>      
      <NSider isCollapsed={isCollapsed} isResponsive={isResponsive} setIsResponsive={setIsResponsive}/>
      <Layout style={{ marginLeft: isCollapsed ? (isResponsive ? 0 : 70) : 200 }}>
        <NHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
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

export default AdminLayout;
