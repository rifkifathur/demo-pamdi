import React from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const BreadcrumbPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Navigation" },
    { title: <Link to={"/components/navigation/breadcrumb"}>Breadcrumb</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Breadcrumb" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Breadcrumb"
            bordered={false}
            style={{ width: "auto" }}
          >
            <NBreadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Separator Breadcrumb"
            bordered={false}
            style={{ width: "auto" }}
          >
            <NBreadcrumb
              separator=">"
              items={[
                {
                  title: 'Home',
                },
                {
                  title: 'Application Center',
                  href: '',
                },
                {
                  title: 'Application List',
                  href: '',
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Icon Breadcrumb"
            bordered={false}
            style={{ width: "auto" }}
          >
            <NBreadcrumb
              items={[
                {
                  href: '',
                  title: <HomeOutlined />,
                },
                {
                  href: '',
                  title: (
                    <>
                      <UserOutlined />
                      <span>Application List</span>
                    </>
                  ),
                },
                {
                  title: 'Application',
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BreadcrumbPage;
