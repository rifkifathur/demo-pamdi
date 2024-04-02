import React, { useState } from "react";
import { Layout, Button, Dropdown, Avatar, theme, Row, Col, ConfigProvider } from "antd";
import type { DropdownProps, MenuProps } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

type NHeaderType = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  isResponsive: boolean;
};

const { Header } = Layout;

const NHeader = ({ isCollapsed, setIsCollapsed, isResponsive }: NHeaderType) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '1') {
      return false;
    }
  };
  
  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };
  
  const handleLogout = (): void => {
    sessionStorage.clear();
    navigate("/login");
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Row>
          <Col>
            <Avatar size={40} icon={<UserOutlined />} />
          </Col>
          <Col className="px-4">
            <span className="font-bold text-lg">John smith</span><br />
            <span className="">Lorem ipsum</span>
          </Col>
        </Row>
      ),
    },  
    {
      type: "divider",
    },
    {
      key: '2',
      label: (
        <Link to={"/profile"}>My Profile</Link>
      ),
    },
    {
      key: '4',
      label: (
        <div onClick={handleLogout}>Logout</div>
      ),
    },
  ];

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onCollapse}
        style={{
          fontSize: "16px",
          width: 38,
          height: 38,
          marginLeft: isResponsive ? (isCollapsed ? 0 : 240) : 0,
          backgroundColor:"#fff",
          padding:0,
          zIndex:101
        }}
      />   
      <ConfigProvider
        theme={{
          components: {
            Dropdown: {
              paddingBlock:"8px",
            },
          },
        }}
      >        
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}
          trigger={['click']} 
          placement="bottomRight" 
          className="cursor-pointer"
        >
          <Avatar
              size={40}
              shape="circle"
              icon={<UserOutlined />}
              style={{ marginRight: 30 }}
            />
        </Dropdown>
      </ConfigProvider>
    </Header>
  );
};

export default NHeader;
