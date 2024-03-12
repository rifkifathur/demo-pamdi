import React from "react";
import { NBreadcrumb, NTable } from "../../components";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const User = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/"}>User</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="User" items={breadcrumbItems} />
      <Row className="mt-8">
        <Col span={24}>
          <NTable />
        </Col>
      </Row>
    </>
  );
};

export default User;
