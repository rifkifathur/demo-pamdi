import React, { useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { 
  LaptopOutlined, 
  NotificationOutlined, 
  UserOutlined, 
  MenuFoldOutlined,
  MenuUnfoldOutlined, 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Flex, Input, Layout, Menu, theme } from 'antd';
import { BsEnvelope, BsExclamationCircle, BsFileEarmark, BsPlus, BsSearch, BsSend, BsStar, BsTag, BsTrash } from "react-icons/bs";

const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Inbox', '1', <BsEnvelope />),
  getItem('Sent', '2', <BsSend />),
  getItem('Draft', '3', <BsFileEarmark />),
  getItem('Starred', '4', <BsStar />),
  getItem('Important', '5', <BsTag />),
  getItem('Spam', '6', <BsExclamationCircle />),
  getItem('Trash', '7', <BsTrash />),
  getItem('Add Label', '8', <BsPlus />),
];

const MailPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: <Link to={'/apps/mail'}>Mail</Link> },
  ]
  
  const [collapsed, setCollapsed] = useState(false);
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <NBreadcrumb title="Mail" items={breadcrumbItems} />
      <Layout>
      <Content>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider
            style={{ background: colorBgContainer }} 
            width={200}
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            breakpoint="sm"
            onBreakpoint={(broken) => {
              if (broken) {
                setResponsive(!responsive);
                setCollapsed(!collapsed);
              }
            }}
          >
            <Flex className="mb-7" justify="center">
              <Button type="primary">Compose</Button>
            </Flex>
            <div className="h-[350px] overflow-y-auto">              
              <Menu              
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items}
              />
            </div>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              {responsive && <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />}
              <Input className="w-1/2 md:w-auto" placeholder="Search..." prefix={<BsSearch />} />
            </Header>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </Layout>          
        </Layout>
      </Content>
    </Layout>
    </>
  );
};

export default MailPage;
