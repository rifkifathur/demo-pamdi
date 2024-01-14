import React, { useState } from 'react';
import { Layout, Menu, theme, Button, Divider } from 'antd';
import type { MenuProps } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

type NSiderType = {
  isCollapsed: boolean,
  isResponsive: boolean,
  setIsResponsive: (isResponsive: boolean) => void,
}

const NSider = ({ isCollapsed, isResponsive, setIsResponsive } : NSiderType) => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  
  return (
    <Sider trigger={null} collapsed={isCollapsed}
      breakpoint="sm"
      collapsedWidth={isResponsive ? "0" : "70"}
      onBreakpoint={(broken) => {
        console.log(broken);
        if (broken) {
          setIsResponsive(!isResponsive);
        }
      }}
      onCollapse={(collapsed, type) => {
        return true;
      }}
      style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      <div className={`mt-[30px] flex items-center px-5 pb-20 text-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 text-white">
          Nara <span className="font-medium">ANTD</span>
        </div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={onClick}/>
    </Sider>
  );
};

export default NSider;