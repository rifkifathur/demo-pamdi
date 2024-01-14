import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

type NHeaderType = {
  isCollapsed: boolean,
  setIsCollapsed: (isCollapsed: boolean) => void,
}

const { Header } = Layout;

const NHeader = ({ isCollapsed, setIsCollapsed}: NHeaderType) => {  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onCollapse}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default NHeader;
