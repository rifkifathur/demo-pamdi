import React from "react";
import { Layout, Button, Dropdown, Menu, Avatar, theme } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

type NHeaderType = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

const { Header } = Layout;

const NHeader = ({ isCollapsed, setIsCollapsed }: NHeaderType) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Avatar size={30} icon={<UserOutlined />} /> Nama Pengguna
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="myprofile">Profile</Menu.Item>
      <Menu.Item key="settings">Pengaturan</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="mode">Mode</Menu.Item>
      <Menu.Item key="bahasa">Bahasa</Menu.Item>
      <Menu.Item key="logout">Keluar</Menu.Item>
    </Menu>
  );

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
          width: 64,
          height: 64,
        }}
      />
      <Dropdown overlay={profileMenu} trigger={["click"]}>
        <Avatar
          size={32}
          shape="circle"
          icon={<UserOutlined />}
          style={{ marginRight: 30 }}
        />
      </Dropdown>
    </Header>
  );
};

export default NHeader;
