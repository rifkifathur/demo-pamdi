import React from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Row,
  Dropdown,
  Space,
  Tooltip,
  message,
} from "antd";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const DropdownPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Navigation" },
    { title: <Link to={"/components/navigation/dropdown"}>Dropdown</Link> },
  ];

  const items1: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const items2: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const items3: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items4: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items: items4,
    onClick: handleMenuClick,
  };
  return (
    <>
      <NBreadcrumb title="Dropdown" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Dropdown"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Dropdown menu={{ items: items1 }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Card>
          <Card
            className="mb-8"
            title="Other elements"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Dropdown menu={{ items: items3 }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Hover me
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Trigger mode"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Dropdown menu={{ items: items3 }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Click me
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Button with dropdown menu"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space wrap>
              <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                placement="bottom"
                icon={<UserOutlined />}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                onClick={handleButtonClick}
                disabled
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                buttonsRender={([leftButton, rightButton]) => [
                  <Tooltip title="tooltip" key="leftButton">
                    {leftButton}
                  </Tooltip>,
                  React.cloneElement(
                    rightButton as React.ReactElement<any, string>,
                    { loading: true }
                  ),
                ]}
              >
                With Tooltip
              </Dropdown.Button>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Button
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown.Button
                menu={menuProps}
                onClick={handleButtonClick}
                danger
              >
                Danger
              </Dropdown.Button>
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Placement Dropdown"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Dropdown menu={{ items: items2 }} placement="bottomLeft">
                  <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="bottom">
                  <Button>bottom</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="bottomRight">
                  <Button>bottomRight</Button>
                </Dropdown>
              </Space>
              <Space wrap>
                <Dropdown menu={{ items: items2 }} placement="topLeft">
                  <Button>topLeft</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="top">
                  <Button>top</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="topRight">
                  <Button>topRight</Button>
                </Dropdown>
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Arrow Dropdown"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Dropdown menu={{ items: items2 }} placement="bottomLeft" arrow>
                  <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="bottom" arrow>
                  <Button>bottom</Button>
                </Dropdown>
                <Dropdown
                  menu={{ items: items2 }}
                  placement="bottomRight"
                  arrow
                >
                  <Button>bottomRight</Button>
                </Dropdown>
                <br />
                <Dropdown menu={{ items: items2 }} placement="topLeft" arrow>
                  <Button>topLeft</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="top" arrow>
                  <Button>top</Button>
                </Dropdown>
                <Dropdown menu={{ items: items2 }} placement="topRight" arrow>
                  <Button>topRight</Button>
                </Dropdown>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DropdownPage;
