import React from "react";
import { NBreadcrumb, NTable } from "../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ButtonPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/"}>User</Link> },
  ];

  return (
    <>
      <NBreadcrumb items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
        <Col className="gutter-row mb-8" xs={24} lg={12}>
          <Card title="Basic Button" bordered={false} style={{ width: "auto" }}>
            <Button type="primary" className="m-2">
              Primary
            </Button>
            <Button className="m-2">Default</Button>
            <Button type="dashed" className="m-2">
              Dashed
            </Button>
            <Button type="text" className="m-2">
              Text
            </Button>
            <Button type="link" className="m-2">
              Link
            </Button>
          </Card>
        </Col>
        <Col className="gutter-row mb-8" xs={24} lg={12}>
          <Card title="Icon Button" bordered={false} style={{ width: "auto" }}>
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle" className="m-2">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Tooltip title="search">
              <Button
                shape="circle"
                icon={<SearchOutlined />}
                className="m-2"
              />
            </Tooltip>
            <Button icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} className="m-2" />
            </Tooltip>
            <Button icon={<SearchOutlined />} className="m-2">Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} className="m-2" />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" className="m-2" />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ButtonPage;
