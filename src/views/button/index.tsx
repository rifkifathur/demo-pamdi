import React from "react";
import { NBreadcrumb, NTable } from "../../components";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const ButtonPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/"}>User</Link> },
  ];

  return (
    <>
      <NBreadcrumb items={breadcrumbItems} />
      <Row className="mt-8">
        <Col span={24}>
          BUtton
        </Col>
      </Row>
    </>
  );
};

export default ButtonPage;
