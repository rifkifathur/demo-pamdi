import React, { useState } from 'react';
import {
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button, Divider } from 'antd';
import NHeader from '../../components/header/NHeader';
import NSider from '../../components/sider/NSider';
import NFooter from '../../components/footer/NFooter';
import Dashboard from '../../views/dashboard';

const { Header, Content, Footer, Sider } = Layout;

interface NAdminLayoutProps {
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

const AdminLayout: React.FC<NAdminLayoutProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
            {/* <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            } */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </Content>
        <NFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
