import React, { useState } from "react";
import "./NHeader.css";
import { Layout, Button, Dropdown, Avatar, theme, Row, Col, ConfigProvider, Flex, Input, Badge, Divider } from "antd";
import type { DropdownProps, MenuProps } from 'antd';
import {
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa6";
import { BsBell, BsCircleFill, BsMoon, BsPerson, BsSearch, BsSun, BsX } from "react-icons/bs";

type NHeaderType = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  isResponsive: boolean;
  isDarkMode: string|null;
  setIsDarkMode: (isDarkMode: string|null) => void;
};

const { Header } = Layout;

const NHeader = ({ isCollapsed, setIsCollapsed, isResponsive, isDarkMode, setIsDarkMode }: NHeaderType) => {
  const {
    token: { colorBgContainer, colorBgElevated, borderRadiusLG, boxShadowSecondary },
  } = theme.useToken();

  const contentNotifStyle: React.CSSProperties = {
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleDarkMode = (): void => {
    if (isDarkMode === 'no') {
      setIsDarkMode("yes");
      localStorage.setItem('isDarkMode', 'yes');
    } else {
      setIsDarkMode("no");
      localStorage.setItem('isDarkMode', 'no');
    }
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Row>
          <Col>
            <Avatar size={40} src="https://xsgames.co/randomusers/assets/avatars/male/52.jpg" />
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
    <>
      <Button
        className="btn-hide-sider"
        type="default"
        icon={isCollapsed ? (isResponsive ? <FaBars className="text-lg pointer-events-none" /> : <FaAngleRight />) : <FaAngleLeft />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          fontSize: "16px",
          width: 38,
          height: 38,
          marginLeft: isResponsive ? (isCollapsed ? 28 : 240) : -20,
          // border: "1px solid #6b6b6b",
          position: 'fixed',
          zIndex: 101,
          top: 18,
          padding: 0,
        }}
      />
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <ConfigProvider
          theme={{
            components: {
              Dropdown: {
                paddingBlock: "8px",
              },
            },
          }}
        >
          <Flex className="ml-20 lg:ml-10">
            <Input className="w-1/2 md:w-auto" placeholder="Search..." prefix={<BsSearch />} />
          </Flex>
          <Flex>
            <Dropdown
              dropdownRender={() => (
                <div className="w-[300px] h-auto mt-0" style={contentNotifStyle}>
                  <h3 className="pt-4 px-4">Notification</h3>
                  <Divider style={{ margin: 0 }} />
                  <Flex className="h-[350px] overflow-y-auto custom-scroll-notif" vertical>
                    {Array(10).fill(null).map((item, index) => {
                      return (
                        <Button type="text" className="my-2 h-auto" key={index}>
                          <Row>
                            <Col span={2} className="py-1">
                              <Avatar size={25} icon={<UserOutlined />} />
                            </Col>
                            <Col span={18} className="px-4 text-left">
                              <span className="font-bold text-[12pt] text-wrap">John smith</span><br />
                              <span className="text-[10pt] text-wrap">Lorem ipsum lorem ipusm barang tua</span><br />
                              <span className="font-bold text-slate-400 text-[8pt]">20 hrs ago</span>
                            </Col>
                            <Col span={4}>
                              <Flex justify="flex-end" align="flex-end" vertical>
                                <span className="visible"><BsCircleFill className={`text-[10px] -mt-3 -ml-5 ${index % 2 === 0 ? "text-sky-500" : "text-gray-300"}`}/></span>
                                <span><BsX className="text-[20px] -mt-10"/></span>
                              </Flex>
                            </Col>
                          </Row>
                        </Button>
                      )
                    })}
                  </Flex>
                  <Divider style={{ margin: 0 }} />
                  <div className="px-4 py-2">
                    <Button type="primary" className="w-full">View All</Button>
                  </div>
                </div>
              )}
              placement="bottomRight"
              className="cursor-pointer"
            >
              <Badge count={5} offset={[-10, 10]} size="small">
                <Button
                  type="text"
                  icon={<BsBell className="text-xl" />}
                />
              </Badge>
            </Dropdown>
            <Button
              className="mr-1"
              type="text"
              icon={isDarkMode === 'yes' ? <BsMoon className="text-xl" /> : <BsSun className="text-xl" />}
              onClick={handleDarkMode}
            />
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
                src="https://xsgames.co/randomusers/assets/avatars/male/52.jpg"
                style={{ marginRight: 30 }}
              />
            </Dropdown>
          </Flex>
        </ConfigProvider>
      </Header>
    </>
  );
};

export default NHeader;
